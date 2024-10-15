import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [], // List of users
  currentUser: null, // Store the logged-in user here
};

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

    logoutUser: (state) => {
      if (state.currentUser) {
        state.currentUser.isLoggedIn = false;
        state.currentUser = null; // Reset currentUser
      }
    },
  },
});

export const { adduser, logginUser, logoutUser } = UserSlice.actions;
export default UserSlice.reducer;
