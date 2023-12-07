import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  screen: "Tutor",
};

export const screenSlice = createSlice({
  name: "screen",
  initialState,
  reducers: {
    setScreen: (state, action) => {
      state.screen = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setScreen } = screenSlice.actions;
const screenReducer = screenSlice.reducer;

export default screenReducer;
