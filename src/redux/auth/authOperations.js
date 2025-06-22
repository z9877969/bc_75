import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getCurUserApi,
  loginUserApi,
  logoutUserApi,
  refreshTokenApi,
  registerUserApi,
} from '../../services/todoApi';
import { logoutAction } from './authSlice';

export const registerUser = createAsyncThunk(
  'auth/register',
  async (formData, { rejectWithValue }) => {
    try {
      await registerUserApi(formData);
      const data = await loginUserApi(formData);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  'auth/login',
  async (formData, { rejectWithValue }) => {
    try {
      const data = await loginUserApi(formData);

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getCurUser = createAsyncThunk(
  'user/current',
  async (_, { rejectWithValue, getState }) => {
    try {
      const { auth } = getState();
      const userData = await getCurUserApi(auth.token);
      return userData;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
  {
    condition(_, { getState }) {
      const { auth } = getState();
      return Boolean(auth.token);
    },
  }
);

export const logoutUser = createAsyncThunk(
  'user/logout',
  async (_, { rejectWithValue }) => {
    try {
      await logoutUserApi();
      return;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const refreshToken = createAsyncThunk(
  'auth/refreshToken',
  async (_, { rejectWithValue, getState, dispatch }) => {
    try {
      const { auth } = getState();
      const { token, refreshToken } = await refreshTokenApi(auth.refreshToken);
      return { token, refreshToken };
    } catch (error) {
      const timeoutId = setTimeout(() => {
        dispatch(logoutAction());
        clearTimeout(timeoutId);
      });
      return rejectWithValue(error.message);
    }
  },
  {
    condition(_, { getState }) {
      const { auth } = getState();
      return Boolean(auth.refreshToken);
    },
  }
);
