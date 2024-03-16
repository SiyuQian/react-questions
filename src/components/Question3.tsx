'use client';

import { useEffect, useState } from 'react';

export const Question3 = () => {
  const [id, setId] = useState(1);

  return (
    <div className="ml-10 mt-10">
      <button onClick={() => setId(Math.round(Math.random() * 100))} className="border border-slate-500 px-4 py-2">
        Show me a different post
      </button>

      <Question3Content id={id} />
    </div>
  );
};

export const Question3Content = ({ id }: { id: number }) => {
  // https://dummyjson.com/post/${id}
  const [text, setText] = useState('');

  useEffect(() => {
    fetch(`https://dummyjson.com/post/${id}`)
      .then((res) => res.json())
      .then((data) => setText(data.body));
  }, [id]);

  return <p>{text}</p>;
};
