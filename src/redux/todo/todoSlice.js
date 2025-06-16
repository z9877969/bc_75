import { createSlice } from '@reduxjs/toolkit';
import {
  addData,
  getTodo,
  removeTodo,
  updateTodoStatus,
} from './todoOperations';

const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    items: [],
    filter: 'all',
    isLoading: false,
    error: null,
  },
  reducers: {
    addTodoPending(state) {
      state.isLoading = true;
    },
    addTodoFulfilled(state, { payload }) {
      state.isLoading = false;
      state.error = null;
      state.items.push(payload);
    },
    addTodoRejected(state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },

    getTodoPending(state) {
      state.isLoading = true;
    },
    getTodoFulfilled(state, { payload }) {
      state.isLoading = false;
      state.error = null;
      state.items = payload;
    },
    getTodoRejected(state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },

    addTodoAction(state, { payload }) {
      state.items.push(payload);
    },
    removeTodoAction(state, { payload }) {
      state.items = state.items.filter((el) => el.id !== payload);
    },
    updateTodoStatusAction(state, { payload }) {
      const updatedItemIdx = state.items.findIndex((el) => el.id === payload);
      const updatingTodo = state.items[updatedItemIdx];
      state.items[updatedItemIdx] = {
        ...updatingTodo,
        isDone: !updatingTodo.isDone,
      };
    },
    changeFilterAction(state, { payload }) {
      state.filter = payload;
    },
  },
  extraReducers: (builder) => {
    console.log('builder :>> ', builder);
    builder
      // .addCase(addData.pending, (state) => {
      //   state.isLoading = true;
      // })
      .addCase(addData.fulfilled, (state, { payload }) => {
        // state.isLoading = false;
        state.error = null;
        state.items.push(payload);
      })
      .addCase(addData.rejected, (state, { payload }) => {
        // state.isLoading = false;
        state.error = payload;
      })
      // .addCase(getTodo.pending, (state) => {
      //   state.isLoading = true;
      // })
      .addCase(getTodo.fulfilled, (state, { payload }) => {
        // state.isLoading = false;
        state.error = null;
        state.items = payload;
      })
      .addCase(getTodo.rejected, (state, { payload }) => {
        // state.isLoading = false;
        state.error = payload;
      })
      .addCase(removeTodo.fulfilled, (state, { payload }) => {
        state.items = state.items.filter((el) => el.id !== payload.id);
        state.error = null;
      })
      .addCase(removeTodo.rejected, (state, { payload }) => {
        state.error = payload;
      })
      .addCase(updateTodoStatus.fulfilled, (state, { payload }) => {
        const updatedItemIdx = state.items.findIndex(
          (el) => el.id === payload.id
        );
        const updatingTodo = state.items[updatedItemIdx];
        state.items[updatedItemIdx] = {
          ...updatingTodo,
          isDone: payload.isDone,
        };
        state.error = null;
      })
      .addCase(updateTodoStatus.rejected, (state, { payload }) => {
        state.error = payload;
      })
      .addMatcher(
        (action) => {
          if (action.type.startsWith('todo') && action.type.endsWith('pending'))
            return true;
        },
        (state) => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        (action) => {
          if (
            action.type.startsWith('todo') &&
            (action.type.endsWith('fulfilled') ||
              action.type.endsWith('rejected'))
          ) {
            return true;
          }
        },
        (state) => {
          state.isLoading = false;
        }
      );
  },
});

export const {
  addTodoPending,
  addTodoFulfilled,
  addTodoRejected,
  getTodoPending,
  getTodoFulfilled,
  getTodoRejected,
  addTodoAction,
  removeTodoAction,
  updateTodoStatusAction,
  changeFilterAction,
} = todoSlice.actions;
export default todoSlice.reducer;
