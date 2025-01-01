# React 타입 정의: PropsWithChildren과 ReactNode

## 선택 기준
- **PropsWithChildren**: 컴포넌트의 props 타입을 정의할 때 children을 포함하고 싶을 때 사용함
- **ReactNode**: 특정 prop이 자식 요소로 어떤 형태의 값을 가질 수 있는지를 정의할 때 사용함

## PropsWithChildren

`PropsWithChildren`은 React에서 컴포넌트의 props에 `children` 속성을 자동으로 추가해줌  
이 타입을 사용하면 함수형 컴포넌트에서 `children`을 포함한 props를 정의할 때, `children` 속성을 명시적으로 선언할 필요가 없음  
즉, `PropsWithChildren`을 사용하면 컴포넌트가 자식 요소를 받을 수 있도록 쉽게 설정할 수 있음  
`children`만 사용하는 컴포넌트는 `MainLayout(): PropsWithChildren` 이런식으로 사용하면 됨

```tsx
import React, { PropsWithChildren } from 'react';

interface MainLayoutProps {
  title: string;
  className?: string;
};

export default function MainLayout({ title, children, className }: PropsWithChildren<MainLayoutProps>) {
  return (
    <div className={className}>
      <h1>{title}</h1>
      {children}
    </div>
  );
}

// 사용 예
<MainLayout title="안녕하세요" className="main-layout">
  <p>자식 요소</p>
</MainLayout>
```

## ReactNode

`ReactNode`는 React에서 렌더링할 수 있는 모든 것을 나타내는 타입임   
이 타입은 문자열, 숫자, JSX 요소, 배열, null 등 다양한 형태의 값을 포함할 수 있음  
`ReactNode`는 주로 props의 타입을 정의할 때 사용되며, 이를 통해 컴포넌트가 다양한 형태의 데이터를 수용할 수 있도록 함

이 두 타입은 React의 타입 시스템에서 중요한 역할을 하며, 각각의 용도에 맞게 사용함으로써 컴포넌트의 props를 보다 유연하고 안전하게 정의할 수 있음

```tsx
import { ReactNode } from 'react';

// Container 컴포넌트 정의
function Container({ children }: { children: ReactNode }) {
  return (
    <div>
      {children}
    </div>
  );
}

// 사용 예
<Container>
  <p>자식 요소</p>
</Container>
```
