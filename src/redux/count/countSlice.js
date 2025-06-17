import { createSlice } from '@reduxjs/toolkit';

export const selectCountValue = (state) => state.count.count;

const countSlice = createSlice({
  name: 'count',
  initialState: {
    count: 0,
  },
  reducers: {
    decrementAction(state, action) {
      state.count -= action.payload;
    },
    incrementAction(state, { payload }) {
      state.count += payload;
    },
    resetAction() {
      return 0;
    },
  },
});

export const { decrementAction, incrementAction, resetAction } =
  countSlice.actions;
export const countReducer = countSlice.reducer;
