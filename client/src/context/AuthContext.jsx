import React, { createContext, useContext, useEffect, useState } from 'react';
import api from '../services/api';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [token, setToken] = useState(() => localStorage.getItem('apj_token'));
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (token) {
      localStorage.setItem('apj_token', token);
      // Optionally load profile
      api
        .get('/auth/profile')
        .then((res) => setUser(res.data))
        .catch(() => setUser(null));
    } else {
      localStorage.removeItem('apj_token');
      setUser(null);
    }
  }, [token]);

  const login = (jwt) => setToken(jwt);
  const logout = () => setToken(null);

  return (
    <AuthContext.Provider value={{ token, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
