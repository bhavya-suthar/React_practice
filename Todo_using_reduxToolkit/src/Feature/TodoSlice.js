import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  IsEdit: {
    text: "",
    id: null,
  },
  inputValue: "",
  isLight:false
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      // debugger
      const todo = { id: nanoid(), text: action.payload, IsSelected: false };
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
        todo.id === state.IsEdit.id ? { ...todo, text: state.inputValue } : todo
      );
      console.log("🚀 ~ updatedTodos:", updatedTodos);
      state.todos = updatedTodos;

      state.IsEdit = {
        text: "",
        id: null,
      };
      state.inputValue = "";
    },
    CheckboxAction: (state, action) => {
      if (action.payload.checked) {
        const updateTodo = state.todos.map((todo) => {
          if (todo.id == action.payload.id) {
            return {
              ...todo,
              IsSelected: true,
            };
          } else {
            return todo;
          }
        });
        state.todos = updateTodo;
      } else {
        const updateTodo = state.todos.map((todo) => {
          if (todo.id == action.payload.id) {
            return {
              ...todo,
              IsSelected: false,
            };
          } else {
            return todo;
          }
        });
        state.todos = updateTodo;
      }
    },
    ClearAll: (state) => {
      state.todos = [];
    },
    LightDark:(state)=>{
      state.isLight = !state.isLight;
    },
  },
});

export const {
  addTodo,
  removeTodo,
  updateTodo,
  setInputValue,
  EditTodo,
  CheckboxAction,
  ClearAll,
  LightDark
} = todoSlice.actions;

export default todoSlice.reducer;
