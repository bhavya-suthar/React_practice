import "./App.scss";
// import {Cart,Home,CategoryProduct,ProductSingle,Search} from "./Pages/index.js"
import HomePage from "./Pages/HomePage/HomePage";
import Sidebar from './Components/Sidebar/SideBar'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import {Provider} from 'react-redux'
import Header from './Components/Header/Header'
import { store } from "./store/store";
import ProductSinglePage from './Pages/ProductSinglePage/ProductSinglePage'
import CategoryProductPage from './Pages/CategoryProductPage/CategoryProductPage'
import Cartpage from './Pages/CartPage/Cartpage'
import SearchPage from './Pages/SearchPage/SearchPage'
import Footer from "./Components/Footer/Footer";
// import Footer from './Components/Footer/Footer'


function App() {
return(
  <Provider store={store}>

  <BrowserRouter>
  <Header />
  <Sidebar/>
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/product/:id" element={<ProductSinglePage />} />
    <Route path="/category/:category" element={<CategoryProductPage />} />
    <Route path="/cart" element={<Cartpage />} />
    <Route path="/search/:searchterm" element={<SearchPage />} />
  </Routes>

  <Footer/>
</BrowserRouter>
  </Provider>
)
}

export default App;
