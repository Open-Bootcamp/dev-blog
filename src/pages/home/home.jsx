import { useParams } from 'react-router-dom'
import Card from '../../components/Card/Card'
import Footer from '../../components/Footer/Footer'
import Hero from '../../components/Hero/Hero'
import Pagination from '../../components/Pagination/Pagination'
import { author, totalPages, obtainData } from '../../data/data.js'

const Home = () => {
  let { currentPage } = useParams()
  currentPage = parseInt(currentPage) || 1
  const data = obtainData(currentPage)

  return (
    <div className='container-custom mx-auto'>
      <Hero author={`${author[0]}`} isImage={true}/>
      <div className='flex min-h-screen flex-col items-center bg-slate-100 px-4 md:px-10'>
        <main className='flex max-w-5xl flex-col flex-wrap gap-8 mb-8 md:flex-row'>
          {data.map((article, index) => (
            <Card key={`article-${index}`} article={article} hasPrincipal />
          ))}
        </main>
        <Pagination currentPage={currentPage} totalPages={totalPages} />
      </div>
        <Footer />
    </div>
  )
}

export default Home
