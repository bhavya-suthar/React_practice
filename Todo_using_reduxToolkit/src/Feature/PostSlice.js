import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  post: [],
  
};

const postSlice = createSlice({
  name: "Post",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = { id: nanoid(), text: action.payload };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateTodo:(state,action)=>{
    //    const updatedTodo=  state.todos.map((todo)=>{
    //        if( todo.id === action.payload){
    //             return action.payload
    //        }else{
    //         return state
    //        }
    //     })

    
    // return {
    //     ...state,
    //     isEdit : action.payload,
    //     inputValue : action.payload.text
    // }
    state.IsEdit = action.payload;
    state.inputValue = action.payload.text
    },
    setInputValue :(state,action)=>{
          state.inputValue = action.payload
    }
  },
});

export const { addTodo, removeTodo,updateTodo,setInputValue } = postSlice.actions;

export default postSlice.reducer;
