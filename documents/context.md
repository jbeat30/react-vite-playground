# 리액트 Context API

이 문서는 `context API`를 사용해서 리액트 전역 상태를 관리하는 방법을 설명함

## 1. Context API란?

Context API는 리액트에서 전역 상태를 관리할 수 있는 방법임. 컴포넌트 트리의 깊은 곳에 있는 컴포넌트도 필요한 데이터를 쉽게 접근할 수 있도록 도와줌

## 2. Context 생성하기

Context를 생성하려면 `createContext` 함수를 사용함. 아래는 기본적인 Context 생성 예시임

```tsx
import { createContext } from 'react';

interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType | null>(null);
```

## 3. Context 제공하기

- Context를 사용할 컴포넌트를 감싸는 `Provider` 컴포넌트를 생성함
- `Provider` 컴포넌트는 `value` 속성을 통해 전달할 데이터를 설정함
- 아래 예시는 `ThemeProvider` 컴포넌트를 생성해서 `ThemeContext`를 제공하는 방법임

```tsx
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
```

## 4. Context 사용하기

`useContext` 훅을 사용해서 Context를 사용할 수 있음

```tsx
import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

export default function ThemeTogglerButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  
  if (!themeContext) {
    return null
  }
  
  return (
    <button onClick={toggleTheme}>
      {theme === 'light' ? 'Dark' : 'Light'} Mode
    </button>
  );
}
```

## 5. ContextProvider 사용하기

만들어둔 `ThemeProvider` 컴포넌트를 사용해서 `ThemeContext`를 제공함

```tsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './App.tsx'
import ThemeProvider from './hooks/contexts/theme/ThemeProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>
)
```
