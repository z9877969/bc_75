import Header from './components/Header/Header';
import Products from './components/Products/Products';
import Counter from './components/Counter/Counter';

function App() {
  return (
    <div className="app_wrapper">
      <Header />
      <main>
        <Products />
        {/* <Counter /> */}
      </main>
    </div>
  );
}

export default App;
