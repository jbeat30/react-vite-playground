# 리액트 라우팅 설정 방법

이 문서는 `react-router-dom`을 사용해서 리액트에서 라우팅을 설정하는 방법을 설명함

## 1. 패키지 설치

먼저, `react-router-dom` 패키지를 설치함

```bash
pnpm add react-router-dom
pnpm add @types/react-router-dom -D
```

## 2. 기본 설명

리액트 라우팅을 설정하기 위해 사용되는 주요 컴포넌트는 다음과 같음

1. **`BrowserRouter`**
    - HTML5의 [History API](https://developer.mozilla.org/en-US/docs/Web/API/History_API)를 사용해서 URL을 관리하는 라우터임
    - 애플리케이션의 최상위 컴포넌트로 사용되며, 내부에 다른 라우팅 컴포넌트를 포함해야 함

2. **`Routes`**
    - 여러 개의 `Route`를 그룹화해서 관리하는 컴포넌트임
    - `Routes` 컴포넌트는 자식으로 `Route` 컴포넌트를 포함해서 각 경로에 대한 매핑을 정의함

3. **`Route`**
    - 특정 경로와 해당 경로에 렌더링할 컴포넌트를 정의하는 컴포넌트임
    - `path` 속성으로 경로를 지정하고, `element` 속성으로 렌더링할 컴포넌트를 설정함

4. **`Link`**
    - 애플리케이션 내에서 다른 경로로 이동할 수 있는 링크를 생성하는 컴포넌트임
    - HTML의 `<a>` 태그와 유사하지만, 페이지를 새로 고침하지 않고도 경로를 변경할 수 있음

5. **`NavLink`**
    - `Link`와 유사하지만, 현재 경로와 일치하는 경우 스타일을 적용할 수 있는 추가 기능을 제공함
    - 주로 내비게이션 메뉴에서 활성 링크를 강조하는 데 사용됨 -[문서](https://reactrouter.com/start/library/navigating#navlink)-

## 3. 페이지 연결 설정

`BrowserRouter`, `Routes`, `Route` 컴포넌트를 사용함
```tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
```

## 4. 페이지 라우팅 링크 설정

React Router를 사용해서 애플리케이션 내에서 페이지 간의 네비게이션을 설정할 수 있음. `NavLink` 컴포넌트를 사용하면 사용자가 현재 위치한 페이지를 쉽게 식별할 수 있도록 스타일을 적용할 수 있음

### 코드 설명

- **NavLink**: 이 컴포넌트는 링크를 생성하며, 현재 경로와 비교해서 활성화된 링크에 스타일을 적용함
- **to**: 링크가 이동할 경로를 지정함
- **className**: `isActive` 속성을 사용해서 현재 링크가 활성화된 경우와 그렇지 않은 경우에 따라 다른 클래스를 적용함
```tsx
import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <header className="bg-gray-200 p-4">
      <nav className="container mx-auto">
        <ul className="flex">
          <li className="mr-4">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? 'text-blue-500 font-bold' : 'text-gray-700')}
            >
              홈
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              className={({ isActive }) => (isActive ? 'text-blue-500 font-bold' : 'text-gray-700')}
            >
              블로그
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
} 
```