import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    todos:[]
}

const TodoSlice =createSlice({
    name:'todos',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            state.todos = [...state.todos, action.payload];

        }
    }
})

export const {addTodo} = TodoSlice.actions;
export default TodoSlice.reducer