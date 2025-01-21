import { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'
import { useEffect, useState } from 'react'
import instance from '../api/instance.ts'

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
export const useAxios = <T>(axiosConfig: AxiosRequestConfig<T>) => {
  const [response, setResponse] = useState<AxiosResponse<T> | null>(null) // 응답 데이터 상태 관리
  const [data, setData] = useState<T | null>(null); // 응답 데이터만을 추출하여 상태 관리
  const [error, setError] = useState<AxiosError | null>(null) // 에러 상These태 관리
  const [loading, setLoading] = useState<boolean>(true) // 로딩 상태 관리

  useEffect(() => {
    const controller = new AbortController()

    const fetchData = async () => {
      try {
        setLoading(true) // 로딩 상태 초기화
        const res = await instance({ ...axiosConfig, signal: controller.signal })
        setResponse(res)
        setData(res.data)
      } catch (error) {
        const err = error as AxiosError
        if (err.name === 'CanceledError') {
          console.log('요청이 취소되었습니다:: ', err.message)
        } else {
          setError(err)
        }
      } finally {
        setLoading(false)
      }
    }

    fetchData()

    return () => {
      // 요청이 완료된 경우에만 요청 취소
      if (data !== null && !loading) {
        controller.abort()
      }
    }
  }, [axiosConfig.method, axiosConfig.url])

  return { response, data, loading, error }
}

export default useAxios