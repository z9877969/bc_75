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
        onClick={(event) => {
          // console.dir(event.target);
          // console.log('CLICK');
          setInterval(() => {
            console.log('object');
            setIsCartOpen(p => !p);
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
