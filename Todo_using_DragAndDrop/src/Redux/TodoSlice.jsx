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
    reorderTodo: (state, action) => {
      const { startIndex, endIndex } = action.payload;
      console.log("🚀 ~ endIndex:", endIndex);
      console.log("🚀 ~ startIndex:", startIndex);

        const [removed] = state.todos.splice(startIndex, 1);
        console.log("🚀 ~ removed:", JSON.parse(JSON.stringify(removed)));
        state.todos.splice(endIndex, 0, removed);
      
    },
  },
});

export const { addTodo, expandCheck, closeExpand, deleteTodo, reorderTodo } =
  TodoSlice.actions;
export default TodoSlice.reducer;
