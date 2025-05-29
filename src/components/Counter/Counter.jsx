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

// const initialState2 = 25

const Counter = () => {
  const [theme, setTheme] = useState({ color: 'red' });
  // const [age, setAge] = useState(15);
  const [count, setCount] = useState(0);
  // const [error, setError] = useState(initialState2);

  // useState(); // -> [v, setV]

  // 0 -> 25 -> 15 -> 15

  console.log('RENDER');

  return (
    <Container className={s.container}>
      <h1 className={s.title}>Counter</h1>
      <p className={s.count} style={{ color: theme.color }}>
        {count}
      </p>
      <div className={s.btnsWrapper}>
        {/* <Button handleClick={() => setCount(count - 5)}>-5</Button> */}
        <button
          className={s.btn}
          type="button"
          onClick={() => setCount(count - 5)}
        >
          -5
        </button>
        <button className={s.btn} type="button" onClick={() => setCount(0)}>
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

// const arr = [1,2,5]
// arr[1]

// const [val1, val2, val3, ...rest] = arr
