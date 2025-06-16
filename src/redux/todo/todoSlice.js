import { createSlice } from '@reduxjs/toolkit';
// import { todo } from '../../assets/todo';

const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    items: [],
    filter: 'all',
    isLoading: false, // true
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
