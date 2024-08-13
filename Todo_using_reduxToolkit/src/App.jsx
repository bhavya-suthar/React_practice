import "./App.css";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { ClearAll, LightDark } from "../src/Feature/TodoSlice";
import { addTodo, setInputValue, EditTodo } from "./Feature/TodoSlice";
import List from "./List";

function App() {
  const [input, setInput] = useState("");
  console.log("🚀 ~ App ~ input:", input);
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.todo);
  console.log("🚀 ~ App ~ todos:", todos);

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (todos.inputValue !== "") {
      dispatch(addTodo(todos.inputValue));
    }
    dispatch(setInputValue(""));
  };

  return (
    <>
      <div className={todos.isLight ? "dark" : "light"}>
        <h1
          style={{ display: "flex", justifyContent: "center", margin: "22px" }}
        >
          Todo using ReduxToolkit
        </h1>
        <div className="container d-flex py-5 px-5 gap-3 justify-content-center">
          <input
            type="text"
            value={todos.inputValue}
            placeholder="Enter your Task"
            onChange={(e) => dispatch(setInputValue(e.target.value))}
          />
          {todos.IsEdit.text === "" ? (
            <Button
              onClick={addTodoHandler}
              className={todos.isLight ? "darkbtn" : "light"}
            >
              Add
            </Button>
          ) : (
            <Button
              onClick={() => dispatch(EditTodo(todos.inputValue))}
              className="todoBtn"
            >
              Edit
            </Button>
          )}
          <Button
            variant="danger"
            onClick={() => dispatch(ClearAll())}
            className="todoBtn"
          >
            Clear All
          </Button>
          <Form>
            <Form.Check // prettier-ignore
              type="switch"
              id="custom-switch"
              checked={todos.isLight}
              onChange={(e) => {
                dispatch(LightDark({ checked: e.target.checked }));
                if (e.target.checked) {
                  document.body.classList.replace("light","dark");
                  // document.body.classList.remove("light")          

                } else {
                  document.body.classList.replace("dark","light");
                  // document.body.classList.remove("dark")          

                }
              }
            }
            />
          </Form>
        </div>
        <List props={input} />
      </div>
    </>
  );
}

export default App;
