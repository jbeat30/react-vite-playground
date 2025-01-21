import { PropsWithChildren, useEffect, useState } from 'react'
import { ThemeContext } from './ThemeContext.tsx';
import { initialTheme } from '../../utils/default.ts'

export default function ThemeProvider({ children }: PropsWithChildren) {
  const [theme, setTheme] = useState<string>(initialTheme());

  const toggleTheme = ()  => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  };

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.className = theme;
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}