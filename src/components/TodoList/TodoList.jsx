import s from './TodoList.module.css';
import TodoListItem from '../TodoListItem/TodoListItem';
import { useDispatch, useSelector } from 'react-redux';
import {
  incrementAction,
  selectCountValue,
} from '../../redux/count/countSlice';
import {
  selectFilteredTodo,
} from '../../redux/todo/todoSlice';

const TodoList = () => {
  const dispatch = useDispatch();
  const count = useSelector(selectCountValue);
  const filteredTodo = useSelector(selectFilteredTodo);
  // const {data: filteredTodo} = useSelector(selectSomeData)

  return (
    <>
      <h1>Count {count}</h1>
      <button onClick={() => dispatch(incrementAction(15))}>+15</button>
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
    </>
  );
};

export default TodoList;
