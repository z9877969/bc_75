import { createSlice } from '@reduxjs/toolkit';

const initialState = 0;

const countSlice = createSlice({
  name: 'count',
  initialState,
  reducers: {
    /* decrementAction = createAction('decrement') */
    action1() {},
    action2() {},
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

// console.log('countSlice :>> ', countSlice);
// console.log(countSlice.actions.decrementAction(54)); // -> {type: "count/decrementAction", payload: 54}

export const { decrementAction, incrementAction, resetAction } =
  countSlice.actions;
export const countReducer = countSlice.reducer;
