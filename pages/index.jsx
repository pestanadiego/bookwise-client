import React from 'react';
import Hello from 'components/Hello';

export default function Home() {
  return (
    <div className="w-full flex flex-col">
      <h1 className="text-4xl text-gray-700">NextJS with tailwind</h1>
      <Hello />
    </div>
  );
}
