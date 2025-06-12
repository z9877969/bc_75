import { createAction } from '@reduxjs/toolkit';

// const incrementAction = (value) => {
//   return {
//     type: 'increment',
//     payload: value,
//   };
// };

export const incrementAction = createAction('increment');
export const decrementAction = createAction('decrement'); // -> (value) => {return {type: 'decrement', payload: value}}
export const resetAction = createAction('reset');
