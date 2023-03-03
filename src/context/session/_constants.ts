import React from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  setIfAuthenticated: (isAuthenticated: boolean) => void;
}

export const ROOT_SESSION = React.createContext<AuthContextType>({
  isAuthenticated: false,
  setIfAuthenticated: () => ({}),
});
