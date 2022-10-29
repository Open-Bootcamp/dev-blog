import React from 'react'
import PropTypes from 'prop-types'
import { author } from '../../data/data.js'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className='container-custom'>
      <div
        className='
        sd:item-center m-1 flex flex-col
        items-center bg-black p-6
        text-xs text-white
        md:flex md:flex-row justify-between'
      >
       {/* author list */}
        <p className='text-center'>{`by ${author[0]}, ${author[1]}, ${author[2]}, ${author[3]} `} &copy; {`${year}`}</p>
        {/*social media links */}
        <div>
          <ul className='my-1 flex flex-row  justify-center items-center'>
            <li className='mx-1 hover:text-openbootcamp-green'>
              <a href='https://twitter.com/Open_Bootcamp' alt='Twitter'>
                Twitter
              </a>
            </li>
            <li className='mx-1 hover:text-openbootcamp-green'>
              <a
                href='https://github.com/Open-Bootcamp'
                alt='Facebook'
              >
                Github
              </a>
            </li>
              <li className='mx-1 hover:text-openbootcamp-green'>
              <a href='https://www.linkedin.com/school/openbootcamp-escuela/' alt='tiktok'>
                linkedin
              </a>
            </li>
            <li className='mx-1 hover:text-openbootcamp-green'>
              <a href='https://www.twitch.tv/openbootcamp' alt='Twitch'>
                Twitch
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
export default Footer
