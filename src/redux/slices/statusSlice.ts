import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

interface appState {
  createOrganization: boolean;
  selectDepartments: boolean;
}

const initialState: appState = {
  createOrganization: false,
  selectDepartments: false,
};

export const statusSlice = createSlice({
  name: "userStatus",
  initialState,
  reducers: {
    status: (state, action: PayloadAction<appState>) => {
      state.createOrganization = action.payload.createOrganization;
      state.selectDepartments = action.payload.selectDepartments;
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

export const { status } = statusSlice.actions;

export default statusSlice.reducer;
