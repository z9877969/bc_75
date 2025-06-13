import { createSlice } from '@reduxjs/toolkit';
import { todo } from '../../assets/todo';

const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    items: todo,
    filter: 'all',
  },
  reducers: {
    addTodoAction(state, { payload }) {
      return {
        ...state,
        items: [...state.items, payload],
      };
    },
    removeTodoAction(state, { payload }) {
      return {
        ...state,
        items: state.items.filter((el) => el.id !== payload),
      };
    },
    updateTodoStatusAction(state, { payload }) {
      return {
        ...state,
        items: state.items.map((el) =>
          el.id !== payload ? el : { ...el, isDone: !el.isDone }
        ),
      };
    },
  },
});

export const { addTodoAction, removeTodoAction, updateTodoStatusAction } =
  todoSlice.actions;
export default todoSlice.reducer;
