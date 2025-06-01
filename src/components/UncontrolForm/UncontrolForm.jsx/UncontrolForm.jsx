import s from './UncontrolForm.module.css';

const UncontrolForm = () => {
  return (
    <form className={s.form}>
      <label className={s.label}>
        <span> Title </span>
        <input className={s.input} type="text" name="title" />
      </label>
      <label className={s.label}>
        <span> Description </span>
        <input className={s.input} type="text" name="descr" />
      </label>
      <button className={s.submit} type="submit">
        Ok
      </button>
    </form>
  );
};

export default UncontrolForm;
