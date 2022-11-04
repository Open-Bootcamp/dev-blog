import propTypes from 'prop-types'
import { Link } from 'react-router-dom'

function Card({ article, hasPrincipal }) {
  return (
    <article
      className={`${
        hasPrincipal && 'md:first:basis-full md:first:flex-row'
      } flex flex-1 flex-col overflow-hidden rounded-md bg-white shadow-sm transition-transform hover:scale-105 md:basis-72`}
    >
      <Link to={`/article/${article.id}`} className='flex flex-[2]'>
        <img
          src={article.image}
          alt='article image'
          className='w-full object-cover'
        />
      </Link>
      <div className='flex flex-1 flex-col p-6'>
        <Link to={`/article/${article.id}`}>
          <span className='text-xs font-medium uppercase text-gray-500'>
            {article.tags[0]}
          </span>
          <h2 className='text-lg font-bold leading-6'>{article.title}</h2>
          <p className='mt-2'>{article.preview}</p>
        </Link>
        <div className='mt-6 flex flex-1 items-end justify-between'>
          <img
            src={article.authorImage}
            alt='author image'
            className='h-8 w-8 rounded-full object-cover'
          />
          <span className='text-xs font-medium uppercase text-gray-500'>
            {article.timeRead} min read
          </span>
        </div>
      </div>
    </article>
  )
}

export default Card

Card.propTypes = {
  article: propTypes.any,
  hasPrincipal: propTypes.bool,
}
