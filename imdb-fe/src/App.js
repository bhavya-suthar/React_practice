import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Header from './Component/Header/Header';
import Home from './Pages/Home/Home';

function App() {
  return (
    <>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route index element={<Home/>}></Route>
          <Route path='/movie/:id' element={<h1>Movie Detail page</h1>}></Route>
          <Route path='/movie/type' element={<h1>Movie List page</h1>}></Route>
          <Route path='/*' element={<h1>Page Not Found</h1>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
