import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {}
};

export const authenticationSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setCurrent: (state, action) => {
      state.current = action.payload;
    },
    setAvatar: (state, action) => {
    },
    setName: (state, action) => {
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUser, setCurrent, setAvatar, setName } = authenticationSlice.actions;
const authenticationReducer = authenticationSlice.reducer;

export default authenticationReducer;
