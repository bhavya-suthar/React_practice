import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo,updateTodo } from "./Feature/TodoSlice";
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
            {todo.text}
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
