export default function PostList({ data }: { data: PostProps[] }) {
  return (
    <div>
      <h1>게시글 목록</h1>
      <ul>
        {data.map((post) => {
          // 일단 10개만 보여주기
          if (post.id > 10) return null

          const { id, title } = post
          const PostItem = () => (
            <li key={id}>
              <strong>{title}</strong>
              <em>게시글 번호: {post.id}</em>
            </li>
          )

          return <PostItem key={id} />
        })}
      </ul>
    </div>
  )
}
