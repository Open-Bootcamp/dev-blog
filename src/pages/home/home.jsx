import { Navigate, useParams } from 'react-router-dom'
import Card from '../../components/Card/Card'
import Hero from '../../components/Hero/Hero'
import Pagination from '../../components/Pagination/Pagination'
import { author, totalPages, obtainData } from '../../data/data.js'

const Home = () => {
  let { currentPage } = useParams()
  currentPage = parseInt(currentPage) || 1
  const data = obtainData(currentPage)

  if (data.length === 0) return <Navigate to='/' />

  return (
    <div className='mx-auto w-full flex-1'>
      <Hero author={`${author[0]}`} isImage />
      <div className='mx-auto mt-8 flex max-w-6xl flex-col items-center px-4 md:px-10 lg:-mt-12'>
        <main className='mb-8 flex max-w-6xl flex-col flex-wrap gap-8 md:flex-row'>
          {data.map((article, index) => (
            <Card key={`article-${index}`} article={article} hasPrincipal />
          ))}
        </main>
        <Pagination currentPage={currentPage} totalPages={totalPages} />
      </div>
    </div>
  )
}

export default Home
