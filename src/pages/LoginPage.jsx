import { useDispatch } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import Button from '../components/Button/Button';
import Container from '../components/Container/Container';
import { loginUser } from '../redux/auth/authOperations';

const LoginPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = async (values) => {
    try {
      dispatch(loginUser(values)).unwrap();
    } catch (error) {
      alert(error);
    }
  };

  return (
    <Container>
      <h1>LoginPage</h1>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={handleSubmit}
      >
        <Form>
          <label>
            <p>Email</p>
            <Field name="email" />
          </label>
          <label>
            <p>Password</p>
            <Field name="password" />
          </label>
          <Button type="submit" size="medium">
            Login
          </Button>
        </Form>
      </Formik>
    </Container>
  );
};

export default LoginPage;
