import { useContext } from 'react';
import { HelloContext } from '../../context/HelloContext';

const PrintHello = () => {
  const ctxtValue = useContext(HelloContext);
  return <h1>{ctxtValue.text}</h1>;
};

export default PrintHello;
