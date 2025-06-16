import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addTodoApi,
  getTodoApi,
  removeTodoApi,
  updateTodoStatusApi,
} from '../../services/todoApi';
import {
  /* addTodoFulfilled,
  addTodoPending,
  addTodoRejected, */
  getTodoFulfilled,
  getTodoPending,
  getTodoRejected,
} from './todoSlice';

// export const addData = (formData) => {
//   return async (dispatch) => {
//     dispatch(addTodoPending()); // {type: "todo/add/pending"}
//     try {
//       const data = await addTodoApi(formData);
//       dispatch(addTodoFulfilled(data));
//     } catch (error) {
//       dispatch(addTodoRejected(error.message));
//     }
//   };
// };

export const addData = createAsyncThunk(
  'todo/add',
  async (formData, { rejectWithValue }) => {
    try {
      // dispatch({type: 'todo/add/pending' })
      const todo = await addTodoApi(formData);
      return todo; // dispatch({type: 'todo/add/fulfilled, payload: todo  })
    } catch (error) {
      // return error.message  // dispatch({type: 'todo/add/fulfilled, payload: error.message  })
      return rejectWithValue(error.message); // dispatch({type: 'todo/add/rejected', payload: error.message  })
    }
  }
);

// export const getTodo = () => {
//   return async (dispatch) => {
//     try {
//       dispatch(getTodoPending());
//       const todoList = await getTodoApi();
//       dispatch(getTodoFulfilled(todoList));
//     } catch (error) {
//       dispatch(getTodoRejected(error.message));
//     }
//   };
// };

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

// removeTodo(21)
