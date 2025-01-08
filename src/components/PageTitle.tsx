export default function PageTitle({ title }: { title: string }) {
  return (
    <section className="bg-white py-[20px] dark:bg-slate-800">
      <div className="border-b border-stroke dark:border-dark-3">
        <h2 className="mb-2 text-2xl font-semibold text-dark dark:text-white">
          {title}
        </h2>
      </div>
    </section>
  )
}