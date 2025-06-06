import { useContext } from 'react';
import clsx from 'clsx';
import s from './TodoList.module.css';
import { TodoContext } from '../../context/TodoContext';

const TodoListItem = ({
  id,
  theme,
  isDone,
  date,
  priority,
  descr,
  onRemoveItem,
}) => {
  const { removeTodo } = useContext(TodoContext);

  return (
    <li key={id} className={clsx(s.toDoItem, s[theme])}>
      <p className={clsx(s.date, isDone && s.isDone)}>{date}</p>
      <p className={clsx(s.priority, isDone && s.isDone)}>
        PRIORITY: {priority}
      </p>
      <p className={clsx(s.descr, isDone && s.isDone)}>{descr}</p>
      <label className={s.status}>
        <input type="checkbox" name="status" /* checked={isDone} */ />
        Done
      </label>
      <button className={s.todoBtn} onClick={() => removeTodo(id)}>
        Remove
      </button>
    </li>
  );
};

const TodoList = () => {
  const { todoList } = useContext(TodoContext);
  return (
    <ul className={s.container}>
      {todoList.map(({ id, date, descr, priority, theme, isDone }) => (
        <TodoListItem
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
