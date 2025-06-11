import s from './TodoList.module.css';
import TodoListItem from '../TodoListItem/TodoListItem';
import { todo } from '../../assets/todo';

const TodoList = () => {
  const todoList = todo;
  return (
    <ul className={s.container}>
      {todoList.map(({ id, date, descr, priority, theme, isDone }) => (
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
