import { createSlice } from "@reduxjs/toolkit";

export const ProfileSlice = createSlice({
  name: "profile",
  initialState: {
    checked: false,
  },
  reducers: {
    changeStatus: (state, action) => {
      state.checked = !state.checked;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeStatus } =
  ProfileSlice.actions;

export default ProfileSlice.reducer;
