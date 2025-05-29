import clsx from 'clsx';
import s from './Button.module.css';

const Button = ({
  children,
  type = 'button',
  size = 'small',
  variant = 'success',
  className,
  handleClick,
}) => {
  return (
    <button
      type={type}
      onClick={handleClick}
      disabled={variant === 'disabled'}
      className={clsx(s.button, s[size], s[variant], className && className)}
    >
      {children}
    </button>
  );
};

export default Button;
