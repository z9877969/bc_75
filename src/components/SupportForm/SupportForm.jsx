import Button from '../Button/Button';
import s from './SupportForm.module.css';

const SupportForm = () => {
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
    <form className={s.form} onSubmit={handleSubmit}>
      <label className={s.label}>
        <span> Email </span>
        <input className={s.input} type="text" name="email" />
      </label>
      <label className={s.label}>
        <span> Message </span>
        <input className={s.input} type="text" name="message" />
      </label>
      <Button type="submit" size="medium">
        Send
      </Button>
    </form>
  );
};

export default SupportForm;
