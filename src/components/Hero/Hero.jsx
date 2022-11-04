import PropTypes from 'prop-types'
import { useParams } from 'react-router'
import data from '../../data/data'
import ob from '../../../src/assets/ob.png'

const HeroCopy = ({ author, isImage }) => {
  const tagParam = useParams()
  const articleTag = data.filter(
    _articles =>
      _articles.tags.find(_tag => _tag === tagParam.tag) === tagParam.tag
  )
  return isImage !== false ? (
    <header className='my-0 w-full bg-hero-img bg-cover sm:h-96 md:h-[30rem]'>
      <div className='flex flex-col items-center p-16'>
        <img
          className='shadows-white h-24 w-24 rounded-full border-8 border-double  object-cover shadow-2xl md:h-32 md:w-32'
          src={ob}
          alt='OpenBootcamp logo'
        ></img>
        <div className='m-1 text-center text-2xl font-bold text-white md:text-4xl'>
          {author}
        </div>
        <p className=' text-center text-lg font-light text-white'>
          Lorem Ipsum is simply dummy{' '}
        </p>
      </div>
    </header>
  ) : (
    <header className='container-custom  bg-black sm:h-96'>
      <div className='flex flex-col items-center p-16'>
        <img
          className='shadows-white h-24 w-24 rounded-full border-8 border-double  object-cover shadow-2xl md:h-32 md:w-32'
          src='../../../src/assets/ob.png'
          alt=''
        ></img>
        <div className='m-1 text-center text-2xl font-bold text-white md:text-4xl'>{`${tagParam.tag}`}</div>
        <p className=' text-center text-lg font-light text-white'>
          Hay una coleccion de {articleTag.length} articulos
        </p>
      </div>
    </header>
  )
}

HeroCopy.propTypes = {
  author: PropTypes.string,
  isImage: PropTypes.bool,
}

export default HeroCopy
