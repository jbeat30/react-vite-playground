import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/home'
import Blog from './pages/blog'
import NotFound from './pages/NotFound.tsx'
import Post from './pages/post'
import PostDetail from './pages/post/Detail'


const routes = [
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

const router = createBrowserRouter(routes);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App