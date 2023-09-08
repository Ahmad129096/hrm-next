import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

interface SigninState {
  auth: boolean;
  token: object;
}

const initialState: SigninState = {
  auth: false,
  token: {},
};

export const signInSlice = createSlice({
  name: "signin",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<SigninState>) => {
      if (action.payload) {
        state.auth = true;
        state.token = action.payload;
      }
    },
    logout: (state) => {
      state.auth = false;
      state.token = {};
    },
    setAuth: (state, action) => {
      state.auth = action?.payload;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.auth,
      };
    },
  },
});

export const { login, logout, setAuth } = signInSlice.actions;

export default signInSlice.reducer;
