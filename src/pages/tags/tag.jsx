import { useParams } from 'react-router'
import Hero from '../../components/Hero/Hero'
import Footer from '../../components/Footer/Footer'
import Card from '../../components/Card/Card'
import data from '../../data/data'



const Tag = () => {
  const tagParams = useParams()
  console.log(tagParams)
  const articleTag = data.filter(
    _articles =>
      _articles.tags.find(_tag => _tag === tagParams.tag) === tagParams.tag
  )

  return (
    <div className='container-custom mx-auto'>
      <Hero author={''} isImage={false} />
      <div className='flex min-h-screen flex-col items-center bg-slate-100 px-4 md:px-10'>
        <main className='mb-8 flex max-w-5xl flex-col flex-wrap gap-8 md:flex-row'>
          {articleTag.map((_articleTag, index) => (
            <Card key={`article-${index}`} article={_articleTag} />
          ))}
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default Tag
