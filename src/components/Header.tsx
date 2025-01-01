import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <header className="bg-gray-200 p-4">
      <nav className="container mx-auto">
        <ul className="flex">
          <li className="mr-4">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? 'text-blue-500 font-bold' : 'text-gray-700')}
            >
              홈
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              className={({ isActive }) => (isActive ? 'text-blue-500 font-bold' : 'text-gray-700')}
            >
              블로그
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}