import React, { useContext } from 'react';

const Context = React.createContext({
  value: null,
});

export function Provider({ value, children }) {
  return <Context.Provider value={{ value }}>{children}</Context.Provider>;
}

export default function useProfile() {
  const { value } = useContext(Context);
  return value;
}

