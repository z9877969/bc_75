import { useId, useState } from 'react';

const Radio = () => {
  const [priority, setPriority] = useState('');
  const lowId = useId();
  const mediumId = useId();
  const highId = useId();

  const handleChange = (e) => {
    const { value } = e.target;
    setPriority(value);
  };

  return (
    <>
      <div>
        <input
          type="radio"
          name="priority"
          value="low"
          id={lowId}
          onChange={handleChange}
          checked={'low' === priority}
        />
        <label htmlFor={lowId}>Low</label>
      </div>
      <div>
        <input
          type="radio"
          name="priority"
          value="medium"
          id={mediumId}
          onChange={handleChange}
          checked={'medium' === priority}
        />
        <label htmlFor={mediumId}>Medium</label>
      </div>
      <div>
        <input
          type="radio"
          name="priority"
          value="high"
          id={highId}
          onChange={handleChange}
          checked={'high' === priority}
        />
        <label htmlFor={highId}>High</label>
      </div>
    </>
  );
};

export default Radio;
