import Container from '../components/Container/Container';
import TodoForm from '../components/TodoForm/TodoForm';
import TodoFilter from '../components/TodoFilter/TodoFilter';
import TodoList from '../components/TodoList/TodoList';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getTodo } from '../redux/todo/todoOperations';
import {
  selectError,
  selectIsLoading,
  selectIsTodo,
  selectTodoItems,
} from '../redux/todo/todoSlice';

const TodoLoader = () => {
  const isLoading = useSelector(selectIsLoading);
  return isLoading && <h1>Loading...</h1>;
};

const TodoPage = () => {
  const dispatch = useDispatch();

  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(getTodo());
  }, [dispatch]);

  console.log('Render TodoPage');

  return (
    <Container>
      <TodoLoader />
      {error && <p>{error}</p>}
      <TodoForm />
      <TodoFilter />
      <TodoList />
    </Container>
  );
};

export default TodoPage;
