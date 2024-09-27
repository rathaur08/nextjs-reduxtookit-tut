const { configureStore } = require("@reduxjs/toolkit");
import usersReducers from './slice';
import totoReducer from './todoSlice';

export const store = configureStore({
  reducer: {
    usersData: usersReducers,
    todosData: totoReducer
  }
})