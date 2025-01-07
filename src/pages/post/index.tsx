import useAxios from '../../hooks/useAxios.ts'
import MainLayout from '../../layout/MainLayout.tsx'
import PostList from '../../components/PostList.tsx'
import { postListApi } from '../../api'
import Spinner from '../../components/Spinner.tsx'

export default function Post() {
  const { data, loading, error } = useAxios<PostProps[]>(postListApi)

  return (
    <MainLayout title={'Post List'}>
      {loading ? (
        <Spinner/>
      ) : error ? (
        <div>에러 발생: {error.message}</div>
      ) : (
        <div className="-mx-4 my-2 flex flex-wrap">
          {data && <PostList data={data} />}
        </div>
      )}
    </MainLayout>
  )
}