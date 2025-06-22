import { createSlice } from '@reduxjs/toolkit';
import {
  getCurUser,
  loginUser,
  logoutUser,
  refreshToken,
  registerUser,
} from './authOperations';

// export const selectIsAuth = (state) => state.auth.isAuth;
export const selectIsAuth = (state) => Boolean(state.auth.token);
export const selectRefreshToken = (state) => state.auth.refreshToken;

const initialState = {
  isAuth: false,
  isLoading: false,
  token: null,
  refreshToken: null,
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
    logoutAction() {
      return { ...initialState };
    },
    setTokens(state, { payload }) {
      state.token = payload.token;
      state.refreshToken = payload.refreshToken;
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
        state.refreshToken = payload.refreshToken;
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
        state.refreshToken = payload.refreshToken;
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
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(logoutUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logoutUser.fulfilled, () => {
        return { ...initialState };
      })
      .addCase(logoutUser.rejected, () => {
        return { ...initialState };
      })
      .addCase(refreshToken.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(refreshToken.fulfilled, (state, { payload }) => {
        const { token, refreshToken } = payload;
        state.isLoading = true;
        state.error = null;
        state.token = token;
        state.refreshToken = refreshToken;
      })
      .addCase(refreshToken.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      }),
});

export const { resetErrorAction, logoutAction } = authSlice.actions;
export default authSlice.reducer;
