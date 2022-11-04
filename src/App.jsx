import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom'

import Home from './pages/home/home'
import About from './pages/about/about'
import Tag from './pages/tags/tag'
import Article from './pages/article/Article'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className='flex min-h-screen flex-col'>
      <Router>
        <Header />
        <Routes>
          <Route path='/'>
            <Route index element={<Home />} />
            <Route path=':currentPage' element={<Home />} />
          </Route>
          <Route path='/about' element={<About />} />
          <Route path='/tags'>
            <Route index element={<Navigate to='/' />} />
            <Route path=':tag' element={<Tag />} />
          </Route>
          <Route path='/article'>
            <Route index element={<Navigate to='/article/1' />} />
            <Route path=':articleId' element={<Article />} />
          </Route>
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
