import Container from '../components/Container/Container';
import TodoForm from '../components/TodoForm/TodoForm';
import TodoFilter from '../components/TodoFilter/TodoFilter';
import TodoList from '../components/TodoList/TodoList';

const TodoPage = () => {
  return (
    <Container>
      <TodoForm />
      <TodoFilter />
      <TodoList />
    </Container>
  );
};

export default TodoPage;
