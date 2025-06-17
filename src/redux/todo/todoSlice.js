import { createSlice, createSelector } from '@reduxjs/toolkit';
import {
  addData,
  getTodo,
  removeTodo,
  updateTodoStatus,
} from './todoOperations';

export const selectIsLoading = (state) => state.todo.isLoading;
export const selectError = (state) => state.todo.error;
export const selectTodoItems = (state) => state.todo.items;
export const selectTodoFilter = (state) => state.todo.filter;
export const selectIsTodo = (state) => state.todo.items.length > 0; // true | false

// export const selectFilteredTodo = (state) => {
//   const filter = selectTodoFilter(state);
//   const todoList = selectTodoItems(state);

//   console.log('STARt selectFilteredTodo');
//   return filter === 'all'
//     ? todoList
//     : todoList.filter((todo) => todo.priority === filter);
// };
export const selectFilteredTodo = createSelector(
  [selectTodoFilter, selectTodoItems],
  (filter, todoList) => {
    console.log('selectFilteredTodo createSelect');

    return filter === 'all'
      ? todoList
      : todoList.filter((todo) => todo.priority === filter);
  }
);

export const selectSomeData = createSelector(
  [selectIsLoading, selectError, selectFilteredTodo],
  (isLoading, error, filteredData) => {
    return { isLoading, error, data: filteredData };
  }
);

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
