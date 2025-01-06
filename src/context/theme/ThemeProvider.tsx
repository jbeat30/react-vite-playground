import { PropsWithChildren, useState } from 'react'
import { ThemeContext } from './ThemeContext.tsx';

export default function ThemeProvider({ children }: PropsWithChildren) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}