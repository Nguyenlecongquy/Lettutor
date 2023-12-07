import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [
    {
      email: "admin@gmail.com",
      password: "123456",
      name: "Admin",
      country: "Vietnamese",
      phone: "0123456789",
      avatar: "",
    },
  ],
  current: "admin@gmail.com",
};

export const authenticationSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    setUser: (state, action) => {
      let newUser = {
        email: action.payload.email,
        password: action.payload.password,
        name: "your name",
        country: "your country",
        phone: "your phone",
      };
      state.users.push(newUser);
    },
    setCurrent: (state, action) => {
      state.current = action.payload;
    },
    setAvatar: (state, action) => {
      for (let i = 0; i < state.users.length; i++) {
        if (action.payload.email == state.users[i].email) {
          state.users[i].avatar = action.payload.avatar;
        }
      }
    },
    setName: (state, action) => {
      for (let i = 0; i < state.users.length; i++) {
        if (action.payload.email == state.users[i].email) {
          state.users[i].name = action.payload.name;
        }
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUser, setCurrent, setAvatar, setName } = authenticationSlice.actions;
const authenticationReducer = authenticationSlice.reducer;

export default authenticationReducer;
