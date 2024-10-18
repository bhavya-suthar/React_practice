import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

const TodoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({ text: action.payload, id: nanoid(), isExpand: false });
    },
    expandCheck: (state, action) => {
      const task = state.todos.find((ele) => ele.id === action.payload);
      console.log("🚀 ~ action.payload:", action.payload);
      console.log("🚀 ~ task:", { ...task });

      if (task) {
        task.isExpand = true;
      } else {
        console.log("error");
      }
    },
    closeExpand: (state, action) => {
      const task = state.todos.find((ele) => ele.id === action.payload);
      task.isExpand = false;
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, expandCheck, closeExpand, deleteTodo } =
  TodoSlice.actions;
export default TodoSlice.reducer;
