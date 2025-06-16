import { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [admin, setAdmin] = useState({ name: 'Admin' });

  return (
    <AuthContext.Provider value={{ admin, setAdmin }}>
      {children}
    </AuthContext.Provider>
  );
};