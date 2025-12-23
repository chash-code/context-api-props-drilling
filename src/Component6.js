import React, { useContext } from 'react';
import { AppContext } from './AppContext';

const Component6 = () => {
  const { e } = useContext(AppContext);

  return (
    <div style={{ padding: '20px', border: '2px solid #ddd', margin: '10px' }}>
      <h2>Component 6</h2>
      <p>✅ Consumes e from context</p>
      <p>✅ Displays it using &lt;h4&gt;</p>
      <h4>This is prop e: {e}</h4>
    </div>
  );
};

export default Component6;
