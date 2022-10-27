import Card from '../../components/Card/Card'
import data from '../../data/data.js'

const Home = () => {
  return (
    <div className='flex h-screen flex-col items-center bg-slate-100 px-4 md:px-10'>
      <h2>Soy la home</h2>
      <main className='flex max-w-5xl flex-col flex-wrap gap-8 md:flex-row'>
        {data.map((article, index) => (
          <Card key={`article-${index}`} article={article} />
        ))}
      </main>
    </div>
  )
}

export default Home
