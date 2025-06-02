import { useId, useState } from 'react';

const Checkbox = () => {
  const [card, setCard] = useState([]);

  const c1 = useId();
  const c2 = useId();
  const c3 = useId();

  const handleChange = (e) => {
    const { value } = e.target;

    setCard(
      card.includes(value)
        ? card.filter((el) => el !== value)
        : [...card, value]
    );
  };

  return (
    <div>
      <div>
        <label htmlFor={c1}>Card-1</label>
        <input
          type="checkbox"
          name="card"
          value={'card-1'}
          id={c1}
          checked={card.includes('card-1')}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor={c2}>Card-2</label>
        <input
          type="checkbox"
          name="card"
          value={'card-2'}
          id={c2}
          checked={card.includes('card-2')}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor={c3}>Card-3</label>
        <input
          type="checkbox"
          name="card"
          value={'card-3'}
          id={c3}
          checked={card.includes('card-3')}
          onChange={handleChange}
        />
      </div>
      <button type="batton" disabled={card.length === 0}>
        Share
      </button>
    </div>
  );
};

export default Checkbox;
