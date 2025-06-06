import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.scss';
import HelloProvider from './context/HelloContext.jsx';

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <HelloProvider>
    <App />
  </HelloProvider>
  // </StrictMode>
);
