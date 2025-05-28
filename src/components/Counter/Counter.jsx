import Container from '../Container/Container';
import s from './Counter.module.css';

const Counter = () => {
  const count = 0;
  return (
    <Container className={s.container}>
      <h1 className={s.title}>Counter</h1>
      <p className={s.count}>{count}</p>
      <div className={s.btnsWrapper}>
        <button className={s.btn} type="button">
          -
        </button>
        <button className={s.btn} type="button">
          0
        </button>
        <button className={s.btn} type="button">
          +
        </button>
      </div>
    </Container>
  );
};

export default Counter;
