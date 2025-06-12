import { lazy, /* useEffect, useState  */} from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import SharedLayot from './components/SharedLayout/SharedLayout';

const CounterPage = lazy(() => import('./pages/CounterPage'));
const TodoPage = lazy(() => import('./pages/TodoPage'));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayot />}>
          <Route path="/counter" element={<CounterPage />} />
          <Route path="/todo" element={<TodoPage />} />
          <Route path="*" element={<Navigate to={'/conter'} />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

// const Foo = (params) => {
//   const [data, setData] = useState([]);
//   const [period, setPeriod] = useState('week');

//   useEffect(() => {
//     console.log('fetch data by period-', period);
//     const fetchedData = fetch('/', period);
//     setData(fetchedData);
//   }, [period]);
//   return (
//     <>
//       <h2>Filter period - {period}</h2>
//       <h2>Stats - {data}</h2>
//     </>
//   );
// };
