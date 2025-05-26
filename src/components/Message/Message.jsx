const Message = ({ message, author, isRead = true }) => {
  return (
    <div>
      <p>Message: {message}</p>
      <p>Author: {author}</p>
      <p>Status: {isRead ? 'read' : 'unread'} </p>
    </div>
  );
};

export default Message;
