// import React, { Fragment } from 'react';
import productsList from './assets/data.json';
import Header from './components/Header/Header';
import Message from './components/Message/Message';
import Product from './components/Product/Product';
import Section from './components/Section/Section';
import MainSection from './MainSection/MainSection';
import './App.css';

// const navEl = React.createElement(
//   'nav',
//   {},
//   React.createElement('ul', { className: 'list' }),
//   null
// );

// const headerEl = React.createElement('header', { className: 'header' }, navEl);

// const sum = () => 3 + 2;

function App() {
  // return headerEl;

  const mainTitle = 'App';
  // const subTitle = 'sub';
  return (
    <>
      <Header />
      {/* {Header()} */}
      <main>
        <MainSection title={mainTitle + ' ' + 'page'}>
          {/* <h1>
            {mainTitle} {subTitle}
          </h1> */}
          <Message message={'some message'} author={'bart simpson'} isVisible />
          <Message
            message={'some message'}
            author={'bart simpson'}
            isVisible={false}
            isOnline={false}
          />
          {/* {sum()} */}
        </MainSection>
        <Section title={'Some section title - 1'}>
          some section content - 1
        </Section>
        <Section content={'some section content - 2'} />

        <Product products={productsList} />
        {/* {Product({ products: productsList })} */}
      </main>
      <footer>logo</footer>
    </>
  );
}

export default App;
