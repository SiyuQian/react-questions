'use client';

import { useEffect, useState } from 'react';

export const Question2 = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const i = setInterval(() => {
      console.log('Interval function running ...');
      setCount(count + 1);
    }, 1000);

    return () => {
      clearInterval(i);
    };
  }, []);

  return (
    <div className="ml-10 mt-10">
      <h3>Question 2</h3>
      State: {count}
    </div>
  );
};
