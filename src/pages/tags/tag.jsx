import { useParams } from 'react-router'
import Hero from '../../components/Hero/Hero'
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
    <>
      <Hero isImage={false} />
      <div className='mx-auto mt-8 flex min-h-screen max-w-6xl flex-col items-center px-4 md:px-10 lg:-mt-12'>
        <main className='mb-8 flex max-w-6xl flex-col flex-wrap gap-8 md:flex-row'>
          {articleTag.map((_articleTag, index) => (
            <Card key={`article-${index}`} article={_articleTag} />
          ))}
        </main>
      </div>
    </>
  )
}

export default Tag
