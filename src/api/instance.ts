import axios, { AxiosResponse, InternalAxiosRequestConfig } from 'axios'

/**
 * Axios 인스턴스 생성
 * - 기본 URL, 타임아웃 등의 설정을 재사용할 수 있는 Axios 인스턴스
 * - 요청과 응답에 대한 인터셉터를 설정하여 로깅 및 에러 처리를 통일화 가능
 * @module axiosInstance
 * @description
 */
const axiosInstance = axios.create({
  baseURL: 'https://dog.ceo/api/',
  timeout: 1000, // 요청 타임아웃 설정 (1초)
});

/**
 * 이 인터셉터는 요청이 전송되기 전에 호출되며, 요청의 메서드와 URL을 콘솔에 출력
 * @param {InternalAxiosRequestConfig} config - 요청 설정
 * @returns {InternalAxiosRequestConfig} - 수정된 요청 설정
 * @throws {Promise} - 요청 오류 발생 시
 */
axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    console.log('전송된 요청:', config.method, config.url) // 요청 메서드와 URL 출력
    return config; // 요청 설정을 그대로 반환
  },
  (error) => {
    console.error('요청 인터셉터 오류:', error) // 요청 오류 로그 출력
    return Promise.reject(error); // 오류를 다음 인터셉터로 전달
  }
)

/**
 * 이 인터셉터는 응답이 수신된 후 호출되며, 응답의 상태와 상태 텍스트를 콘솔에 출력
 * @param {AxiosResponse} response - 응답 데이터
 * @returns {AxiosResponse} - 수정된 응답 데이터
 * @throws {Promise} - 응답 오류 발생 시
 */
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    console.log('수신된 응답:', response.status, response.statusText) // 응답 상태와 상태 텍스트 출력
    return response; // 응답 데이터를 그대로 반환
  },
  (error) => {
    console.error('응답 인터셉터 오류:', error) // 응답 오류 로그 출력
    return Promise.reject(error); // 오류를 다음 인터셉터로 전달
  }
)

export default axiosInstance;