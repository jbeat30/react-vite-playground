# React 프로젝트의 폴더 구조

이 문서는 Vite를 빌드 도구로 사용하는 React 프로젝트의 폴더 구조를 설명하기위해 작성하였으며,  
주요 소스 폴더는 `src`이며, 다음과 같은 하위 폴더가 포함되어 있습니다.

## src
```markdown
src
├── api
├── assets
├── components
├── features
├── hooks
├── layout
├── pages
├── styles
├── types
└── utils
```


- **api**:  
  API 요청, 응답 및 오류 처리를 다루는 파일이 위치하는 폴더
    ```markdown
    api
    ├── apiClient.ts
    ├── userApi.ts
    └── authApi.ts
    ```

- **assets**:  
  컴파일 시 필요한 이미지, 폰트 및 기타 리소스를 포함하며, 컴포넌트 내부에서 사용됨  
  퍼블릭 폴더는 빌드 시 그대로 복사되어 정적 파일로 제공되는 반면, 에셋 폴더는 파일을 **import하여** 사용하며, 빌드 과정에서 최적화나 번들링이 이루어짐
    ```markdown
    assets
    ├── images
    │   ├── logo.png
    │   └── background.jpg
    └── fonts
        └── custom-font.woff2
    ```

- **components**:  
  재사용할 수 있는 React 컴포넌트가 위치하는 폴더
    ```markdown
    components
    ├── Button.tsx
    ├── Card.tsx
    └── Modal.tsx
    ```

- **context**:  
  React 컨텍스트 파일이 위치하는 폴더
    ```markdown
    context
    └── theme
        ├── ThemeContext.tsx
        └── ThemeProvider.tsx
    ```

- **features**:  
  특정 기능에 대한 컴포넌트와 로직을 포함하는 폴더
  ```markdown
  features
  ├── auth
  │   ├── LoginForm.tsx
  │   └── RegisterForm.tsx
  └── dashboard
      ├── Dashboard.tsx
      └── StatsCard.tsx
  ```

- **hooks**:  
  커스텀 훅 함수가 위치하는 폴더
    ```markdown
    hooks
    ├── useFetch.ts
    └── useLocalStorage.ts
    ```
- **layout**:  
  레이아웃 파일이 위치하는 폴더
    ```markdown
    layout
    ├── MainLayout.tsx
    └── AuthLayout.tsx
    ```

- **pages**:  
  라우팅을 적용할 페이지가 위치하는 폴더
    ```markdown
    pages
    ├── HomePage.tsx
    ├── NotFoundPage.tsx
    └── ProfilePage.tsx
    ```

- **styles**:  
  스타일 파일이 위치하는 폴더
    ```markdown
    styles
    ├── main.css
    └── variables.css
    ```

- **types**:  
  타입 파일이 위치하는 폴더
    ```markdown
    types
    ├── userTypes.ts
    ├── postTypes.ts
    └── apiTypes.ts
    ```

- **utils**:  
  정규 표현식, 공통 함수, 공통 상수들이 위치하는 폴더
    ```markdown
    utils
    ├── helpers.ts
    └── formatDate.ts
    ```