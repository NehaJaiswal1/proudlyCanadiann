
import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authData, setAuthData] = useState({ token: null, emailId: null });

  const saveAuthData = ({ token, emailId }) => {
    console.log("from AuthContext", token, emailId);
    setAuthData({ token, emailId});
  };
  const logout = () => {
   
    setAuthData({ token: null, emailId: null });
  };


  return (
    <AuthContext.Provider value={{ authData, saveAuthData, logout  }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
