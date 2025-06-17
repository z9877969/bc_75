import Container from '../components/Container/Container';
import TodoForm from '../components/TodoForm/TodoForm';
import TodoFilter from '../components/TodoFilter/TodoFilter';
import TodoList from '../components/TodoList/TodoList';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getTodo } from '../redux/todo/todoOperations';
import { selectError, selectIsLoading } from '../redux/todo/todoSlice';

const TodoPage = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(getTodo());
  }, [dispatch]);

  return (
    <Container>
      {isLoading && <h1>Loading...</h1>}
      {error && <p>{error}</p>}
      <TodoForm />
      <TodoFilter />
      <TodoList />
    </Container>
  );
};

export default TodoPage;
