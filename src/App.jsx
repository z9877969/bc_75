import Header from './components/Header/Header';
import Message from './components/Message/Message';
import Product from './components/Product/Product';
import Section from './components/Section/Section';
import productsList from './assets/data.json';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <main>
        <Section title={'Main Page'}>
          <Message message={'some message'} author={'bart simpson'} isRead />
          <Message
            message={'some message'}
            author={'rosi simpson'}
            isRead={false}
          />
        </Section>
        <Product products={productsList} />
      </main>
    </>
  );
}

export default App;
