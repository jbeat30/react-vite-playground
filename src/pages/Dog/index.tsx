import CardList from '../../components/CardList.tsx'
import MainLayout from '../../layout/MainLayout.tsx'
import useAxios from '../../hooks/useAxios.tsx'
import { dogListApi } from '../../api/dog'

interface DogResponse {
  message: { [key: string]: string[] };
}

export default function DogList() {
  const { response, loading, error } = useAxios<DogResponse>(dogListApi);

  if (loading) {
    return <div>로딩 중...</div>;
  }

  if (error) {
    return <div>에러 발생: {error.message}</div>;
  }

  console.log(response)
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