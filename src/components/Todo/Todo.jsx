import { useMemo, useState } from 'react';
import TodoForm from '../TodoForm/TodoForm';
import TodoList from '../TodoList/TodoList';
import Select from '../Select/Select';
import { todo } from '../../assets/todo';
import { useLocalStorage } from '../../hooks/useLocalStorage';

const Todo = () => {
  return (
    <>
      <TodoForm />
      {/* <Select onChange={setPriority} value={priority} /> */}
      <TodoList />
    </>
  );
};

export default Todo;
