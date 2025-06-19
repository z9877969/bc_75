import { createAsyncThunk } from '@reduxjs/toolkit';
import { registerUserApi } from '../../services/todoApi';

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
