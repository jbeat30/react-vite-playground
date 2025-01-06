import { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'
import { useEffect, useState } from 'react'
import axiosInstance from '../api/instance.ts'

// TODO: DOMException [AbortError]: 에러 처리

/**
 *
 * @param axiosParams
 * @returns
 * @description
 * - Axios 요청을 보내고 응답 데이터를 상태로 관리하는 커스텀 훅
 * - 요청 중일 때 로딩 상태를 true로 설정하고, 요청이 완료되면 false로 설정
 * - 요청이 완료되면 응답 데이터를 response 상태에 저장하고, 데이터만을 data 상태에 저장
 * - 요청이 실패하면 에러를 error 상태에 저장
 * - 컴포넌트가 언마운트되면 요청을 취소하고, 새로운 AbortController 인스턴스를 생성
 */
export function useAxios<T>(axiosParams: AxiosRequestConfig<T>) {
  const [response, setResponse] = useState<AxiosResponse<T> | null>(null) // 응답 데이터 상태 관리
  const [data, setData] = useState<T | null>(null) // 응답 데이터만을 추출하여 상태 관리
  const [error, setError] = useState<AxiosError | null>(null) // 에러 상태 관리
  const [loading, setLoading] = useState<boolean>(true) // 로딩 상태 관리

  useEffect(() => {
    const controller = new AbortController() // 새로운 AbortController 인스턴스 생성

    setLoading(true) // 로딩 상태 초기화

    axiosInstance({ ...axiosParams, signal: controller.signal })
      .then((res) => {
        setResponse(res)
        setData(res.data)
      })
      .catch((err) => {
        if (err.name === 'CanceledError') {
          console.log('요청이 취소되었습니다:: ', err.message)
        } else {
          setError(err)
        }
      })
      .finally(() => {
        setLoading(false)
      })

    return () => {
      controller.abort()
    }
  }, [axiosParams])

  return { response, data, loading, error }
}

export default useAxios
