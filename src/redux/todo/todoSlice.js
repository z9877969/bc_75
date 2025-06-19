import { createSlice, createSelector } from '@reduxjs/toolkit';
import {
  addData,
  getTodo,
  removeTodo,
  updateTodoData,
  updateTodoStatus,
} from './todoOperations';

export const selectIsLoading = (state) => state.todo.isLoading;
export const selectError = (state) => state.todo.error;
export const selectTodoItems = (state) => state.todo.items;
export const selectTodoFilter = (state) => state.todo.filter;
export const selectIsTodo = (state) => state.todo.items.length > 0; // true | false
export const selectEditedData = (state) => state.todo.editedData;

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

const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    items: [],
    filter: 'all',
    isLoading: false,
    error: null,
    editedData: null,
  },
  reducers: {
    changeFilterAction(state, { payload }) {
      state.filter = payload;
    },
    addEditedDataAction(state, { payload }) {
      state.editedData = payload;
    },
    resetEditedDataAction(state) {
      state.editedData = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addData.fulfilled, (state, { payload }) => {
        state.error = null;
        state.items.push(payload);
      })
      .addCase(addData.rejected, (state, { payload }) => {
        state.error = payload;
      })
      .addCase(getTodo.fulfilled, (state, { payload }) => {
        state.error = null;
        state.items = payload;
      })
      .addCase(getTodo.rejected, (state, { payload }) => {
        state.error = payload;
      })
      .addCase(removeTodo.fulfilled, (state, { payload }) => {
        state.items = state.items.filter((el) => el._id !== payload);
        state.error = null;
      })
      .addCase(removeTodo.rejected, (state, { payload }) => {
        state.error = payload;
      })
      .addCase(updateTodoStatus.fulfilled, (state, { payload }) => {
        const updatedItemIdx = state.items.findIndex(
          (el) => el._id === payload._id
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
      .addCase(updateTodoData.fulfilled, (state, { payload }) => {
        const updatedItemIdx = state.items.findIndex(
          (el) => el.id === payload.id
        );
        state.items[updatedItemIdx] = payload;
        state.error = null;
      })
      .addCase(updateTodoData.rejected, (state, { payload }) => {
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
  addEditedDataAction,
  changeFilterAction,
  resetEditedDataAction,
} = todoSlice.actions;
export default todoSlice.reducer;
