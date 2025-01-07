import ListItem from './ListItem.tsx'

export default function PostList({ data }: { data: PostProps[] }) {
  return (
    <div className="w-full">
      <ul className="space-y-3">
        {data.map((post) => {
          // 일단 10개만 보여주기
          if (post.id > 10) return null

          const { id, title } = post

          return <ListItem key={id} postId={id} text={title} />
        })}
      </ul>
    </div>
  )
}