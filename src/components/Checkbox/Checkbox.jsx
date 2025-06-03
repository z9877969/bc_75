import { Field, Form, Formik } from 'formik';
import { useId, useState } from 'react';

const Checkbox = () => {
  const [card, setCard] = useState([]);

  const c1 = useId();
  const c2 = useId();
  const c3 = useId();

  const handleChange = (e) => {
    const { value } = e.target;

    setCard(
      card.includes(value)
        ? card.filter((el) => el !== value)
        : [...card, value]
    );
  };

  return (
    <Formik
      initialValues={{ card: [] }}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ values }) => (
        <Form>
          <div>
            <label htmlFor={c1}>Card-1</label>
            <Field type="checkbox" name="card" value={'card-1'} id={c1} />
          </div>
          <div>
            <label htmlFor={c2}>Card-2</label>
            <Field type="checkbox" name="card" value={'card-2'} id={c2} />
          </div>
          <div>
            <label htmlFor={c3}>Card-3</label>
            <Field type="checkbox" name="card" value={'card-3'} id={c3} />
          </div>
          <button type="batton" disabled={values.card.length === 0}>
            Share
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default Checkbox;
