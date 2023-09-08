import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

interface organization {
  organizationId: String;
}
const initialState: organization = {
  organizationId: "",
};

export const organizationSlice = createSlice({
  name: "organization",
  initialState,
  reducers: {
    getOrganization: (state, action) => {
      state.organizationId = action.payload;
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

export const { getOrganization } = organizationSlice.actions;
export default organizationSlice.reducer;
