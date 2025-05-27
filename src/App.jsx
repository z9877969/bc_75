import Header from './components/Header/Header';
import Message from './components/Message/Message';
import Products from './components/Products/Products';
import Section from './components/Section/Section';
import Profile from './components/Profile/Profile';
import productsList from './assets/data.json';
import userProfile from './assets/userProfile.json';

function App() {
  return (
    <div className="app_wrapper">
      <Header />
      <main>
        <button style={{ width: '150px', height: '80px' }}>Click</button>
        <h1 className="app__title--normal">Main Page</h1>
        <Section title={'Main Page'}>
          <Message
            message={'some message'}
            author={'bart simpson'}
            isRead
            authorStatus="me"
          />
          <Message
            message={'some message'}
            author={'rosi simpson'}
            isRead={false}
          />
        </Section>
        <Profile {...userProfile} />
        <Profile {...userProfile} />
        <Products products={productsList} />
      </main>
    </div>
  );
}

export default App;
