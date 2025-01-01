import { PropsWithChildren, useContext } from 'react'
import Header from '../components/Header.tsx'
import Footer from '../components/Footer.tsx'
import { ThemeContext } from '../hooks/contexts/theme/ThemeContext.tsx'

export default function MainLayout({ children }: PropsWithChildren) {
  const themeContext = useContext(ThemeContext)

  if (!themeContext) {
    return null
  }

  const { theme, toggleTheme } = themeContext

  return (
    <div
      className={`flex flex-col min-h-screen ${theme === 'dark' ? 'dark' : ''}`}>
      <Header />
      <button onClick={toggleTheme} className="p-2 bg-blue-500 text-white rounded">
        Toggle Theme
      </button>
      <main className="flex-grow bg-white dark:bg-gray-800 p-4 text-gray-700 dark:text-gray-300">
        {children}
      </main>
      <Footer />
    </div>
  )
}