import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isLoading: false,
  isError: false
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginPendingState: state => {
      state.isLoading = true;
    },
    loginFulfilledState: (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.user = action.payload;
    },
    loginRejectedState: (state, action) => {
      state.isLoading = false;
      state.isError = action.payload;
    },
    updateUserPendingState: state => {
      state.isLoading = true;
    },
    updateUserFulfilledState: (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.user = action.payload;
    },
    updateUserRejectedState: (state, action) => {
      state.isLoading = false;
      state.isError = action.payload;
    },
    reset: state => {
      state.isError = false;
    },
    terminateSession: state => {
      state.user = null;
    }
  }
});

export const {
  loginFulfilledState,
  loginPendingState,
  loginRejectedState,
  updateUserFulfilledState,
  updateUserPendingState,
  updateUserRejectedState,
  terminateSession,
  reset
} = authSlice.actions;
export default authSlice.reducer;
