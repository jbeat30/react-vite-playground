import { useParams } from 'react-router-dom'
import useAxios from '../../../hooks/useAxios.ts'
import { postDetailApi } from '../../../api'
import MainLayout from '../../../layout/MainLayout.tsx'
import Spinner from '../../../components/Spinner.tsx'

export default function PostDetail() {
  const { id } = useParams()
  console.log(id)
  const { data, loading, error } = useAxios<PostProps>(postDetailApi(id!))

  console.log(data)
  console.log(loading)
  console.log(error)
  return (
    <MainLayout title={'Post Detail'}>
      {loading ? (
        <Spinner/>
      ) : error ? (
        <div>에러 발생: {error.message}</div>
      ) : (
        <div className="-mx-4 my-2 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
              <span className="mb-2 block text-lg font-semibold text-primary">
                <strong>post id: {data?.id}</strong>,&nbsp;
                <span>user id: {data?.userId}</span>
              </span>
              <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px]">
                {data?.title}
              </h2>
              <p className="text-base text-body-color dark:text-dark-6">
                {data?.body}
              </p>
            </div>
          </div>
        </div>
      )}
    </MainLayout>
  )
}
