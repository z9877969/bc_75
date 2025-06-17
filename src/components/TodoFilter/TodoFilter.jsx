import { useDispatch, useSelector } from 'react-redux';
import { changeFilterAction } from '../../redux/todo/todoSlice';
import s from './TodoFilter.module.css';

const TodoFilter = () => {
  // console.log('Render Filter');
  const dispatch = useDispatch();

  const filter = useSelector((state) => state.todo.filter);

  return (
    <div className={s.wrapper}>
      <select
        name="priority"
        value={filter}
        onChange={(e) => dispatch(changeFilterAction(e.target.value))}
      >
        <option value="all">All</option>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
    </div>
  );
};

export default TodoFilter;
