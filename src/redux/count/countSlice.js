import { createSlice } from '@reduxjs/toolkit';

const initialState = 0;

const countSlice = createSlice({
  name: 'count',
  initialState,
  reducers: {
    decrementAction(state, action) {
      return state - action.payload;
    },
    incrementAction(state, { payload }) {
      return state + payload;
    },
    resetAction() {
      return initialState;
    },
  },
});

export const { decrementAction, incrementAction, resetAction } =
  countSlice.actions;
export const countReducer = countSlice.reducer;
