import { useEffect, useId, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';
import Button from '../Button/Button';
import s from './TodoForm.module.css';
import { addData, updateTodoData } from '../../redux/todo/todoOperations';
import {
  resetEditedDataAction,
  selectEditedData,
} from '../../redux/todo/todoSlice';

const initialState = {
  date: '2025-06-20',
  descr: '',
  priority: 'low',
  theme: 'green',
};

const TodoForm = () => {
  // console.log('Render Form');
  const dispatch = useDispatch();

  const editedData = useSelector(selectEditedData);

  const [form, setForm] = useState(initialState);

  const lowId = useId();
  const mediumId = useId();
  const highId = useId();

  const handleChange = (e) => {
    const { value, name } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = { ...form, isDone: false };

    await dispatch(addData(formData)).unwrap();
    setForm(initialState);
  };

  const handleEditDataForm = (e) => {
    e.preventDefault();
    dispatch(updateTodoData(form)).unwrap();

    dispatch(resetEditedDataAction());
  };

  useEffect(() => {
    editedData ? setForm(editedData) : setForm(initialState);
  }, [editedData]);

  return (
    <form
      className={s.form}
      onSubmit={!editedData ? handleSubmit : handleEditDataForm}
    >
      <label className={s.label}>
        <span> Date </span>
        <input
          className={s.input}
          type="date"
          value={form.date}
          name="date"
          onChange={handleChange}
        />
      </label>
      <label className={s.label}>
        <span> Description </span>
        <input
          className={s.input}
          type="text"
          value={form.descr}
          name="descr"
          onChange={handleChange}
        />
      </label>
      <div className={s.labelWrapper}>
        <div className={s.radioWrapper}>
          <input
            id={lowId}
            className={s.input}
            type="radio"
            name="priority"
            value="low"
            checked={'low' === form.priority}
            onChange={handleChange}
          />
          <label className={clsx(s.label, s.radio)} htmlFor={lowId}>
            Low
          </label>
        </div>
        <div className={s.radioWrapper}>
          <input
            id={mediumId}
            className={s.input}
            type="radio"
            name="priority"
            value="medium"
            checked={'medium' === form.priority}
            onChange={handleChange}
          />
          <label className={clsx(s.label, s.radio)} htmlFor={mediumId}>
            Medium
          </label>
        </div>
        <div className={s.radioWrapper}>
          <input
            id={highId}
            className={s.input}
            type="radio"
            name="priority"
            value="high"
            checked={'high' === form.priority}
            onChange={handleChange}
          />
          <label className={clsx(s.label, s.radio)} htmlFor={highId}>
            High
          </label>
        </div>
      </div>
      <div style={{ display: 'flex', gap: '20px' }}>
        <Button type="submit" size="medium" className={s.submitBtn}>
          {editedData ? 'Edit' : 'Create'}
        </Button>
        {editedData && (
          <Button
            type="button"
            size="medium"
            variant="warn"
            handleClick={() => {
              dispatch(resetEditedDataAction());
            }}
          >
            Reset
          </Button>
        )}
      </div>
    </form>
  );
};

export default TodoForm;
