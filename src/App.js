import React from 'react';
import Component1 from './Component1';

function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      <h1>Solving Props Drilling Using Context API</h1>
      <p>This application demonstrates how Context API eliminates props drilling</p>
      <Component1 />
    </div>
  );
}

export default App;
