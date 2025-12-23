import React, { useContext } from 'react';
import { AppContext } from './AppContext';
import Component5 from './Component5';

const Component4 = () => {
  const { c, d } = useContext(AppContext);

  return (
    <div style={{ padding: '20px', border: '2px solid #999', margin: '10px' }}>
      <h2>Component 4</h2>
      <p>✅ Consumes c and d from context</p>
      <p>✅ Displays them using &lt;h4&gt;</p>
      <h4>This is prop c: {c}</h4>
      <h4>This is prop d: {d}</h4>
      <Component5 />
    </div>
  );
};

export default Component4;
