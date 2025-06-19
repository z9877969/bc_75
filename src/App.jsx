import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import SharedLayot from './components/SharedLayout/SharedLayout';
import { useSelector } from 'react-redux';
import { selectIsAuth } from './redux/auth/authSlice';
import RegisterPage from './pages/RegisterPage';

const CounterPage = lazy(() => import('./pages/CounterPage'));
const TodoPage = lazy(() => import('./pages/TodoPage'));

function App() {
  const isAuth = useSelector(selectIsAuth);
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
              <Route path="/login" element={<h1>LoginPage</h1>} />
              <Route path="*" element={<Navigate to={'/login'} />} />
            </>
          )}
        </Route>
      </Routes>
    </>
  );
}

export default App;
