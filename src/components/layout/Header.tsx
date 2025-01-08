import { NavLink } from 'react-router-dom'
import ThemeToggleButton from '../ThemeToggleButton.tsx'

export default function Header() {
  return (
    <header className="bg-gray-200 dark:bg-slate-700 p-4">
      <div className="mx-auto container flex justify-between">
      <nav>
        <ul className="flex flex-wrap items-center text-base justify-center gap-4">
          <li className="">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? 'text-blue-500 font-bold' : 'text-gray-700 dark:text-gray-300')}
            >
              홈
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              className={({ isActive }) => (isActive ? 'text-blue-500 font-bold' : 'text-gray-700 dark:text-gray-300')}
            >
              블로그
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/post"
              className={({ isActive }) => (isActive ? 'text-blue-500 font-bold' : 'text-gray-700 dark:text-gray-300')}
            >
              게시글 목록
            </NavLink>
          </li>
        </ul>
      </nav>
      <ThemeToggleButton />
      </div>
    </header>
  )
}