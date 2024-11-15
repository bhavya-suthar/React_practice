import { createSlice } from "@reduxjs/toolkit"
import {data} from '../data'

const initialState ={
    product:data,
    filteredProduct:null,

}
console.log("🚀 ~ initialState.product:", initialState.product)

const TableSlice = createSlice({
    name:"react_table",
    initialState,
    reducers:{
        filteredSearch:(state,action)=>{
            // const filteredData = data.filter((item) => action.payload === item.title);
            const filteredData = state.product.filter((item) => item.title.toLowerCase().includes(action.payload.toLowerCase()));
            console.log("🚀 ~ filteredData:", filteredData)
            state.filteredProduct = filteredData.length > 0 ?filteredData :null
        },
        resetSearch:(state,action)=>{
            state.filteredProduct = null
        }
    }
})

export const {filteredSearch,resetSearch} = TableSlice.actions
export default TableSlice.reducer