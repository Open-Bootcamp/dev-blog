import { Link } from 'react-router-dom'
import { social } from '../../data/data'

function Header() {
  return (
    <div className='bg-[#0a0b0c]'>
      <nav className='mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-8 md:justify-start md:gap-8 md:px-10 xl:px-0'>
        <Link to='/' className='text-xl font-bold text-white'>
          DevBlog
        </Link>
        <div className='flex items-center gap-4 text-white md:w-full md:justify-between'>
          <div className='flex gap-4'>
            <Link
              to='/'
              className='text-white opacity-80 transition-opacity duration-200 hover:opacity-100'
            >
              Inicio
            </Link>
            <Link
              to='/about'
              className='text-white opacity-80 transition-opacity duration-200 hover:opacity-100'
            >
              Acerca de
            </Link>
          </div>

          <div className='hidden md:flex md:gap-4'>
            {social.map((item, index) => (
              <a
                href={item.link}
                target='_blank'
                rel='noreferrer'
                key={item.name}
              >
                <img
                  src={item.image}
                  alt={`${item.name} logo`}
                  className='opacity-70 transition-opacity duration-200 hover:opacity-100'
                />
              </a>
            ))}
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header
