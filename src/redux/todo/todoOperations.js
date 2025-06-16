import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addTodoApi,
  getTodoApi,
  removeTodoApi,
  updateTodoStatusApi,
} from '../../services/todoApi';

export const addData = createAsyncThunk(
  'todo/add',
  async (formData, { rejectWithValue }) => {
    try {
      const todo = await addTodoApi(formData);
      return todo;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getTodo = createAsyncThunk(
  'todo/get',
  async (_, { rejectWithValue }) => {
    try {
      const todoList = await getTodoApi();
      return todoList;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const removeTodo = createAsyncThunk(
  'todo/remove',
  async (id, { rejectWithValue }) => {
    try {
      const removedTodo = await removeTodoApi(id);
      return removedTodo;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateTodoStatus = createAsyncThunk(
  'todo/updateStatus',
  async ({ id, isDone }, { rejectWithValue }) => {
    try {
      const updatedTodo = await updateTodoStatusApi(id, isDone);
      return updatedTodo;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
