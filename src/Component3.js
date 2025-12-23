import React, { useContext } from 'react';
import { AppContext } from './AppContext';
import Component4 from './Component4';

const Component3 = () => {
  const { a, b } = useContext(AppContext);

  return (
    <div style={{ padding: '20px', border: '2px solid #777', margin: '10px' }}>
      <h2>Component 3</h2>
      <p>✅ Consumes a and b from context</p>
      <p>✅ Displays them using &lt;h4&gt;</p>
      <h4>This is prop a: {a}</h4>
      <h4>This is prop b: {b}</h4>
      <Component4 />
    </div>
  );
};

export default Component3; 
