import { useState } from 'react';

const Select = ({ theme, setTheme }) => {
  // const [theme, setTheme] = useState('default');

  // const handleSelectChange = (e) => {
  //   const { value } = e.target;
  //   setTheme(value);
  // };

  return (
    <div>
      <label>
        <span> Theme </span>
      </label>
      <select
        name="theme"
        value={theme}
        onChange={(e) => setTheme(e.target.value)}
      >
        <option value="all">All</option>
        <option value="green">Green</option>
        <option value="orange">Orange</option>
        <option value="red">Red</option>
      </select>
    </div>
  );
};

export default Select;
