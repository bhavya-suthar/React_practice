import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import { useCallback } from "react";
import { FaFilter } from "react-icons/fa";
import {
  FcAlphabeticalSortingAz,
  FcAlphabeticalSortingZa,
} from "react-icons/fc";

function App() {
  const [input, setInput] = useState();
  // console.log("🚀 ~ App ~ input:", input);

  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    // console.log(
    //   "🚀 ~ const[todos,setTodos]=useState ~ savedTodos:",
    //   savedTodos
    // );
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  // console.log("🚀 ~ App ~ todos:", todos);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  // const handleAddTodo = () => {
  //   setTodos([...todos, {id:Date.now(), text: input }]);
  //   setInput("");
  // };

  const add = useCallback(() => {
    if (input.trim() == "") return;
    setTodos([...todos, { id: Date.now(), text: input }]);
    setInput("");
  }, [input]);

  // const handleDelete =(id)=>{
  //   const filteredTodo = todos.filter((todo)=> todo.id !== id )
  //   console.log("🚀 ~ handleDelete ~ filteredTodo:", filteredTodo)
  //   localStorage.setItem("todos",JSON.stringify(filteredTodo))
  // }

  const handleDelete = useCallback(
    (id) => {
      const filteredTodo = todos.filter((todo) => todo.id !== id);
      console.log("🚀 ~ handleDelete ~ filteredTodo:", filteredTodo);
      setTodos(filteredTodo);
      // localStorage.setItem("todos",JSON.stringify(filteredTodo))
    },
    [todos]
  );

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "40px",
        }}
      >
        Todo List Using UseMemo And UseCallback
      </h1>
      <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
        <input
          type="text"
          style={{ height: "30px" }}
          value={input}
          onChange={handleChange}
        />
        <button
          style={{
            backgroundColor: "green",
            border: "0",
            height: "35px",
            width: "55px",
            borderRadius: "5px",
          }}
          onClick={add}
        >
          Add
        </button>
        <div style={{display:"flex",gap:"10px"}}>
          <FcAlphabeticalSortingAz style={{fontSize:"35px",backgroundColor:"darkred",borderRadius:"5px"}}/>
          <FcAlphabeticalSortingZa style={{fontSize:"35px",backgroundColor:"darkred",borderRadius:"5px"}}/>
        </div>
      </div>

      <div style={{ marginLeft: "40%" }}>
        {todos.length === 0 && <h1>No Todos Found</h1>}
        {todos.map((e, index) => (
          <div
            style={{ display: "flex", alignItems: "center", gap: "5px" }}
            key={index}
          >
            <h2>
              {index + 1} {e.text}
            </h2>
            <button
              style={{
                height: "30px",
                backgroundColor: "purple",
                color: "white",
                border: "0",
                borderRadius: "3px",
                padding: "10px",
              }}
              onClick={() => handleDelete(e.id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
