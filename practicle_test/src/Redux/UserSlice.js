import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  user: [],
};

const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    adduser: (state, action) => {
      state.user.push(action.payload);
    },

    // checkuser:(state,action)=>{
      // const existingUser = state.user.find((user)=> user.email === action.payload.email && user.password === action.payload.password )
      // console.log("🚀 ~ existingUser:", existingUser)
      // debugger
      // return existingUser ? existingUser : null; 

    // }
  },
});

console.log("userSlice", UserSlice.actions);
export const { adduser,checkuser } = UserSlice.actions;
export default UserSlice.reducer;
