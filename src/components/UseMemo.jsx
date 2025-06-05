import { useState } from 'react';
import Button from './Button/Button';

const calculateBigData = (multiplier) => {
  let n = 0;
  for (let i = 0; i <= 5e9; i += 1) {
    n = n + 1;
  }

  return Array(20)
    .fill(null)
    .map((el, i) => (i + 1) * multiplier);
};

const UseMemo = () => {
  const [theme, setTheme] = useState('light');
  const [multiplier, setMultiplier] = useState(1);

  console.time();
  //   const data = calculateBigData(multiplier);
  const data = [];
  console.timeEnd();

  return (
    <div style={{ width: 'fit-content', margin: '0 auto' }}>
      <Button
        handleClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      >
        Change theme
      </Button>

      <Button variant="error" handleClick={() => setMultiplier(multiplier + 1)}>
        Change multiplier
      </Button>

      <ul>
        {data.map((el) => (
          <li key={el}>{el}</li>
        ))}
      </ul>
    </div>
  );
};

export default UseMemo;
