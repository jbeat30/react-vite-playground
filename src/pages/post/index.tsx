import useAxios from '../../hooks/useAxios.ts'
import MainLayout from '../../layout/MainLayout.tsx'
import PostList from '../../components/PostList.tsx'
import { postListApi } from '../../api'

export default function Post() {
  const { data, loading, error } = useAxios<PostProps[]>(postListApi)

  return (
    <MainLayout>
      <div className="mx-auto container">
        <h1 className="text-2xl text-blue-400">Post</h1>
        {loading ? (
          <div>로딩 중...</div>
        ) : error ? (
          <div>에러 발생: {error.message}</div>
        ) : (
          <div>
            <h2 className="text-xl font-bold">게시글 목록</h2>
            {data && <PostList data={data} />}
          </div>
        )}
      </div>
    </MainLayout>
  )
}
