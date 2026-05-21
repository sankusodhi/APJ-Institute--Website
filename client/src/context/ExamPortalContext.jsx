import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

const THEME_KEY = 'apj_exam_theme';
const SESSION_KEY = 'apj_exam_session';

const ExamPortalContext = createContext(null);

function readJson(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
}

function makeId(prefix) {
  return `${prefix}_${Date.now()}_${Math.round(Math.random() * 1e6)}`;
}

export function ExamPortalProvider({ children }) {
  const [theme, setTheme] = useState(() => localStorage.getItem(THEME_KEY) || 'light');
  const [session, setSession] = useState(() => readJson(SESSION_KEY, null));
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    localStorage.setItem(THEME_KEY, theme);
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  useEffect(() => {
    if (session) {
      localStorage.setItem(SESSION_KEY, JSON.stringify(session));
    } else {
      localStorage.removeItem(SESSION_KEY);
    }
  }, [session]);

  const notify = useCallback((message, type = 'info') => {
    const id = makeId('toast');
    setToasts((current) => [...current, { id, message, type }]);
    window.setTimeout(() => {
      setToasts((current) => current.filter((toast) => toast.id !== id));
    }, 3200);
  }, []);

  const login = useCallback(
    ({ role, name, email }) => {
      const nextSession = {
        token: makeId(`jwt_${role}`),
        role,
        name,
        email,
      };
      setSession(nextSession);
      notify(`${role.charAt(0).toUpperCase() + role.slice(1)} login successful.`, 'success');
      return nextSession;
    },
    [notify]
  );

  const logout = useCallback(() => {
    setSession(null);
    notify('Signed out successfully.', 'info');
  }, [notify]);

  const toggleTheme = useCallback(() => {
    setTheme((current) => (current === 'dark' ? 'light' : 'dark'));
  }, []);

  const removeToast = useCallback((id) => {
    setToasts((current) => current.filter((toast) => toast.id !== id));
  }, []);

  const value = useMemo(
    () => ({
      theme,
      setTheme,
      toggleTheme,
      session,
      login,
      logout,
      notify,
      toasts,
      removeToast,
      isAuthenticated: Boolean(session?.token),
    }),
    [theme, toggleTheme, session, login, logout, notify, toasts, removeToast]
  );

  return <ExamPortalContext.Provider value={value}>{children}</ExamPortalContext.Provider>;
}

export function useExamPortal() {
  const context = useContext(ExamPortalContext);

  if (!context) {
    throw new Error('useExamPortal must be used within ExamPortalProvider');
  }

  return context;
}
