import { useEffect, useRef } from 'react';

const ComponentUseRefExample = () => {
  const refLabelEl = useRef(null);
  const refInputEl = useRef(null);

  //   const inputEl = document.querySelector('#input'); 

  useEffect(() => {
    console.log('refEl after :>> ', refLabelEl);
    console.log('refInputEl :>> ', refInputEl);

    refInputEl.current.focus();
  }, []);

  return (
    <label ref={refLabelEl}>
      <span> Date </span>
      <input
        ref={refInputEl}
        id={'input'}
        type="text"
        name="date"
        onChange={() => {}}
      />
    </label>
  );
};

export default ComponentUseRefExample;
