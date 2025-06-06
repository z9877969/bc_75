import Header from './components/Header/Header';
import Todo from './components/Todo/Todo';
import Artists from './components/Artists/Artists';
import ComponentUseMemoExample from './components/ComponentUseMemoExample';
import ComponentUseRefExample from './components/CompoenetUseRefExample';
import TodoProvider from './context/TodoContext';
import { useContext } from 'react';
import { HelloContext } from './context/HelloContext';
import PrintHello from './components/PrintHello/PrintHello';

function App() {
  // const contextValue = useContext(HelloContext);
  return (
    <>
      <Header />
      {/* <button onClick={contextValue.changeText}>Change Text</button>
       */}
      <PrintHello />
      <TodoProvider>
        <Todo />
      </TodoProvider>
      {/* <Artists /> */}
      {/* <ComponentUseMemoExample /> */}
      {/* <ComponentUseRefExample /> */}
    </>
  );
}

export default App;

// Comp() | lexical env -> Comp() lexical env -> Comp()
