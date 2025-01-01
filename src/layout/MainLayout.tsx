import { PropsWithChildren } from 'react'
import Header from '../components/Header.tsx'
import Footer from '../components/Footer.tsx'

export default function MainLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto">
        {children}
      </main>
      <Footer />
    </div>
  )
}