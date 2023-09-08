import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

interface DrawerState {
  open: boolean;
}

const initialState: DrawerState = {
  open: false,
};

export const drawerSlice = createSlice({
  name: "toggle",
  initialState,
  reducers: {
    drawertoggle: (state) => {
      state.open = !state.open;
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

export const { drawertoggle } = drawerSlice.actions;

export default drawerSlice.reducer;
