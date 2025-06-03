import { useId } from 'react';
import { v4 as uuidv4 } from 'uuid';
import clsx from 'clsx';
import Button from '../Button/Button';
import s from './TodoForm.module.css';
import { Form, Formik, Field, ErrorMessage, /* useFormik */ } from 'formik';
import { object, string } from 'yup';

const todoFormSchema = object({
  date: string().required(),
  descr: string().required().max(128, 'Must 128 or less'),
  priority: string().required().oneOf(['low', 'medium', 'high']),
  theme: string().required().oneOf(['green', 'orange', 'red']),
});

const TodoForm = ({ onSubmit }) => {
  const lowId = useId();
  const mediumId = useId();
  const highId = useId();

  return (
    <Formik
      initialValues={{
        date: '',
        descr: '',
        priority: '',
        theme: '',
      }}
      validationSchema={todoFormSchema}
      onSubmit={(values, actions) => {
        const formData = { ...values, isDone: false, id: uuidv4() };
        onSubmit(formData);
        actions.resetForm();
      }}
    >
      <Form className={s.form}>
        <label className={s.label}>
          <span> Date </span>
          <Field type="date" className={s.input} name="date" />
          <ErrorMessage
            component={'div'}
            className={s.errorMessage}
            name="date"
          />
        </label>
        <label className={s.label}>
          <span> Description </span>
          <Field type="text" className={s.input} name="descr" />
          <ErrorMessage
            component={'div'}
            className={s.errorMessage}
            name="descr"
          />
        </label>
        <div className={s.labelWrapper}>
          <div className={s.radioWrapper}>
            <Field
              id={lowId}
              className={s.input}
              type="radio"
              name="priority"
              value="low"
            />
            <label className={clsx(s.label, s.radio)} htmlFor={lowId}>
              Low
            </label>
          </div>
          <div className={s.radioWrapper}>
            <Field
              id={mediumId}
              className={s.input}
              type="radio"
              name="priority"
              value="medium"
            />
            <label className={clsx(s.label, s.radio)} htmlFor={mediumId}>
              Medium
            </label>
          </div>
          <div className={s.radioWrapper}>
            <Field
              id={highId}
              className={s.input}
              type="radio"
              name="priority"
              value="high"
            />
            <label className={clsx(s.label, s.radio)} htmlFor={highId}>
              High
            </label>
          </div>
          <ErrorMessage
            component={'div'}
            className={s.errorMessage}
            name="priority"
          />
        </div>
        <label className={s.label}>
          <span> Theme </span>
          <Field as="select" name="theme">
            <option value=""></option>
            <option value="green">Green</option>
            <option value="orange">Orange</option>
            <option value="red">Red</option>
          </Field>
          <ErrorMessage
            component={'div'}
            className={s.errorMessage}
            name="theme"
          />
        </label>
        <Button type="submit" size="medium">
          OK
        </Button>
      </Form>
    </Formik>
  );
};

export default TodoForm;
