
import React, { useState, useEffect } from 'react';

const ConditionalEffect = () => {
  const [count, setCount] = useState(0);
  const [isEven, setIsEven] = useState(true);

  useEffect((props) => {
    setIsEven(count % 2 === 0);
  }, [count]); // Effect runs whenever count changes

  return (
    <div>
      <h1>Added: {count}</h1>
      <div className='cartbtn'>
      <button  className='btn' onClick={() => setCount(count + 1)}>+</button>
      <button className='btn'  onClick={() => setCount(count - 1)}>-</button>
      </div>
    </div>
  );
};

export default ConditionalEffect;
