import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  IsEdit: {
    text: "",
    id: null,
  },
  inputValue: "",
  IsSelected : false,
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      // debugger
      const todo = { id: nanoid(), text: action.payload };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      state.IsEdit = action.payload;
      state.inputValue = action.payload.text;
    },
    setInputValue: (state, action) => {
      state.inputValue = action.payload;
    },
    EditTodo: (state, action) => {
      // debugger
      const updatedTodos = state.todos.map((todo) =>
        todo.id === state.IsEdit.id
          ? {...todo, text: state.inputValue }
          : todo
      );
      console.log("🚀 ~ updatedTodos:", updatedTodos);
      state.todos = updatedTodos;

      state.IsEdit = {
        text: "",
        id: null,
      };
      state.inputValue =""
    },
    CheckboxAction:(state,action)=>{
      state.IsSelected 
    }
  },
});

export const { addTodo, removeTodo, updateTodo, setInputValue, EditTodo } = todoSlice.actions;

export default todoSlice.reducer;
