// import './App.css'

import { Provider } from "react-redux"
import { store } from "./Redux/store"
import News from "./News"

function App() {

  return (
    <Provider store={store}>
     <h1>News App</h1>
     <News/>
    </Provider>
  )
}

export default App
