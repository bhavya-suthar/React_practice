import './App.css';
import Login from './Pages/Login';
import { Route, Routes } from 'react-router-dom';
import Registration from './Pages/Registration';
import Dashboard from './Pages/Dashboard';
import ForgotPassword from './Pages/ForgotPassword';
import ChangePassword from './Pages/ChangePassword';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Login/>} />
      <Route path='/register' element={<Registration/>} />
      <Route path='/dashboard' element={<Dashboard/>} />
      <Route path='/forgotpassword' element={<ForgotPassword/>} />
      <Route path='/changepassword' element={<ChangePassword/>} />
    </Routes>
    );
}

export default App;
