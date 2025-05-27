// import './Message.css';
import clsx from 'clsx';
import s from './Message.module.scss';

const Message = ({ message, author, isRead = true, authorStatus }) => {
  return (
    // <div className={`${s.wrapper} ${authorStatus === 'me' ? s.ownBg : ''}`}>
    <div className={clsx(s.wrapper, authorStatus === 'me' && s.ownBg)}>
      <h3 className={s.title}>Message card</h3>
      <p className={s.font}>Message: {message}</p>
      <p className={s.fontBold}>Author: {author}</p>
      <span>Status: {isRead ? 'read' : 'unread'} </span>
    </div>
  );
};

export default Message;
