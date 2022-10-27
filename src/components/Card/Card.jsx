import propTypes from 'prop-types'

function Card({ article }) {
  return (
    <article className='flex flex-col overflow-hidden rounded-md bg-white shadow-sm'>
      <img src={article.image} alt='article image' className='w-full object-cover' />
      <div className=' flex flex-col p-6'>
        <span className='text-xs uppercase text-gray-500 font-medium'>{article.tags[0]}</span>
        <h2 className='text-lg font-bold leading-6'>{article.title}</h2>
        <p className='mt-2'>{article.preview}</p>
        <div className='flex justify-between items-center mt-6'>
          <img src={article.authorImage} alt='author image' className='w-8 h-8 object-cover rounded-full' />
          <span className='uppercase text-xs text-gray-500 font-medium'>{article.timeRead} min read</span>
        </div>
      </div>
    </article>
  )
}

export default Card

Card.propTypes = {
  article: propTypes.any,
}
