import React, { useContext } from 'react';
import { AppContext } from './AppContext';
import Component6 from './Component6';

const Component5 = () => {
  const { f } = useContext(AppContext);

  return (
    <div style={{ padding: '20px', border: '2px solid #bbb', margin: '10px' }}>
      <h2>Component 5</h2>
      <p>✅ Consumes f from context</p>
      <p>✅ Displays it using &lt;h4&gt;</p>
      <h4>This is prop f: {f}</h4>
      <Component6 />
    </div>
  );
};

export default Component5;
