import React, { createContext, useContext, useEffect, useState } from 'react';
import api from '../services/api';
import socket, { connectSocket, disconnectSocket } from '../socket/socket';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [token, setToken] = useState(() => localStorage.getItem('apj_token'));
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (token) {
      localStorage.setItem('apj_token', token);
      // Ensure socket connects when authenticated
      try {
        connectSocket();
      } catch (e) {}
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

  const login = (jwt) => {
    setToken(jwt);
    try {
      connectSocket();
    } catch (e) {}
  };

  const logout = () => {
    // Disconnect socket on logout
    try {
      disconnectSocket();
    } catch (e) {}
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ token, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
