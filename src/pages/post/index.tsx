import useAxios from '../../hooks/useAxios.ts'
import MainLayout from '../../layout/MainLayout.tsx'
import PostList from '../../components/PostList.tsx'
import { postListApi } from '../../api'

export default function Post() {
  const { data, loading, error } = useAxios<PostProps[]>(postListApi)

  return (
    <MainLayout title={'Post List'}>
      {loading ? (
        <div>로딩 중...</div>
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
