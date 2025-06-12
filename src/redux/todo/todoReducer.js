import { combineReducers } from '@reduxjs/toolkit';
import { todo } from '../../assets/todo';

const itemsReducer = (state = todo, action) => {
  switch (action.type) {
    case 'todo/add':
      // state.push(action.payload)
      return [...state.items, action.payload];
    case 'todo/remove':
      return state.filter((todo) => todo.id !== action.payload);
    case 'todo/update/status':
      return state.map((todo) =>
        todo.id !== action.payload ? todo : { ...todo, isDone: !todo.isDone }
      );
    default:
      return state;
  }
};

const filterReducer = (state = 'all', action) => {
  switch (action.type) {
    case 'todo/change/filter':
      return action.payload;
    default:
      return state;
  }
};

const todoReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});

export default todoReducer;
