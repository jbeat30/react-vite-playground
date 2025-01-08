# axios로 비동기 통신하기

`axiox`는 HTTP 클라이언트 라이브러리로, Promise 기반의 API를 제공함  
브라우저와 Node.js 환경에서 모두 사용 가능하며, 다양한 HTTP 메서드를 지원함. 또한,   
`JSON자동변환` / `자동문자열 변환` / `CSRF 보호 기능` 등을 제공한다.

## 1. 패키지 설치

먼저, `axios` 패키지를 설치함

```bash
pnpm add axios
```
---
## 2. 주요 메서드 및 기능
[config 객체](https://axios-http.com/docs/req_config)
1. **`axios.get(url,[...config])`**: GET 요청
2. **`axios.post(url,[data, ...config])`**: POST 요청
3. **`axios.put(url,[data, ...config])`**: PUT 요청
4. **`axios.delete(url,[...config])`**: DELETE 요청 
5. **`axios.patch(url,[data, ...config])`**: PATCH 요청
---

## 3. 일반적인 사용 방법
[기본예제](https://axios-http.com/kr/docs/example)
```typescript
// GET 요청 예제
try {
    const response = await axios.get('https://api.example.com/data');
    console.log(response.data);
} catch (error) {
    console.error('데이터를 가져오는 중 오류가 발생했습니다:', error);
}

// POST 요청 예제
try {
    const response = await axios.post('https://api.example.com/data', {
        name: 'John',
        age: 30
    });
    console.log('게시된 데이터:', response.data);
} catch (error) {
    console.error('데이터 게시 중 오류 :', error);
}
```
---
## 4. 인스턴스 생성 및 사용 ⭐
사용자 구성으로 인스턴스를 만들어 사용 가능  
[인스턴스 생성](https://axios-http.com/docs/instance)
```typescript
const instance:AxiosInstance = axios.create({
    baseURL: 'https://api.example.com', // 기본 URL 설정
    timeout: 1000, // 요청 시간 초과 시간
    headers: { 'X-Custom-Header': 'foobar' } // 기본 헤더 설정
});

// 인스턴스로 GET 요청
try {
    const response = await instance.get('/data');
    console.log(response.data);
} catch (error) {
    console.error('데이터를 가져오는 중 오류가 발생했습니다:', error);
}

// 인스턴스로 POST 요청
try {
    const response = await instance.post('/data', {
        name: 'John',
        age: 30
    });
    console.log('게시된 데이터:', response.data);
} catch (error) {
    console.error('데이터 게시 중 오류 :', error);
}
```
   
### 4.1 객체 참조 주의🔥
> 객체로 Axios 요청을 넘길 수 있지만, 파라미터로 직접 넘기면 메모리 참조로 인해 객체가 변경될 수 있음   
따라서 객체를 복사해서 넘기는 것이 좋고 그렇지 않으면 무한 리렌더링이 발생할 수 있음
```typescript
// ✅ 사이드이펙트를 방지하기 위해 객체를 복사해서 넘김
const getPostApi = {
  method: 'post',
  url: '/data',
}
await instance(getPostApi);
// ❌
await instance({
  method: 'post',
  url: '/data',
});
```

### 4.2 동적 API 호출을 위한 함수 사용
```typescript
// 함수로 넘겨서 사용 가능 
export const getPostDetailApi = (postId: string): AxiosRequestConfig => ({
  method: 'GET',
  url: `posts/${postId}`,
})
const response = await instance(postDetailApi('1'));
```

### 4.3 인터셉터 활용
인터셉터를 사용하여 요청과 응답을 가로채어 처리할 수 있음  
[인터셉터](https://axios-http.com/docs/interceptors)
```typescript
// 요청 인터셉터
instance.interceptors.request.use((config:InternalAxiosRequestConfig) => {
    // 요청 전 처리  
    console.log('전송된 요청:', config.method, config.url) // 요청 메서드와 URL 출력
    return config;
}, (error) => {
    // 요청 오류 처리
    console.error('요청 인터셉터 오류:', error)
    return Promise.reject(error);
});

// 응답 인터셉터
instance.interceptors.response.use((response:AxiosResponse) => {
    // 응답 데이터 처리
    console.log('응답 데이터:', response.data);
    return response;
}, (error) => {
    // 응답 오류 처리
    console.error('응답 인터셉터 오류:', error);
    return Promise.reject(error);
});
```

### 4.4 커스텀 훅 사용
`<T>` 제네릭을 사용하여 응답 데이터 타입을 지정할 수 있음
이때 reponse에 data가 제네릭 타입으로 들어가게 되므로, data를 따로 추출하여 상태로 관리할 수 있음   

```typescript
import { useEffect, useState } from 'react'
import { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'
import instance from '../api/instance.ts'

export const useAxios = <T>(axiosConfig: AxiosRequestConfig<T>) => {
  const [response, setResponse] = useState<AxiosResponse<T> | null>(null) // 응답 데이터 상태 관리
  const [data, setData] = useState<T | null>(null); // 응답 데이터만을 추출하여 상태 관리
  const [error, setError] = useState<AxiosError | null>(null) // 에러 상These태 관리
  const [loading, setLoading] = useState<boolean>(true) // 로딩 상태 관리

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await instance({ ...axiosConfig });
        setResponse(response);
        setData(response.data);
      } catch (error) {
        setError(error as AxiosError);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

  }, [instance]);

  return { response, data, loading, error };
};

  
// 사용 예제
interface Post {
  id: number;
  title: string;
  body: string;
}
const getPostApi = {
  method: 'GET',
  url: '/posts',
}
const { response, data, loading, error } = useAxios<Post[]>(getPostApi);
```