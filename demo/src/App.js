import logo from './logo.svg';
import './App.css';
import DashBoard from './Components/DashBoard';
import Login from './Pages/Login';
import { Route, Routes } from 'react-router-dom';
import AboutUs from './Pages/AboutUs';
import Contact from './Pages/Contact';
import FAQ from './Pages/FAQ';
import Privacy_policy from './Pages/Privacy_policy';
import Registration from './Pages/Registration'
import PrivateRoute from './Route/PrivateRoute';
import NotFound from './Pages/NotFound';
import PublicRoute from './Route/PublicRoute';

function App() {
  return (
    <>
    {/* <Login/> */}
    {/* <Navbar/> */}

      <Routes>
      <Route path='*' element={<PrivateRoute element={<NotFound/>}/>}/>
      <Route path='/*' element={<PublicRoute element={<NotFound/>}/>}/>
      <Route path='/' element={<PublicRoute element={<Login/>}/>}/>
      <Route path='/register' element={<PublicRoute element={<Registration/>}/>}/>
      <Route path='/login' element={<PublicRoute element={<Login/>}/>}/>
      <Route path='/about' element={<PrivateRoute element={<AboutUs/>}/>}/>
      <Route path='/contact' element={<PrivateRoute element={<Contact/>}/>}/>
      <Route path='/faqs' element={<PrivateRoute element={<FAQ/>}/>}/>
      <Route path='/dashboard' element={<PrivateRoute element={<DashBoard/>}/>}/>
      <Route path='/privacypolicy' element={<PrivateRoute element={<Privacy_policy/>}/>}/>

      </Routes>
      
    </>
  );
}

export default App;
