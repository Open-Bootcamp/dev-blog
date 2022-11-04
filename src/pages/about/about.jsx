import { developers } from '../../data/data'
import githubBlack from '../../assets/githubBlack.svg'
import linkedinBlack from '../../assets/linkedinBlack.svg'

function About() {
  return (
    <div className='mx-auto flex flex-1 flex-col justify-center p-4 md:max-w-3xl'>
      <h1 className='text-center text-3xl font-bold md:text-4xl'>Acerca de</h1>
      <p className='mt-8 text-lg md:text-xl'>
        Somos un grupo de desarrolladores participando en la dinámica
        OpenWeekApps impulsada por la comunidad de{' '}
        <a
          href='https://open-bootcamp.com/'
          className='font-bold underline decoration-cyan-700'
        >
          @OpenBootcamp
        </a>
        , en donde se desarrollan distintas aplicaciones web utilizando
        tecnologías como React, Angular, Node, Express, MongoDB, etc.
      </p>
      <h2 className='mt-6 text-xl font-bold md:text-xl'>Desarrolladores:</h2>
      <div className='mt-4 text-lg md:text-xl'>
        {developers.map((developer, index) => (
          <div key={`developer-${index}`} className='flex justify-between'>
            <h3>{developer.name}</h3>
            <div className='flex gap-4'>
              <a href={developer.github} target='_blank' rel='noreferrer'>
                <img
                  src={githubBlack}
                  alt='github icon'
                  className='fill-black'
                />
              </a>
              <a href={developer.linkedin} target='_blank' rel='noreferrer'>
                <img src={linkedinBlack} alt='linkedin icon' />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default About
