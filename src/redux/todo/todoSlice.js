import { createSlice } from '@reduxjs/toolkit';
import { todo } from '../../assets/todo';

const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    items: todo, // [{}, {}]
    filter: 'all',
    editedTodo: null, // {}
  },
  reducers: {
    addTodoAction(state, { payload }) {
      // return {
      //   ...state,
      //   items: [...state.items, payload],
      // };
      state.items.push(payload);
    },
    removeTodoAction(state, { payload }) {
      //   return {
      //     ...state,
      //     items: state.items.filter((el) => el.id !== payload),
      //   };
      state.items = state.items.filter((el) => el.id !== payload);

      //   const removedItemIdx = state.items.findIndex((el) => el.id === payload);
      //   state.items.splice(removedItemIdx, 1);
    },
    updateTodoStatusAction(state, { payload }) {
      //   return {
      //     ...state,
      //     items: state.items.map((el) =>
      //       el.id !== payload ? el : { ...el, isDone: !el.isDone }
      //     ),
      //   };
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
  addTodoAction,
  removeTodoAction,
  updateTodoStatusAction,
  changeFilterAction,
} = todoSlice.actions;
export default todoSlice.reducer;
