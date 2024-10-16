import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  currentUser: null,
};
console.log("🚀 ~ initialState:", initialState);

const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    adduser: (state, action) => {
      // Add a new user, each with an `isLoggedIn` field
      state.users.push({ ...action.payload, isLoggedIn: false });
    },

    logginUser: (state, action) => {
      const existingUser = state.users.find(
        (user) =>
          user.email === action.payload.email &&
          user.password === action.payload.password
      );

      if (existingUser) {
        existingUser.isLoggedIn = true;
        state.currentUser = existingUser;
      } else {
        state.currentUser = null;
      }
    },

    forgotPassword: (state, action) => {
      // debugger;
      const verifyEmail = state.users.find(
        (ele) => ele.email === action.payload.email
      );
      console.log("🚀 ~ verifyEmail:", JSON.parse(JSON.stringify(verifyEmail))); // Converts proxy to plain object
    },
    logoutUser: (state) => {
      if (state.currentUser) {
        state.currentUser.isLoggedIn = false;
        state.currentUser = null;
      }
    },
  },
});

export const { adduser, logginUser, logoutUser, forgotPassword } =
  UserSlice.actions;
export default UserSlice.reducer;
