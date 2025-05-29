import { useState } from 'react';
import Container from '../Container/Container';
import s from './Counter.module.css';

// const useState = (value) => {
//   let state = value;
//   const setState = (param) => (state = param);
//   return [state, setState];
// };

const Button = ({ children, handleClick }) => {
  return (
    <button className={s.btn} type="button" onClick={handleClick}>
      {children}
    </button>
  );
};

const Counter = () => {
  const [count, setCount] = useState(0);

  console.log('RENDER');

  return (
    <Container className={s.container}>
      <h1 className={s.title}>Counter</h1>
      <p className={s.count}>{count}</p>
      <div className={s.btnsWrapper}>
        <button
          className={s.btn}
          type="button"
          onClick={() => setCount(count - 5)}
        >
          -5
        </button>
        <button
          className={s.btn}
          type="button"
          onClick={() => {
            setCount(0);
          }}
        >
          0
        </button>
        <Button value={15} handleClick={() => setCount(count + 15)}>
          +15
        </Button>
      </div>
    </Container>
  );
};

export default Counter;
