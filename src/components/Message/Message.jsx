import { Fragment } from 'react';

const Message = ({ message, author, isVisible, isOnline = true }) => {
  console.log('isVisible :>> ', isVisible);
  return (
    <div>
      <p>Message: {message}</p>
      <p>Author: {author}</p>
      <p>Status: {isVisible ? 'read' : 'unread'} </p>
      {isOnline ? (
        <>
          <span>user</span> <span>online</span>{' '}
        </>
      ) : (
        <span>offline</span>
      )}
    </div>
  );
};

export default Message;
