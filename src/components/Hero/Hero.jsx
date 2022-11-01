
import PropTypes from 'prop-types';
import { useParams } from 'react-router';
import data from '../../data/data';


const HeroCopy = ({author, isImage}) => {

  const tagParam = useParams();
  const articleTag = data.filter(_articles => (_articles.tags.find(_tag => _tag ===tagParam.tag)) === tagParam.tag)
   return (

       ((isImage !== false
        ?
       (
        <header className='container-custom my-0 sm:h-96  bg-cover bg-hero-img' >
        <div className='flex flex-col items-center p-16'>

          <img className='h-24 w-24 md:h-32 md:w-32 rounded-full object-cover  border-double border-8 shadow-2xl shadows-white' src='../../../src/assets/ob.png' alt=''></img>
          <div className='text-white text-2xl md:text-4xl font-bold m-1 text-center'>{author}</div>
          <p className=' text-lg text-white font-light text-center'>Lorem Ipsum is simply dummy </p>
        </div>
        </header>
       )
       :
        (
          <header className='container-custom  sm:h-96 bg-black' >
            <div className='flex flex-col items-center p-16'>
              <img className='h-24 w-24 md:h-32 md:w-32 rounded-full object-cover  border-double border-8 shadow-2xl shadows-white' src='../../../src/assets/ob.png' alt=''></img>
              <div className='text-white text-2xl md:text-4xl font-bold m-1 text-center'>{`${tagParam.tag}`}</div>
              <p className=' text-lg text-white font-light text-center'>Hay una coleccion de {articleTag.length} articulos</p>
            </div>
          </header>
        )

        )  )
  );
};


HeroCopy.propTypes = {
  author:PropTypes.string,
  isImage:PropTypes.bool,

};


export default HeroCopy;
