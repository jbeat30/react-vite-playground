import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Blog from './pages/blog'
import NotFound from './pages/NotFound.tsx'
import Post from './pages/post'
import PostDetail from './pages/post/Detail'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/post" element={<Post />} />
        <Route path="/post/:id" element={<PostDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App