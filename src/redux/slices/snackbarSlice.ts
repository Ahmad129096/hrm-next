import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

interface SnackBarState {
  show?: boolean;
  type?: "success" | "error" | "info" | "warning";
  message: string;
}

const initialState: SnackBarState = {
  show: false,
  type: "success",
  message: "",
};

export const SnackBarSlice = createSlice({
  name: "snackbar",
  initialState: initialState,
  reducers: {
    showSnackbar: (_state, action: PayloadAction<SnackBarState>) => ({
      ...initialState,
      ...action.payload,
      show: true,
    }),
    clearSnackbar: (state) => ({
      ...state,
      show: false,
    }),
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

export const { showSnackbar, clearSnackbar } = SnackBarSlice.actions;

export default SnackBarSlice.reducer;
