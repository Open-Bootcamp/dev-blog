import { social } from '../../data/data.js'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className='mt-8 w-full bg-black'>
      <div className='mx-auto flex max-w-6xl flex-col items-center p-6 text-xs text-white md:flex-row md:justify-between md:px-10'>
        <p className='text-center opacity-70'>{`Copyright © ${year} - OpenWeekApps`}</p>
        <div>
          <ul className='my-1 flex flex-row  items-center justify-center'>
            {social.map((item, index) => (
              <li
                key={`social-${index}`}
                className='mx-1 opacity-70 hover:opacity-100'
              >
                <a href={item.link} target='_blank' rel='noreferrer'>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
export default Footer
