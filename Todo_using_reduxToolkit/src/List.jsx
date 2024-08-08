import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "./Feature/TodoSlice";
import { Button } from "react-bootstrap";

const List = () => {
  const todos = useSelector((state) => state.todos);
  console.log("🚀 ~ List ~ todos:", todos);
  const dispatch = useDispatch();
  return (
    <>
    <ul className="container">
      {todos.map((todo) => {
        return (
          <li key={todo.id} style={{listStyle:"none",display:"flex",gap:"14px",alignItems:"center",justifyContent:"center",padding:"10px"}}>
            {todo.text}
            <Button variant="danger" onClick={() => dispatch(removeTodo(todo.id))}>
              Delete
            </Button>
          </li>
        );
      })}
      </ul>
    </>
  );
};

export default List;
