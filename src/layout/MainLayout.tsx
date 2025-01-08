import { PropsWithChildren } from 'react'
import Header from '../components/layout/Header.tsx'
import Footer from '../components/layout/Footer.tsx'
import PageTitle from '../components/PageTitle.tsx'

export default function MainLayout({
  children,
  title,
}: {
  children: PropsWithChildren<any>
  title?: string
}) {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
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