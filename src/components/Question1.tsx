'use client';

import { useEffect, useState } from 'react';

export const Question1 = () => {
  const [count, setCount] = useState(-1);

  useEffect(() => {
    setCount(0);
  });

  console.log('render question 1'); // ? 这边打印了几次

  return (
    <div className="ml-10">
      <h3>Question 1</h3>
      <button>{count}</button>
    </div>
  );
};
