import './App.scss'
import {Cart,CategoryProduct,Home,Search,ProductSingle} from './Pages/index'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Header from './Components/Header/Header'
import Sidebar from './Components/Sidebar/SideBar'
import Footer from './Components/Footer/Footer'
function App() {

  return (
    <div className="App">
      <Header/>
      <Sidebar/>
      <Footer/>
    </div>
   )
}

export default App
