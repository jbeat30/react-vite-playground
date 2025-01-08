import { PropsWithChildren, useEffect, useState } from 'react'
import { ThemeContext } from './ThemeContext.tsx';

export default function ThemeProvider({ children }: PropsWithChildren) {
  const [theme, setTheme] = useState<string>(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      document.documentElement.setAttribute('data-theme', savedTheme);
      document.documentElement.className = savedTheme;
      return savedTheme;
    }
    return 'light'; // 기본 테마 설정
  });

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