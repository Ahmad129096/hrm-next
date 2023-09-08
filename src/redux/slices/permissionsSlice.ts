import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

interface permissionObj {
  name: string;
  create: boolean;
  read: boolean;
  update: boolean;
  delete: boolean;
}
interface permissions {
  permissions: Array<permissionObj>;
}
const initialState: permissions = {
  permissions: [],
};

export const permissionsSlice = createSlice({
  name: "permissions",
  initialState,
  reducers: {
    getPermissions: (state, action) => {
      state.permissions = action.payload;
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

export const { getPermissions } = permissionsSlice.actions;
export default permissionsSlice.reducer;
