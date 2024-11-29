import { useMemo, useState } from "react";
import "./App.css";
import { useEffect } from "react";
import { useCallback } from "react";
// import { FaFilter } from "react-icons/fa";
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
  console.log("🚀 ~ App ~ todos:", todos);

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

  // const sortingAtoZ = () => {
  //   const updatedTodoAtoZ = [...todos]
  //   debugger
  //   console.log("🚀 ~ sortingAtoZ ~ updatedTodoAtoZ:", updatedTodoAtoZ)
  //   updatedTodoAtoZ.sort((a, b) => {
  //     if (a.text.toLowerCase() < b.text.toLowerCase()) {
  //       console.log("if part A to Z");

  //       return -1;
  //     } else {
  //       console.log("else part A to Z");

  //       return 1;
  //     }
  //   });
  //   setTodos(updatedTodoAtoZ)
  // };

  // const sortingAtoZuseCallback = useCallback(() => {
  //   const updatedTodoAtoZ = [...todos];
  //   debugger
  //   console.log("🚀 ~ sortingAtoZ ~ updatedTodoAtoZ:", updatedTodoAtoZ);
  //   updatedTodoAtoZ.sort((a, b) => {
  //     if (a.text.toLowerCase() < b.text.toLowerCase()) {
  //       console.log("if part A to Z");

  //       return -1;
  //     } else {
  //       console.log("else part A to Z");

  //       return 1;
  //     }
  //   });
  //   setTodos(updatedTodoAtoZ);
  // }, [todos]);

  const [sortOrder, setSortOrder] = useState("asc");

  const sortedTodods = useMemo(() => {
    return [...todos].sort((a, b) => {
      if (sortOrder == "asc") {
        return a.text.localeCompare(b.text); // A-Z
      } else {
        return b.text.localeCompare(a.text); // Z-A
      }
    });
  }, [todos, sortOrder]);

  const toggleSorted = () => {
    setSortOrder((prev) => (prev == "asc" ? "desc" : "asc"));
  };
  // const sortingZtoA = () => {
  //   debugger;
  //   const UpdatedtodoZtoA = [...todos];
  //   console.log("🚀 ~ sortingZtoA ~ UpdatedtodoZtoA:", UpdatedtodoZtoA);

  //   UpdatedtodoZtoA.sort((a, b) => {
  //     if (a.text.toLowerCase() > b.text.toLowerCase()) {
  //       console.log("if part Z to A");

  //       return -1;
  //     } else {
  //       console.log("else part Z to A");

  //       return 1;
  //     }
  //   });
  //   setTodos(UpdatedtodoZtoA);
  // };

  const [Search, setSearch] = useState();
  console.log("🚀 ~ App ~ Search:", Search);

  // const handleSearch = () => {
  //   console.log("search==", Search);

  //   const filterdValue = sortedTodods.find((todo) => todo.text == Search);
  //   console.log("🚀 ~ handleSearch ~ filterdValue:", filterdValue);
  //   setSearch(filterdValue.text);
  // };

  // const filteredTodo = useMemo(()=>{
  //   return sortedTodods.filter((todo)=>{
  //     todo.text.toLowerCase().includes(Search?.toLowerCase())
  //   })
  // },[sortedTodods,Search])

  const filteredTodo = useMemo(() => {
    return sortedTodods.filter((todo) =>
      todo.text.toLowerCase().includes(Search?.toLowerCase() || "")
    );
  }, [sortedTodods, Search]);
  

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
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "20px",
          gap: "14px",
        }}
      >
        <input
          type="text"
          style={{ width: "20%", height: "30px" }}
          name="search"
          value={Search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          placeholder="Search Here"
        />
        {/* <button
          style={{
            backgroundColor: "mediumaquamarine",
            padding: "10px",
            border: "0",
            borderRadius: "10px",
          }}
          onClick={filteredTodo}
        >
          Reset
        </button> */}
      </div>
      <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
        <input
          type="text"
          style={{ height: "30px" }}
          value={input}
          onChange={handleChange}
          placeholder="Add Your Task"
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
        <div style={{ display: "flex", gap: "10px" }}>
          {sortOrder == "asc" ? (
            <FcAlphabeticalSortingAz
              style={{
                fontSize: "35px",
                backgroundColor: "darkred",
                borderRadius: "5px",
              }}
              onClick={toggleSorted}
            />
          ) : (
            <FcAlphabeticalSortingZa
              style={{
                fontSize: "35px",
                backgroundColor: "darkred",
                borderRadius: "5px",
              }}
              onClick={toggleSorted}
            />
          )}
        </div>
      </div>

      <div style={{ marginLeft: "40%" }}>
        {filteredTodo.length === 0 && <h1>No Todos Found</h1>}

        {filteredTodo.map((e, index) => (
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
