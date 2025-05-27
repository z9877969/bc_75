import Header from './components/Header/Header';
import Message from './components/Message/Message';
import Products from './components/Products/Products';
import Section from './components/Section/Section';
import Profile from './components/Profile/Profile';
import productsList from './assets/data.json';
import userProfile from './assets/userProfile.json';
import Button from './components/Button/Button';
import { FiAlertTriangle } from 'react-icons/fi';

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
        <Button size="medium" variant="error">
          Click me!
        </Button>
        <Button size="large" variant="success">
          Click me! <FiAlertTriangle size={24} />
        </Button>
      </main>
    </div>
  );
}

export default App;
