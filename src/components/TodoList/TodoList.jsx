import s from './TodoList.module.css';
import TodoListItem from '../TodoListItem/TodoListItem';
import { useSelector } from 'react-redux';

const TodoList = () => {
  const todoList = useSelector((state) => state.todo.items);
  const filter = useSelector((state) => state.todo.filter);

  const filteredTodo =
    filter === 'all'
      ? todoList
      : todoList.filter((todo) => todo.priority === filter);

  return (
    <ul className={s.container}>
      {filteredTodo.map(({ id, date, descr, priority, theme, isDone }) => (
        <TodoListItem
          key={id}
          id={id}
          date={date}
          descr={descr}
          priority={priority}
          theme={theme}
          isDone={isDone}
        />
      ))}
    </ul>
  );
};

export default TodoList;
