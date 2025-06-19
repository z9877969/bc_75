import { configureStore } from '@reduxjs/toolkit';
import { countReducer } from './count/countSlice';
import todoReducer from './todo/todoSlice';
import authReducer from './auth/authSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    todo: todoReducer,
    count: countReducer,
  },
});
