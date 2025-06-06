import Header from './components/Header/Header';
import Todo from './components/Todo/Todo';
import Artists from './components/Artists/Artists';
import ComponentUseMemoExample from './components/ComponentUseMemoExample';

function App() {
  return (
    <>
      <Header />
      {/* <ComponentUseMemoExample /> */}
      <Todo />
      {/* <Artists /> */}
    </>
  );
}

export default App;


// Comp() | lexical env -> Comp() lexical env -> Comp()