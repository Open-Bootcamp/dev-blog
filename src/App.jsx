import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';

import Home from './pages/home/home';
import About from './pages/about/about';
import Tag from './pages/tags/tag';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path={'/'} element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/tags' element={<Tag />} />
        // TODO: page 404
      </Routes>
    </Router>
  )
}

export default App
