// import clsx from 'clsx';
import { useState } from 'react';
import Button from '../Button/Button';
import s from './TodoForm.module.css';

const TodoForm = () => {
  const [descr, setDescr] = useState('');

  const handleChange = (e) => {
    const { value } = e.target;

    console.log('value :>> ', value);
    setDescr(value);
  };

  return (
    <form className={s.form}>
      <label className={s.label}>
        <span> Description </span>
        <input
          className={s.input}
          type="text"
          value={descr}
          name="descr"
          onChange={handleChange}
        />
      </label>
      <Button size="medium">OK</Button>
    </form>
  );
};

export default TodoForm;

/* Select
<label className={s.label}>
        <span> Theme </span>
        <select name="theme">
          <option value="green">Green</option>
          <option value="orange">Orange</option>
          <option value="red">Red</option>
        </select>
      </label>
*/

/* Date
<label className={s.label}>
        <span> Date </span>
        <input className={s.input} name="date" type="date" />
      </label>
*/

/* Description
<label className={s.label}>
        <span> Description </span>
        <input className={s.input} type="text" name="descr" />
      </label>
*/

/* 
<div className={s.labelWrapper}>
        <div className={s.radioWrapper}>
          <input
            id="formRadioLow"
            className={s.input}
            type="radio"
            name="priority"
            value="low"
          />
          <label
            className={clsx(s.label, s.radio)} htmlFor="formRadioLow"
          >
            Low
          </label>
        </div>
        <div className={s.radioWrapper}>
          <input
            id="formRadioMedium"
            className={s.input}
            type="radio"
            name="priority"
            value="medium"
          />
          <label className={clsx(s.label, s.radio)} htmlFor="formRadioMedium">
            Medium
          </label>
        </div>
        <div className={s.radioWrapper}>
          <input
            id="formRadioHigh"
            className={s.input}
            type="radio"
            name="priority"
            value="high"
          />
          <label className={clsx(s.label, s.radio)} htmlFor="formRadioHigh">
            High
          </label>
        </div>
      </div>
*/
