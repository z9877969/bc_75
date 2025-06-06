import { useEffect, useState } from 'react';

export const useLocalStorage = (key, initialValue) => {
  const [data, setData] = useState(
    () => JSON.parse(localStorage.getItem(key)) || initialValue
  );

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(data));
  }, [data, key]);

  return [data, setData];
};
