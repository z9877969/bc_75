import { Field, Form, Formik } from 'formik';
import { useId, useState } from 'react';
import Button from '../Button/Button';

const Radio = () => {
  const [priority, setPriority] = useState('');
  const lowId = useId();
  const mediumId = useId();
  const highId = useId();

  const handleChange = (e) => {
    const { value } = e.target;
    setPriority(value);
  };

  return (
    <Formik
      initialValues={{ priority: '' }}
      onSubmit={(values, actions) => {
        console.log(values);
        actions.resetForm();
        // actions.setFieldValue('priority', 'low');
      }}
    >
      <Form>
        <div>
          <Field type="radio" name="priority" value="low" id={lowId} />
          <label htmlFor={lowId}>Low</label>
        </div>
        <div>
          <Field type="radio" name="priority" value="medium" id={mediumId} />
          <label htmlFor={mediumId}>Medium</label>
        </div>
        <div>
          <Field type="radio" name="priority" value="high" id={highId} />
          <label htmlFor={highId}>High</label>
        </div>
        <Button type="submit">Send</Button>
      </Form>
    </Formik>
  );
};

export default Radio;
