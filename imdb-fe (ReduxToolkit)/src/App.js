import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Header from './Component/Header/Header';
import Home from './Pages/Home/Home';
import MovieList from './Component/movieList/MovieList';
import Movie from './Pages/MovieDetails/Movie';

function App() {
  return (
    <>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route index element={<Home/>}></Route>
          <Route path='movie/:id' element={<Movie/>}></Route>
          <Route path="movies/:type" element={<MovieList />}></Route>
          <Route path='/*' element={<h1>Page Not Found</h1>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
