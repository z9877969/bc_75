import TodoForm from './components/TodoForm/TodoForm';
import TodoList from './components/TodoList/TodoList';
import SupportForm from './components/SupportForm/SupportForm';
import Select from './components/Select/Select';
import Radio from './components/Radio/Radio';
import Checkbox from './components/Checkbox/Checkbox';
import { todo } from './assets/todo';
import { useState } from 'react';
import Textarea from './components/Textarea/Textarea';

function App() {
  const [todoList, setTodoList] = useState(todo);
  const [theme, setTheme] = useState('all');

  const addTodo = (formData) => {
    setTodoList([...todoList, formData]);
  };

  const removeTodo = (id) => {
    setTodoList(todoList.filter((el) => el.id !== id));
  };

  const filteredTodoList =
    theme === 'all'
      ? todoList
      : todoList.filter((todo) => todo.theme === theme);

  return (
    <>
      <TodoForm onSubmit={addTodo} />
      {/* <Select setTheme={setTheme} />
      <TodoList todoList={filteredTodoList  } onRemoveItem={removeTodo} /> */}
      {/* <SupportForm onSubmit={addTodo} /> */}
      {/* <Select /> */}
      {/* <Radio /> */}
      {/* <Checkbox /> */}
      {/* <Textarea /> */}
    </>
  );
}

export default App;
