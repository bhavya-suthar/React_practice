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
      const verifyEmail = state?.users?.find((ele) => ele.email === action?.payload?.email);
      console.log("🚀 ~ verifyEmail:", verifyEmail)
      console.log("🚀 ~ verifyEmail:", JSON.parse(JSON.stringify(verifyEmail)));
      // const verifyEmail = Array.isArray(state.users)
      //   ? state.users.find((ele) => ele.email === action?.payload?.email)
      //   : undefined;

      console.log("🚀 ~ verifyEmail:", verifyEmail);
      if (verifyEmail) {
        state.verifiedUserEmail = verifyEmail.email; // Store the verified email
      } else {
        state.verifiedUserEmail = "";
      }
    },
    logoutUser: (state) => {
      if (state.currentUser) {
        state.currentUser.isLoggedIn = false;
        state.currentUser = null;
      }
    },
    changePassword:(state,action)=>{
      const { newPass, email } = action.payload;

      state.users = state.users.map((user) => {
        if (user.email === email) {
          return { ...user, password: newPass ,confirmPassword:newPass};
        }
        return user;
      });

      // Clear the verified email after password change
      state.verifiedUserEmail = "";
    }
  },
});

export const { adduser, logginUser, logoutUser, forgotPassword,changePassword } =
  UserSlice.actions;
export default UserSlice.reducer;
