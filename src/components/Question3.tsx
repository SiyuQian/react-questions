'use client';

import { useEffect, useState } from 'react';

export const Question3 = () => {
  const [id, setId] = useState(1);

  return (
    <div className="ml-10 mt-10">
      <button className="border border-slate-500 px-4 py-2">Show me a different post</button>

      <Question3Content />
    </div>
  );
};

export const Question3Content = () => {
  // https://dummyjson.com/post/${id}
  const [text, setText] = useState('');

  return <p>{text}</p>;
};
