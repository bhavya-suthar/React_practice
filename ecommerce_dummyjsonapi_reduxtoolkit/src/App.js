import "./App.scss";
// import {Cart,Home,CategoryProduct,ProductSingle,Search} from "./Pages/index.js"
import HomePage from "./Pages/HomePage/HomePage";
import Sidebar from './Components/Sidebar/SideBar'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import {Provider} from 'react-redux'
import Header from './Components/Header/Header'
import { store } from "./store/store";
// import Footer from './Components/Footer/Footer'


function App() {
return(
  <Provider store={store}>

  <BrowserRouter>
  <Header />
  <Sidebar/>
  <Routes>
    <Route path="/" element={<HomePage />} />
    {/* Define other routes here */}
  </Routes>
</BrowserRouter>
  </Provider>
)
}

export default App;
