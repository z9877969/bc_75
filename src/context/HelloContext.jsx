import { createContext, useState } from 'react';

// eslint-disable-next-line
export const HelloContext = createContext();

const HelloProvider = ({ children }) => {
  const [text, setText] = useState('hello');

  const changeText = () => setText(text === 'hello' ? 'bye' : 'hello');

  return (
    <HelloContext.Provider
      value={{
        text: text,
        setText: setText,
        changeText,
      }}
    >
      {children}
    </HelloContext.Provider>
  );
};

export default HelloProvider;
