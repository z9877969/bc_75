import { addTodoApi, getTodoApi } from '../../services/todoApi';
import {
  addTodoFulfilled,
  addTodoPending,
  addTodoRejected,
  getTodoFulfilled,
  getTodoPending,
  getTodoRejected,
} from './todoSlice';

export const addData = (formData) => {
  return async (dispatch) => {
    dispatch(addTodoPending()); // {type: "todo/add/pending"}
    try {
      const data = await addTodoApi(formData);
      dispatch(addTodoFulfilled(data));
    } catch (error) {
      dispatch(addTodoRejected(error.message));
    }
  };
};

export const getTodo = () => {
  return async (dispatch) => {
    try {
      dispatch(getTodoPending());
      const todoList = await getTodoApi();
      dispatch(getTodoFulfilled(todoList));
    } catch (error) {
      dispatch(getTodoRejected(error.message));
    }
  };
};
