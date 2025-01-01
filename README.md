# React + TypeScript + Vite

이 템플릿은 Vite에서 HMR(핫 모듈 교체)과 일부 ESLint 규칙을 사용하여 React를 작동시키기 위한 최소한의 설정을 제공합니다.

현재 두 가지 공식 플러그인이 제공됩니다:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md)는 [Babel](https://babeljs.io/)을 사용하여 빠른 새로 고침(Fast Refresh)을 지원합니다.
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc)는 [SWC](https://swc.rs/)를 사용하여 빠른 새로 고침(Fast Refresh)을 지원합니다.

## ESLint 구성 확장하기

프로덕션 애플리케이션을 개발하는 경우, 타입 인식 린트 규칙을 활성화하기 위해 구성을 업데이트하는 것을 권장합니다:

- 최상위 `parserOptions` 속성을 다음과 같이 구성합니다:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- `tseslint.configs.recommended`를 `tseslint.configs.recommendedTypeChecked` 또는 `tseslint.configs.strictTypeChecked`로 교체합니다.
- 선택적으로 `...tseslint.configs.stylisticTypeChecked`를 추가합니다.
- [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react)를 설치하고 구성을 업데이트합니다:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
