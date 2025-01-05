import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <header className="bg-gray-200 dark:bg-gray-800 p-4">
      <nav className="container mx-auto">
        <ul className="flex gap-4">
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
              to="/dog"
              className={({ isActive }) => (isActive ? 'text-blue-500 font-bold' : 'text-gray-700 dark:text-gray-300')}
            >
              강아지목록
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}