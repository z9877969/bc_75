import { useId } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { object, string } from 'yup';

import Button from '../Button/Button';
import s from './SupportForm.module.css';

const supportSchema = object({
  email: string()
    .email('Custom email validation')
    .required('Required field custom'),
  message: string()
    .required()
    .min(5, 'Must be 5 or more')
    .max(12, 'Must be 12 or less'),
});

// const F = ({...props}) => {
//   return  <input {...props}/>
// }

const SupportForm = ({ onSubmit }) => {
  const emailId = useId();
  const messageId = useId();

  return (
    <Formik
      initialValues={{
        email: '',
        message: '',
      }}
      validationSchema={supportSchema}
      onSubmit={(values, actions) => {
        // console.log('SUBMIT', values);
        // console.log('actions :>> ', actions);
        onSubmit(values);
      }}
    >
      <Form>
        <label htmlFor={emailId} className={s.label}>
          <span> Email </span>
        </label>
        <Field className={s.input} type="email" name="email" id={emailId} />
        <ErrorMessage
          name="email"
          component={'div'}
          className={s.errorMessage}
        />
        <label className={s.label} htmlFor={messageId}>
          <span> Message </span>
        </label>
        <Field type="text" className={s.input} name="message" id={messageId} />
        <ErrorMessage
          component={'div'}
          className={s.errorMessage}
          name="message"
        />
        <Button type="submit" size="medium">
          Send
        </Button>
      </Form>
    </Formik>
  );
};

/* 
 
*/

export default SupportForm;
