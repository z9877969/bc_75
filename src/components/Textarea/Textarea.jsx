import { Field, Form, Formik } from 'formik';

const Textarea = () => {
  return (
    <Formik
      initialValues={{ text: '' }}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <Form>
        <Field as="textarea" name="text" />
      </Form>
    </Formik>
  );
};

export default Textarea;
