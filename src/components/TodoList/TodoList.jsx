import clsx from 'clsx';
import s from './TodoList.module.css';

const TodoList = ({ todoList = [], onRemoveItem }) => {
  return (
    <ul className={s.container}>
      {todoList.map(({ id, date, descr, priority, theme, isDone }) => (
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
          <button className={s.todoBtn} onClick={() => onRemoveItem(id)}>Remove</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
