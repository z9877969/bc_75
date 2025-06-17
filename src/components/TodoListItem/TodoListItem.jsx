import clsx from 'clsx';
import s from './TodoListItem.module.css';
import { useDispatch } from 'react-redux';
import { removeTodo, updateTodoStatus } from '../../redux/todo/todoOperations';
import { addEditedDataAction } from '../../redux/todo/todoSlice';

const TodoListItem = ({ id, theme, isDone, date, priority, descr }) => {
  const dispatch = useDispatch();
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
          onChange={(e) => {
            dispatch(updateTodoStatus({ id, isDone: e.target.checked }));
          }}
        />
        Done
      </label>
      <button className={s.todoBtn} onClick={() => dispatch(removeTodo(id))}>
        Remove
      </button>
      <button
        className={s.todoBtn}
        onClick={() =>
          dispatch(
            addEditedDataAction({ id, theme, isDone, date, priority, descr })
          )
        }
      >
        Edit
      </button>
    </li>
  );
};

export default TodoListItem;
/* id, date, theme, isDone, priority, descr */
