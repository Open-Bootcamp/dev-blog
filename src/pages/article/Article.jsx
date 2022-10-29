import { Link, useParams } from 'react-router-dom'
import Card from '../../components/Card/Card.jsx'
import MarkdownRenderer from '../../components/MarkdownRenderer/MarkdownRenderer.jsx'
import data from '../../data/data.js'

function Articles() {
  const { articleId } = useParams()

  const article = data.find(_article => _article.id === parseInt(articleId))
  const nextArticle = data.find(
    _article => _article.id === parseInt(articleId) + 1
  )

  return (
    <>
      <main className='mx-auto flex max-w-7xl flex-col items-center'>
        <h1 className='mt-8 p-4 text-center text-3xl font-bold sm:mt-16 sm:px-20 sm:text-5xl md:mt-24 md:px-32 lg:px-40'>
          {article.title}
        </h1>
        <time
          dateTime={article.date.toUTCString()}
          className='text-center text-xs uppercase text-sky-500 sm:mt-4 md:mt-6'
        >
          {article.date.toLocaleDateString('en-US', { dateStyle: 'long' })}
        </time>
        <ul className='mb-8 flex justify-center gap-3 sm:mb-16 md:mb-24'>
          {article.tags.map((tag, index) => (
            <li key={`tag-${index}`}>
              <Link
                to={`/tags/${tag}`}
                className='text-xs uppercase text-sky-500'
              >
                {tag}
              </Link>
            </li>
          ))}
        </ul>
        <img
          src={article.image}
          alt='Article image'
          className='w-full object-cover xl:max-h-[800px]'
        />
        <div className='bg-white p-4 sm:-mt-14 sm:w-10/12 sm:px-10 sm:py-8 md:-mt-24 md:px-16 md:py-10 lg:-mt-32 lg:px-20 lg:py-16'>
          <MarkdownRenderer content={article.content} />
        </div>
      </main>
      <section className='mx-auto flex flex-col p-4 sm:px-10 md:px-20 2xl:px-0 sm:flex-row max-w-7xl flex-wrap gap-8'>
        <h3 className='basis-full font-bold text-lg'>See other articles:</h3>
        <Card article={nextArticle} />
        <Card article={nextArticle} />
      </section>
    </>
  )
}

export default Articles
