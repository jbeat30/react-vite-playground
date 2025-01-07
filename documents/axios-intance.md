# axios로 비동기 통신하기

이 문서는 `axiox`을 사용해서 비동기 통신을 하는 방법을 설명하고 본인이 사용한 방법 위주로만 작성함

## 1. 패키지 설치

먼저, `axios` 패키지를 설치함

```bash
pnpm add axios
```

## 2. 기본 설명

- **`axios`**: HTTP 클라이언트 라이브러리, Promise 기반, 다양한 HTTP 메서드 지원
- **인스턴스 생성**: `axios.create()`로 기본 설정 가능

### 주요 메서드

1. **`axios.get(url, { params })`**: GET 요청, 쿼리 스트링 추가
2. **`axios.post(url, data, { headers })`**: POST 요청, 본문 및 헤더 추가
3. **`axios.put(url, data, { headers })`**: PUT 요청, 본문 및 헤더 추가
4. **`axios.delete(url, { headers })`**: DELETE 요청, 헤더 추가
5. **`axios.request({ method, url, data, headers })`**: 임의의 HTTP 메서드 사용
6. **`axios.head(url, { headers })`**: HEAD 요청, 헤더 추가
7. **`axios.options(url, { headers })`**: OPTIONS 요청, 헤더 추가
8. **`axios.patch(url, data, { headers })`**: PATCH 요청, 본문 및 헤더 추가


## 3. 일반적인 사용 방법:  [기본예제](https://axios-http.com/kr/docs/example)
```typescript
// GET 요청 예제
axios.get('https://api.example.com/data', {
    params: { id: 123 }
})
.then(response => {
    console.log(response.data);
})
.catch(error => {
    console.error('Error fetching data:', error);
});

// POST 요청 예제
axios.post('https://api.example.com/data', {
    name: 'John',
    age: 30
}, {
    headers: { 'Content-Type': 'application/json' }
})
.then(response => {
    console.log('Data posted:', response.data);
})
.catch(error => {
    console.error('Error posting data:', error);
});
```

## 4. 인스턴스 생성 및 사용
