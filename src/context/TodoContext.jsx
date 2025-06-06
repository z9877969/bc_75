import { createContext, useMemo, useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

// eslint-disable-next-line
export const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  const [todoList, setTodoList] = useState([]);
  const [priority, setPriority] = useLocalStorage('priority', 'all');

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
    <TodoContext.Provider
      value={{
        addTodo,
        removeTodo,
        todoList: filteredTodoList,
        setPriority,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
