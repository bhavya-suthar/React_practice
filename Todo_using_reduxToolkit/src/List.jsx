import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo,updateTodo,CheckboxAction } from "./Feature/TodoSlice";
import { Button } from "react-bootstrap";

const List = ({input}) => {
  const todosData = useSelector((state) => state.todo);
  console.log("🚀 ~ List ~ todosData:", todosData)
  const dispatch = useDispatch();
  
  return (
    <>
    <ul className="container">
      {todosData.todos.map((todo) => {
        return (
          <li key={todo.id} style={{listStyle:"none",display:"flex",gap:"14px",alignItems:"center",justifyContent:"center",padding:"10px"}}>
          <input type="checkbox" checked={todo.IsSelected} onChange={(e)=>dispatch(CheckboxAction({checked: e.target.checked,id:todo.id}))}/>
         <p style={{textDecorationLine: todo.IsSelected ? "line-through" : "none"}}>{todo.text}</p>
            <Button variant="danger" onClick={() => dispatch(removeTodo(todo.id))}>
              Delete
            </Button>
            
            <Button variant="warning" onClick={() => dispatch(updateTodo({id:todo.id,text: todo.text}))}>
              Update
            </Button>
          </li>
        );
      })}
      </ul>
    </>
  );
};

export default List;
