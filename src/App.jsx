import Header from './components/Header/Header';
import Products from './components/Products/Products';
import Counter from './components/Counter/Counter';
import { useState } from 'react';

function App() {
  const [pageType, setPageType] = useState('counter');
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <div>
      {/* <button
        type="button"
        onClick={() => {
          setInterval(() => {
            console.log('isCartOpen :>> ', isCartOpen);
            setIsCartOpen(!isCartOpen);
          }, 1500);
        }}
      >
        Click
      </button> */}
      <Header changePageType={setPageType} openCart={setIsCartOpen} />
      <main>
        {pageType === 'products' && (
          <Products isCartOpen={isCartOpen} closeCart={setIsCartOpen} />
        )}
        {pageType === 'counter' && <Counter />}
      </main>
    </div>
  );
}

export default App;
