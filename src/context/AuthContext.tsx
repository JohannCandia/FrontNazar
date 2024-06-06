import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface AuthContextType {
  authStatus: 'authenticated' | 'not-authenticated';
  login: () => void;
  logout: () => void;
  loading: boolean; 
}

const AuthContext = createContext<AuthContextType | null>(null);

interface AuthProviderProps {
  children: ReactNode;
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth debe estar dentro del proveedor de AuthContext');
  }
  return context;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [authStatus, setAuthStatus] = useState<AuthContextType['authStatus']>('not-authenticated');
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const isAuth = localStorage.getItem('isAuthenticated');
    if (isAuth === 'true') {
      setAuthStatus('authenticated');
    }
    setLoading(false); 
  }, []);

  const login = () => {
    setAuthStatus('authenticated');
    localStorage.setItem('isAuthenticated', 'true'); 
  };

  const logout = () => {
    setAuthStatus('not-authenticated');
    localStorage.removeItem('isAuthenticated'); 
  };

  return (
    <AuthContext.Provider value={{ authStatus, login, logout, loading }}>
    {!loading && children}
  </AuthContext.Provider>
  );
};