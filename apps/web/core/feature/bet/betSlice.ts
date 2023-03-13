import { createSlice } from "@reduxjs/toolkit";

export const betSlice = createSlice({
  name: "bet",
  initialState: {
    value: 0,
  },
  reducers: {
    update: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { update } = betSlice.actions;
export default betSlice.reducer;
