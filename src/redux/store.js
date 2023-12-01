import { configureStore } from '@reduxjs/toolkit'
import authenticationReducer from './reducers'

export const store = configureStore({
  reducer: {
    authentication: authenticationReducer,
  },
})