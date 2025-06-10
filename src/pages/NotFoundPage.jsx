import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/');
    }, 3000);
  });

  return (
    <>
      <h1>Not found</h1>
    </>
  );
};

export default NotFoundPage;
