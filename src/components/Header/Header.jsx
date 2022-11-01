import { Link } from 'react-router-dom'
import twitter from '../../assets/twitter.svg'
import github from '../../assets/github.svg'
import twitch from '../../assets/twitch.svg'
import youtube from '../../assets/youtube.svg'
import linkedin from '../../assets/linkedin.svg'

function Header() {
  return (
    <div className='bg-[#0a0b0c]'>
      <nav className='mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-8 md:justify-start md:gap-8 md:px-10'>
        <Link to='/' className='text-xl font-bold text-slate-100'>
          DevBlog
        </Link>
        <div className='flex items-center gap-4 text-slate-200 md:w-full md:justify-between'>
          <div className='flex gap-4'>
            <Link to='/'>Home</Link>
            <Link to='/about'>About us</Link>
          </div>

          <div className='hidden md:flex md:gap-4'>
            <a
              href='https://twitter.com/Open_Bootcamp'
              target='_blank'
              rel='noreferrer'
            >
              <img
                src={twitter}
                alt='twitter logo'
                className='opacity-70 hover:opacity-100'
              />
            </a>

            <a
              href='https://github.com/Open-Bootcamp'
              target='_blank'
              rel='noreferrer'
            >
              <img
                src={github}
                alt='github logo'
                className='opacity-70 hover:opacity-100'
              />
            </a>

            <a
              href='https://www.twitch.tv/openbootcamp'
              target='_blank'
              rel='noreferrer'
            >
              <img
                src={twitch}
                alt='twitch logo'
                className='opacity-70 hover:opacity-100'
              />
            </a>

            <a
              href='https://www.youtube.com/c/OpenBootcamp'
              target='_blank'
              rel='noreferrer'
            >
              <img
                src={youtube}
                alt='youtube logo'
                className='opacity-70 hover:opacity-100'
              />
            </a>

            <a
              href='https://www.linkedin.com/school/openbootcamp-escuela/'
              target='_blank'
              rel='noreferrer'
            >
              <img
                src={linkedin}
                alt='linkedin logo'
                className='opacity-70 hover:opacity-100'
              />
            </a>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header
