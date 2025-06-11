import Container from '../components/Container/Container';
import Counter from '../components/Counter/Counter';

const HomePage = () => {
  return (
    <Container>
      <h1 style={{ textAlign: 'center' }}>Counter</h1>
      <Counter />
    </Container>
  );
};

export default HomePage;
