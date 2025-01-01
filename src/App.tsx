import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Blog from './pages/Blog'
import NotFound from './pages/NotFound.tsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
