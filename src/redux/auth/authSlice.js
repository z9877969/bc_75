import { createSlice } from '@reduxjs/toolkit';
import { registerUser } from './authOperations';

export const selectIsAuth = (state) => state.auth.isAuth;

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuth: false,
    isLoading: false,
    user: {
      email: '',
    },
    error: null,
  },
  extraReducers: (builder) =>
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.user.email = payload.user.email;
      })
      .addCase(registerUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      }),
});

export default authSlice.reducer;
