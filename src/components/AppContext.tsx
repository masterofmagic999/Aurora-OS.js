import { createContext, useContext, useState, ReactNode } from 'react';

interface AppContextType {
  accentColor: string;
  setAccentColor: (color: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [accentColor, setAccentColor] = useState('#3b82f6'); // Default blue

  return (
    <AppContext.Provider value={{ accentColor, setAccentColor }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within AppProvider');
  }
  return context;
}
