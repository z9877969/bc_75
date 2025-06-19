import { createSlice } from '@reduxjs/toolkit';
import { loginUser, registerUser } from './authOperations';

export const selectIsAuth = (state) => state.auth.isAuth;

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuth: false,
    isLoading: false,
    token: null,
    user: {
      email: '',
      avatarUrl: '',
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
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.token = payload.token;
        state.user.email = payload.user.email;
        state.user.avatarUrl = payload.user.avatarURL;
        state.isAuth = true;
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      }),
});

export default authSlice.reducer;
