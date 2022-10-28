import Card from '../../components/Card/Card'
import Hero from '../../components/Hero/Hero'
import data, {author} from '../../data/data.js'

const Home = () => {
  return (
    <div className='container mx-auto'>
      <Hero author={`${author}`} />
      <div className='flex h-screen flex-col items-center bg-slate-100 px-4 md:px-10'>
        <main className='flex max-w-5xl flex-col flex-wrap gap-8 md:flex-row'>
          {data.map((article, index) => (
            <Card key={`article-${index}`} article={article} />
          ))}
        </main>
      </div>
    </div>
  )
}

export default Home
