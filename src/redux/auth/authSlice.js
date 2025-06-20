import { createSlice } from '@reduxjs/toolkit';
import {
  getCurUser,
  loginUser,
  logoutUser,
  registerUser,
} from './authOperations';

// export const selectIsAuth = (state) => state.auth.isAuth;
export const selectIsAuth = (state) => Boolean(state.auth.token);

const initialState = {
  isAuth: false,
  isLoading: false,
  token: null,
  user: {
    email: '',
    avatarUrl: '',
  },
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    resetErrorAction(state) {
      state.error = null;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.token = payload.token;
        state.user.email = payload.user.email;
        state.user.avatarUrl = payload.user.avatarURL;
        state.isAuth = true;
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
      })
      .addCase(getCurUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCurUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.user.email = payload.email;
        state.user.avatarUrl = payload.avatarURL;
        state.isAuth = true;
      })
      .addCase(getCurUser.rejected, (state, { payload }) => {
        // state.error = payload;
        return { ...initialState, error: payload };
      })
      .addCase(logoutUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logoutUser.fulfilled, () => {
        return { ...initialState };
      })
      .addCase(logoutUser.rejected, () => {
        return { ...initialState };
      }),
});

export const { resetErrorAction } = authSlice.actions;
export default authSlice.reducer;
