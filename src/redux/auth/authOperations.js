import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getCurUserApi,
  loginUserApi,
  registerUserApi,
} from '../../services/todoApi';

export const registerUser = createAsyncThunk(
  'auth/register',
  async (formData, { rejectWithValue }) => {
    try {
      const data = await registerUserApi(formData);
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
  }
);
