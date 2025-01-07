import { PropsWithChildren, useContext } from 'react'
import Header from '../components/layout/Header.tsx'
import Footer from '../components/layout/Footer.tsx'
import { ThemeContext } from '../context/theme/ThemeContext.tsx'
import PageTitle from '../components/PageTitle.tsx'

export default function MainLayout({
  children,
  title,
}: {
  children: PropsWithChildren<any>
  title?: string
}) {
  const themeContext = useContext(ThemeContext)

  if (!themeContext) {
    return null
  }

  const { theme, toggleTheme } = themeContext

  return (
    <div
      className={`flex flex-col min-h-screen ${theme === 'dark' ? 'dark' : ''}`}
    >
      <Header />
      <button
        onClick={toggleTheme}
        className="p-2 bg-blue-500 text-white rounded"
      >
        {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
      <main className="flex-grow bg-white dark:bg-gray-800 p-4 text-gray-700 dark:text-gray-300">
        <div className="mx-auto container">
          {title && <PageTitle title={title} />}
          {children}
        </div>
      </main>
      <Footer />
    </div>
  )
}