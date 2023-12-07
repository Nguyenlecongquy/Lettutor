import { configureStore } from '@reduxjs/toolkit'
import authenticationReducer from './reducers/authentication'
import filterReducer from './reducers/filter'
import screenReducer from './reducers/screen'

export const store = configureStore({
  reducer: {
    authentication: authenticationReducer,
    filter: filterReducer,
    screen: screenReducer,
  },
})