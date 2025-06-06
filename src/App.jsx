import Header from './components/Header/Header';
import Todo from './components/Todo/Todo';
import Artists from './components/Artists/Artists';
import ComponentUseMemoExample from './components/ComponentUseMemoExample';
import ComponentUseRefExample from './components/CompoenetUseRefExample';

function App() {
  return (
    <>
      <Header />
      {/* <Todo /> */}
      {/* <Artists /> */}
      {/* <ComponentUseMemoExample /> */}
      <ComponentUseRefExample />
    </>
  );
}

export default App;

// Comp() | lexical env -> Comp() lexical env -> Comp()
