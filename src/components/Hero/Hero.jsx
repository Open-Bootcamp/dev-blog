import React from 'react';
import PropTypes from 'prop-types';


const Hero = ({author}) => {

  return (
    <header className='container-custom  sm:h-96 my-6 bg-cover bg-hero-img' >
      <div className='flex flex-col items-center p-16'>
        <div className=''>
          <img className='h-24 w-24 md:h-32 md:w-32 rounded-full object-cover  border-double border-8 shadow-2xl shadows-white' src='../../../src/assets/ob.png' alt=''></img>
        </div>
        <div className='text-white text-2xl md:text-4xl font-bold m-1 text-center'>{author}</div>
        <p className=' text-lg text-white font-light text-center'>Lorem Ipsum is simply dummy </p>
      </div>
    </header>
  );
};


Hero.propTypes = {
  author:PropTypes.string,
};


export default Hero;
