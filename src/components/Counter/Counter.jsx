import { useDispatch, useSelector } from 'react-redux';
import Container from '../Container/Container';
import s from './Counter.module.css';
import {
  decrementAction,
  incrementAction,
  resetAction,
} from '../../redux/count/countActions';

const Counter = () => {
  const count = useSelector((state) => state.count);

  const dispatch = useDispatch();

  console.log('count :>> ', count);

  return (
    <Container className={s.container}>
      <p className={s.count}>{count}</p>
      <div className={s.btnsWrapper}>
        <button
          className={s.btn}
          type="button"
          onClick={() => dispatch(incrementAction(25))}
        >
          +5
        </button>
        <button
          className={s.btn}
          type="button"
          onClick={() => dispatch(resetAction())}
        >
          0
        </button>
        <button className={s.btn} onClick={() => dispatch(decrementAction(15))}>
          -15
        </button>
      </div>
    </Container>
  );
};

export default Counter;
