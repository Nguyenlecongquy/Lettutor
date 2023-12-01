import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  users: [
    { 
      email: 'abc',
      password: '123',
    },
  ]
}

export const authenticationSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    setUser: (state, action) => {
      let newUser = {
        email: action.payload.email,
        password: action.payload.password,
      }
      state.users.push(newUser)
    }
  },
})

// Action creators are generated for each case reducer function
export const { setUser } = authenticationSlice.actions

export default authenticationSlice.reducer