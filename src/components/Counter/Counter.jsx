import Container from '../Container/Container';
import s from './Counter.module.css';

const Counter = () => {
  return (
    <Container className={s.container}>
      <p className={s.count}>{0}</p>
      <div className={s.btnsWrapper}>
        <button className={s.btn} type="button">
          +5
        </button>
        <button className={s.btn} type="button">
          0
        </button>
        <button className={s.btn}>+15</button>
      </div>
    </Container>
  );
};

export default Counter;
