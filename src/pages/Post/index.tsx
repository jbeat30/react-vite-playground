import useAxios from '../../hooks/useAxios.ts'
import MainLayout from '../../layout/MainLayout.tsx'
import PostList from '../../components/PostList.tsx'
import { postListApi } from '../../api'

// TODO: 변수가 아닌 객체로 전달 시 에러 발생 (useAxios<PostProps[]>(postListApi))

export default function Post() {
  const { data, loading, error } = useAxios<PostProps[]>(postListApi)

  console.log(data)
  return (
    <MainLayout>
      <div className="mx-auto container">
        <h1 className="text-2xl text-blue-400">Post</h1>
        <p className="text-lg">This is the post page</p>
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
