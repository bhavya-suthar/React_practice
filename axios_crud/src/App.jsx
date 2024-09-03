import './App.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from './Components/Home'
import Create from './Components/Create'
import Read from './Components/Read'
import Update from './Components/Update'
import "bootstrap/dist/css/bootstrap.min.css"

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/create' element={<Create/>}/>
        <Route path='/update/:id' element={<Update/>}/>
        <Route path='/read/:id' element={<Read/>}/>
      </Routes>
    </BrowserRouter>

     </>
  )
}

export default App
