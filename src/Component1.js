import React from 'react';
import { AppContextProvider } from './AppContext';
import Component2 from './Component2';

const Component1 = () => {
  return (
    <AppContextProvider>
      <div style={{ padding: '20px', border: '2px solid #333', margin: '10px' }}>
        <h2>Component 1</h2>
        <p>✅ Wraps entire tree with AppContext.Provider</p>
        <p>✅ Provides values: a, b, c, d, e, f</p>
        <p>❌ Does NOT pass props to children</p>
        <Component2 />
      </div>
    </AppContextProvider>
  );
};

export default Component1;
