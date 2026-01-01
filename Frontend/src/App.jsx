import {Route, Router, Routes} from 'react-router-dom';
import Layout from './Components/Layout.jsx';
import Home from './Pages/Homepage.jsx';
import About from './Pages/AboutPage.jsx';
import Projects from './Pages/ProjectsPage.jsx';
import Education from './Pages/EducationPage.jsx';
import Contact from './Pages/Contact';


function App() {

  return (
    <>
      <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/education' element={<Education />} />
            <Route path='/contact' element={<Contact />} />
          </Route>
      </Routes>
    </>
  )
}

export default App
