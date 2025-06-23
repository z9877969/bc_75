import {
  createContext,
  StrictMode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import App from './App.jsx';
import './index.scss';
import { persistor, store } from './redux/store.js';
import createTransform from 'redux-persist/es/createTransform';

// export const DispatchContext = createContext();
// export const SelectorContext = createContext();

// export const useDispatch = () => {
//   const dispatch = useContext(DispatchContext);
//   return dispatch;
// };

// export const useSelector = (cb) => {
//   const state = useContext(SelectorContext);
//   return cb(state);
// };

// console.log('store :>> ', store);

// // eslint-disable-next-line
// const StoreProvider = ({ store, children }) => {
//   const { dispatch, getState, subscribe } = store;

//   const [state, setState] = useState(getState());

//   useEffect(() => {
//     subscribe((state) => {
//       setState(state);
//     });
//   }, [subscribe]);

//   return (
//     <DispatchContext.Provider value={dispatch}>
//       <SelectorContext.Provider value={state}>
//         {children}
//       </SelectorContext.Provider>
//     </DispatchContext.Provider>
//   );
// };

const ModalContext = createContext();

export const useModal = () => {
  const setModal = useContext(ModalContext);
  return setModal;
};

const ModalProvider = ({ children }) => {
  const [modal, setModal] = useState(null);
  console.log('ModalProvider');
  return (
    <ModalContext.Provider value={setModal}>
      {children}
      {modal && (
        <div
          className="backdrop"
          onClick={() => setModal(null)}
          style={{
            width: '100vw',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#00000099',
            position: 'fixed',
            top: 0,
            left: 0,
            zIndex: 100,
          }}
        >
          {modal}
        </div>
      )}
    </ModalContext.Provider>
  );
};

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <Provider store={store}>
    {/* <StoreProvider store={store}> */}
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <ModalProvider>
          <App />
        </ModalProvider>
      </BrowserRouter>
    </PersistGate>
    {/* </StoreProvider> */}
  </Provider>
  // </StrictMode>
);
