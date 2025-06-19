import { createAsyncThunk } from '@reduxjs/toolkit';
import { loginUserApi, registerUserApi } from '../../services/todoApi';

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
