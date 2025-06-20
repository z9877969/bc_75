import { lazy, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import SharedLayot from './components/SharedLayout/SharedLayout';
import { useDispatch, useSelector } from 'react-redux';
import { resetErrorAction, selectIsAuth } from './redux/auth/authSlice';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import { getCurUser } from './redux/auth/authOperations';
import RefreshTokenInterceptor from './components/RefreshTokenInterceptor/RefreshTokenInterceptor';

const CounterPage = lazy(() => import('./pages/CounterPage'));
const TodoPage = lazy(() => import('./pages/TodoPage'));

const PrivateRoute = ({ children, to = '/login' }) => {
  const isAuth = useSelector(selectIsAuth);
  return isAuth ? children : <Navigate to={to} />;
};

const RestrictedRoute = ({ children, to = '/counter' }) => {
  const isAuth = useSelector(selectIsAuth);
  console.log('to :>> ', to);

  return !isAuth ? children : <Navigate to={to} />;
};

const MainNavigate = () => {
  const isAuth = useSelector(selectIsAuth);
  return isAuth ? <Navigate to={'/counter'} /> : <Navigate to={'/login'} />;
};

const ErrorHandler = () => {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.auth.error);
  useEffect(() => {
    if (error?.status === 401) {
      alert('Login retry');
      dispatch(resetErrorAction());
    }
  }, [error, dispatch]);
};

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurUser());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayot />}>
          <Route
            path="/counter"
            element={
              <PrivateRoute to="/register">
                <CounterPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/todo"
            element={
              <PrivateRoute>
                <TodoPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/register"
            element={
              <RestrictedRoute to="/todo">
                <RegisterPage />
              </RestrictedRoute>
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute>
                <LoginPage />
              </RestrictedRoute>
            }
          />
          <Route path="*" element={<MainNavigate />} />
        </Route>
      </Routes>
      <ErrorHandler />
      <RefreshTokenInterceptor />
    </>
  );
}

export default App;
