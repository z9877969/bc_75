import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <>
      <Link to="/">BackToHome</Link>
      <h1>Not found</h1>
    </>
  );
};

export default NotFoundPage;
