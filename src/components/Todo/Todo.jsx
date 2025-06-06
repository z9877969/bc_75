import { useMemo, useState } from 'react';
import TodoForm from '../TodoForm/TodoForm';
import TodoList from '../TodoList/TodoList';
import Select from '../Select/Select';
import { todo } from '../../assets/todo';

const Todo = () => {
  const [todoList, setTodoList] = useState(todo);
  const [priority, setPriority] = useState('all');

  const addTodo = (formData) => {
    setTodoList([...todoList, formData]);
  };

  const removeTodo = (id) => {
    setTodoList(todoList.filter((el) => el.id !== id));
  };

  const filteredTodoList = useMemo(() => {
    return priority === 'all'
      ? todoList
      : todoList.filter((todo) => todo.priority === priority);
  }, [todoList, priority]);

  return (
    <>
      <TodoForm onSubmit={addTodo} />
      <Select onChange={setPriority} value={priority} />
      <TodoList todoList={filteredTodoList} onRemoveItem={removeTodo} />
    </>
  );
};

export default Todo;
