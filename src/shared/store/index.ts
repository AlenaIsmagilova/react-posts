import { createSlice } from "@reduxjs/toolkit";

export const postsSlice = createSlice({
  name: "postsSlice",
  initialState: {
    value: 5,
  },
  reducers: {
    setCurrentOffset: (state) => {
      state.value += 5;
    },
  },
});

export const { setCurrentOffset } = postsSlice.actions;

export default postsSlice.reducer;
