import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import Button from '../components/Button/Button';
import Container from '../components/Container/Container';
import { registerUser } from '../redux/auth/authOperations';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    try {
      await dispatch(registerUser(values)).unwrap();
      navigate('/login');
    } catch (error) {
      alert(error);
    }
  };

  return (
    <Container>
      <h1>RegisterPage</h1>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={handleSubmit}
      >
        <Form>
          <label>
            Email
            <Field name="email" />
          </label>
          <label>
            Password
            <Field name="password" />
          </label>
          <Button type="submit" size="medium">
            Register
          </Button>
        </Form>
      </Formik>
    </Container>
  );
};

export default RegisterPage;
