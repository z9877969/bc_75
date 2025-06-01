import clsx from 'clsx';
import s from './TodoList.module.css';

const TodoList = () => {
  return (
    <ul className={s.container}>
      <li className={clsx(s.toDoItem, s.green)}>
        <p className={clsx(s.date, s.isDone)}>date</p>
        <h3 className={clsx(s.title, s.isDone)}>title</h3>
        <p className={clsx(s.priority, s.isDone)}>PRIORITY - priority</p>
        <p className={clsx(s.descr, s.isDone)}>descr</p>
        <label className={s.status}>
          <input type="checkbox" name="status" />
          Done
        </label>
        <button className={s.todoBtn}>Remove</button>
      </li>
      <li className={clsx(s.toDoItem, s.red)}>
        <p className={s.date}>date</p>
        <h3 className={clsx(s.title, s.isDone)}>title</h3>
        <p className={clsx(s.priority, s.isDone)}>PRIORITY - priority</p>
        <p className={clsx(s.descr, s.isDone)}>descr</p>
        <label className={s.status}>
          <input type="checkbox" name="status" />
          Done
        </label>
        <button className={s.todoBtn}>Remove</button>
      </li>
      <li className={clsx(s.toDoItem, s.orange)}>
        <p className={s.date}>date</p>
        <h3 className={clsx(s.title, s.isDone)}>title</h3>
        <p className={clsx(s.priority, s.isDone)}>PRIORITY - priority</p>
        <p className={clsx(s.descr, s.isDone)}>descr</p>
        <label className={s.status}>
          <input type="checkbox" name="status" />
          Done
        </label>
        <button className={s.todoBtn}>Remove</button>
      </li>
      <li className={s.toDoItem}>
        <p className={s.date}>date</p>
        <h3 className={clsx(s.title, s.isDone)}>title</h3>
        <p className={clsx(s.priority, s.isDone)}>PRIORITY - priority</p>
        <p className={clsx(s.descr, s.isDone)}>descr</p>
        <label className={s.status}>
          <input type="checkbox" name="status" />
          Done
        </label>
        <button className={s.todoBtn}>Remove</button>
      </li>
    </ul>
  );
};

export default TodoList;
