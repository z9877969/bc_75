import { Field, Form, Formik } from 'formik';
import { useState } from 'react';

// const F = ({ as, children, ...inputProps }) => {
//   switch (as) {
//     case 'select':
//       return <select {...inputProps}>{children}</select>;
//     case 'textarea':
//       return <textarea {...inputProps}></textarea>;
//     default:
//       return <input {...inputProps} />;
//   }
// };

const Select = ({ theme, setTheme }) => {
  // const [theme, setTheme] = useState('default');

  // const handleSelectChange = (e) => {
  //   const { value } = e.target;
  //   setTheme(value);
  // };

  return (
    <Formik
      initialValues={{ theme: 'all' }}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <Form>
        <label>
          <span> Theme </span>
        </label>
        <Field as="select" name="theme">
          <option value="all">All</option>
          <option value="green">Green</option>
          <option value="orange">Orange</option>
          <option value="red">Red</option>
        </Field>
      </Form>
    </Formik>
  );
};

export default Select;
