import { useId } from 'react';
import { v4 as uuidv4 } from 'uuid';
import clsx from 'clsx';
import Button from '../Button/Button';
import s from './TodoForm.module.css';
import { useLocalStorage } from '../../hooks/useLocalStorage';

const TodoForm = ({ onSubmit }) => {
  const [form, setForm] = useLocalStorage('form', {
    date: '',
    descr: '',
    priority: '',
    theme: '',
  });

  const lowId = useId();
  const mediumId = useId();
  const highId = useId();

  const handleChange = (e) => {
    const { value, name } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { ...form, isDone: false, id: uuidv4() };
    onSubmit(formData);
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label className={s.label}>
        <span> Date </span>
        <input
          type="date"
          className={s.input}
          name="date"
          value={form.date}
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
      <label className={s.label}>
        <span> Theme </span>
        <select name="theme" value={form.theme} onChange={handleChange}>
          <option value=""></option>
          <option value="green">Green</option>
          <option value="orange">Orange</option>
          <option value="red">Red</option>
        </select>
      </label>
      <Button type="submit" size="medium">
        OK
      </Button>
    </form>
  );
};

export default TodoForm;
