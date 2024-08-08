// import './App.css'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addTodo } from './Feature/TodoSlice';
import List from './List';


function App() {
  const [input,setInput] = useState('')
  console.log("🚀 ~ App ~ input:", input)
  const dispatch = useDispatch()

  const addTodoHandler = (e)=>{
    e.preventDefault()
    dispatch(addTodo(input))
    setInput('')
  }

  return (
    <>
       <h1>Todo using ReduxToolkit</h1>
     <div className='container d-flex py-5 px-5 gap-3 justify-content-center'>
      <input type='text' value={input} placeholder='Enter your Task' onChange={(e)=>setInput(e.target.value)}/>
        <Button onClick={addTodoHandler} className="todoBtn">Add</Button>
      </div>
      <List/>
    </>
  )
}

export default App
