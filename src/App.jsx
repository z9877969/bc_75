import { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Products from './components/Products/Products';
import Counter from './components/Counter/Counter';

// const useState = (initial) => {
//   let v = initial;
//   const setV = (param) => (v = param);

//   return [v, setV]
// };

const foo = (t) => t + 1;

function App() {
  const [pageType, setPageType] = useState('counter');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [time, setTime] = useState(0);
  const [pageTitle, setPageTitle] = useState('');

  const toogleCart = (status) => {
    if (pageType === 'products') {
      setIsCartOpen(status);
    }
  }; // ref1 -> ref2 -> ref3

  useEffect(() => {
    // console.log('useEffect');
    setInterval(() => {
      setTime((prevTime) => foo(prevTime)); // setTime(1) -> setTime(1)
    }, 1000);
  }, []);

  // useEffect(() => {
  //   pageType !== 'products' && isCartOpen && setIsCartOpen(false);
  // }, [pageType, isCartOpen]);

  // useEffect(() => {
  //   console.log('updated pageType', pageType);
  // }, [pageType]);

  // useEffect(() => {
  //   console.log('updated isCartOpen', isCartOpen);
  // }, [isCartOpen]);

  // useEffect(() => {
  //   console.log('updated pageType + isCartOpen', pageType + ' ' + isCartOpen);
  // }, [pageType, isCartOpen]);

  useEffect(() => {
    let visibleTime = 0;
    if (time % 5 === 0) {
      visibleTime = time;
    }

    const title =
      pageType === 'counter'
        ? `CounterPage-${visibleTime}`
        : pageType === 'products'
        ? `ProductsPage-${visibleTime}`
        : '';
    setPageTitle(title);
  }, [pageType, time]);

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
      <Header changePageType={setPageType} openCart={toogleCart} />
      <main>
        <h1 style={{ textAlign: 'center' }}>{pageTitle}</h1>
        <h2 style={{ textAlign: 'center' }}>{time}</h2>
        {pageType === 'products' && (
          <Products isCartOpen={isCartOpen} closeCart={toogleCart} />
        )}
        {pageType === 'counter' && <Counter />}
      </main>
    </div>
  );
}

export default App;
