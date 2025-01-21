import Home from '../pages/home'
import Blog from '../pages/blog'
import Post from '../pages/post'
import PostDetail from '../pages/post/Detail'
import NotFound from '../pages/NotFound.tsx'

export const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/blog',
    element: <Blog />,
  },
  {
    path: '/post',
    element: <Post />,
  },
  {
    path: '/post/:id',
    element: <PostDetail />,
  },
  {
    path: '*',
    element: <NotFound />,
  }
]