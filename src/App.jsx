import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import SharedLayot from './components/SharedLayout/SharedLayout';

const CounterPage = lazy(() => import('./pages/CounterPage'));
const TodoPage = lazy(() => import('./pages/TodoPage'));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayot />}>
          <>
            <Route path="/counter" element={<CounterPage />} />
          </>
          <>
            <Route path="/todo" element={<TodoPage />} />
          </>
          <>
            <Route path="/" element={<Navigate to={'/counter'} />} />
          </>
          <>
            <Route path="*" element={<Navigate to={'/counter'} />} />
          </>
        </Route>
      </Routes>
    </>
  );
}

export default App;
