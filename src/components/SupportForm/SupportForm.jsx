import { useId } from 'react';

import Button from '../Button/Button';
import s from './SupportForm.module.css';

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
    <form className={s.form} onSubmit={handleSubmit}>
      <label htmlFor={emailId} className={s.label}>
        <span> Email </span>
      </label>
      <input className={s.input} type="text" name="email" id={emailId} />
      <label className={s.label} htmlFor={messageId}>
        <span> Message </span>
      </label>
      <input className={s.input} type="text" name="message" id={messageId} />
      <Button type="submit" size="medium">
        Send
      </Button>
    </form>
  );
};

export default SupportForm;
