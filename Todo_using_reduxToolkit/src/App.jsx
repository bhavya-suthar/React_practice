// import './App.css'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { addTodo,setInputValue } from './Feature/TodoSlice';
import List from './List';


function App() {
  const [input,setInput] = useState('')
  console.log("🚀 ~ App ~ input:", input)
  const dispatch = useDispatch()

  const todos = useSelector(state=>state.todo)
  console.log("🚀 ~ App ~ todos:", todos)

  const addTodoHandler = (e)=>{
    e.preventDefault()
    dispatch(addTodo(todos.inputValue))
    dispatch(setInputValue(""))

  }

  return (
    <>
       <h1>Todo using ReduxToolkit</h1>
     <div className='container d-flex py-5 px-5 gap-3 justify-content-center'>
      <input type='text' value={todos.inputValue} placeholder='Enter your Task' onChange={(e)=>dispatch(setInputValue(e.target.value))}/>
        <Button onClick={addTodoHandler} className="todoBtn">Add</Button>
      </div>
      <List props={input}/>
    </>
  )
}

export default App
