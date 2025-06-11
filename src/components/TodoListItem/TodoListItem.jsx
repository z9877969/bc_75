import clsx from 'clsx';
import s from './TodoListItem.module.css';

const TodoListItem = ({ id, theme, isDone, date, priority, descr }) => {
  return (
    <li key={id} className={clsx(s.toDoItem, s[theme])}>
      <p className={clsx(s.date, isDone && s.isDone)}>{date}</p>
      <p className={clsx(s.priority, isDone && s.isDone)}>
        PRIORITY: {priority}
      </p>
      <p className={clsx(s.descr, isDone && s.isDone)}>{descr}</p>
      <label className={s.status}>
        <input
          type="checkbox"
          name="status"
          checked={isDone}
          onChange={() => {}}
        />
        Done
      </label>
      <button className={s.todoBtn}>Remove</button>
    </li>
  );
};

export default TodoListItem;
