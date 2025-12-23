import React from 'react';
import Component3 from './Component3';

const Component2 = () => {
  return (
    <div style={{ padding: '20px', border: '2px solid #555', margin: '10px' }}>
      <h2>Component 2</h2>
      <p>❌ Does not consume context</p>
      <p>❌ Does not receive props</p>
      <p>✅ Only renders Component3</p>
      <p>👉 This component is completely unaware of the data</p>
      <Component3 />
    </div>
  );
};

export default Component2;
