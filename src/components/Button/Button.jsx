import clsx from 'clsx';
import s from './Button.module.css';

const Button = ({
  children,
  type = 'button',
  size = 'small',
  variant = 'success',
}) => {
  return (
    <button
      type={type}
      onClick={() => {
        console.log('object');
      }}
      disabled={variant === 'disabled'}
      className={clsx(s.button, s[size], s[variant])}
    >
      {children}
    </button>
  );
};

export default Button;
