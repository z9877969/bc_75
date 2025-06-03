import { useId } from 'react';
import { Formik, Form, Field } from 'formik';

import Button from '../Button/Button';
import s from './SupportForm.module.css';

// const F = ({...props}) => {
//   return  <input {...props}/>
// }

const SupportForm = () => {
  const emailId = useId();
  const messageId = useId();

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, message } = e.target.elements;
    console.log({
      email: email.value,
      message: message.value,
    });
    e.target.reset();
  };

  return (
    <Formik
      initialValues={{
        email: '',
        message: '',
      }}
      onSubmit={(values, actions) => {
        console.log('SUBMIT', values);
        console.log('actions :>> ', actions);
      }}
    >
      {(...args) => (
        <Form>
          {console.log('args', args)}
          <label htmlFor={emailId} className={s.label}>
            <span> Email </span>
          </label>
          <Field className={s.input} type="email" name="email" id={emailId} />
          <label className={s.label} htmlFor={messageId}>
            <span> Message </span>
          </label>
          <Field
            type="text"
            className={s.input}
            name="message"
            id={messageId}
          />
          <Button type="submit" size="medium">
            Send
          </Button>
        </Form>
      )}
      {/* <form className={s.form} onSubmit={handleSubmit}></form> */}
    </Formik>
  );
};

/* 
 
*/

export default SupportForm;
