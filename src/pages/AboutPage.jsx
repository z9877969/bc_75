import Container from '../components/Container/Container';

const Title = () => {
  return <h1>AboutPage</h1>;
};

const List = () => {

  return (
    <ul>
      <li>Item-1</li>
      <li>Item-1</li>
      <li>Item-1</li>
    </ul>
  );
};

const AboutPage = () => {
    
  return (
    <Container>
      <Title />
      <List />
    </Container>
  );
};

export default AboutPage;
