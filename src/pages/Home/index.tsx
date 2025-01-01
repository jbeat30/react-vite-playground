import MainLayout from '../../layout/MainLayout.tsx'

export default function Home() {
  return (
    <MainLayout>
      <div className="mx-auto container">
        <h1 className="text-2xl text-blue-400">홈</h1>
        <div className="">
          안녕하세요. 이곳은 홈입니다.
        </div>
      </div>
    </MainLayout>
  )
}