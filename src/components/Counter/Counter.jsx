import { useDispatch, useSelector } from 'react-redux';
import Container from '../Container/Container';
import s from './Counter.module.css';

import {
  decrementAction,
  incrementAction,
  resetAction,
  selectCountValue,
} from '../../redux/count/countSlice';

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector(selectCountValue);


  return (
    <Container className={s.container}>
      <p className={s.count}>{count}</p>
      <div className={s.btnsWrapper}>
        <button
          className={s.btn}
          type="button"
          onClick={() => dispatch(incrementAction(25))}
        >
          +25
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
