import React, { createContext } from 'react';

export const AppContext = createContext();

// Context Provider Component
export const AppContextProvider = ({ children }) => {
  // Define values a, b, c, d, e, f only once
  const contextValues = {
    a: 'Value A',
    b: 'Value B',
    c: 'Value C',
    d: 'Value D',
    e: 'Value E',
    f: 'Value F'
  };

  return (
    <AppContext.Provider value={contextValues}>
      {children}
    </AppContext.Provider>
  );
};
