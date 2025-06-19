import { lazy, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import SharedLayot from './components/SharedLayout/SharedLayout';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsAuth } from './redux/auth/authSlice';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import { getCurUser } from './redux/auth/authOperations';

const CounterPage = lazy(() => import('./pages/CounterPage'));
const TodoPage = lazy(() => import('./pages/TodoPage'));

function App() {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);

  useEffect(() => {
    dispatch(getCurUser());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayot />}>
          {isAuth ? (
            <>
              <Route path="/counter" element={<CounterPage />} />
              <Route path="/todo" element={<TodoPage />} />
              <Route path="*" element={<Navigate to={'/counter'} />} />
            </>
          ) : (
            <>
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="*" element={<Navigate to={'/login'} />} />
            </>
          )}
        </Route>
      </Routes>
    </>
  );
}

export default App;
