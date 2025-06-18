import { useSelector } from 'react-redux';
import TodoListItem from '../TodoListItem/TodoListItem';
import { selectFilteredTodo } from '../../redux/todo/todoSlice';
import s from './TodoList.module.css';

const TodoList = () => {
  const filteredTodo = useSelector(selectFilteredTodo);

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
