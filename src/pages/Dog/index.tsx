import CardList from '../../components/CardList.tsx'
import MainLayout from '../../layout/MainLayout.tsx'

export default function DogList() {
  return (
    <MainLayout>
      <div className="mx-auto container">
        <h1 className="text-2xl text-blue-400">Dog</h1>
        <p className="text-lg">This is the dog page.</p>
        <CardList />
      </div>
    </MainLayout>
  )
}