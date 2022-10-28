import { Link, NavLink } from 'react-router-dom'
import propTypes from 'prop-types'

function Pagination({ currentPage = 1, totalPages }) {
  let pageNumbers

  if (currentPage === 1) {
    pageNumbers = [1, 2, 3]
  } else if (currentPage === totalPages) {
    pageNumbers = [totalPages - 2, totalPages - 1, totalPages]
  } else {
    pageNumbers = [currentPage - 1, currentPage, currentPage + 1]
  }

  const handleClick = () => {
    window.scrollTo({
      behavior: 'smooth',
      top: 0,
      left: 0,
    })
  }

  return (
    <nav className='flex gap-4'>
      {currentPage !== 1 && (
        <Link
          to='/'
          className='flex h-10 w-10 items-center justify-center rounded-md border border-slate-300'
          onClick={handleClick}
        >
          {'<<'}
        </Link>
      )}
      {pageNumbers.map((page, index) => (
        <NavLink
          key={`nav-${index}`}
          to={`/${page}`}
          end
          className={({ isActive }) =>
            isActive
              ? 'flex h-10 w-10 items-center justify-center rounded-md border border-slate-300 shadow-[inset_3px_0px]'
              : 'flex h-10 w-10 items-center justify-center rounded-md border border-slate-300'
          }
          onClick={handleClick}
        >
          {page}
        </NavLink>
      ))}
      {currentPage !== totalPages && (
        <Link
          to={`/${totalPages}`}
          className='flex h-10 w-10 items-center justify-center rounded-md border border-slate-300'
          onClick={handleClick}
        >
          {'>>'}
        </Link>
      )}
    </nav>
  )
}

export default Pagination

Pagination.propTypes = {
  currentPage: propTypes.number,
  totalPages: propTypes.number,
}
