import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactImageCrop from './Components/ReactImageCrop';




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ReactImageCrop/>
    </>
    )
}

export default App
