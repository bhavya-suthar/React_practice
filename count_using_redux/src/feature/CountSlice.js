import { createSlice } from "@reduxjs/toolkit";

const initialState ={count:0}

const countSlice = createSlice({
    name:"counter",
    initialState,
    reducers:{
        increment:(state)=>{
            state.count +=1            
        
        },
        decrement:(state)=>{
            state.count -=1
        },
        incByTen:(state,action)=>{
            state.count +=action.payload
        },
        decByTen:(state,action)=>{
            state.count -=action.payload
        }

    }
})

export const {increment,decrement,incByTen,decByTen} = countSlice.actions
export default countSlice.reducer