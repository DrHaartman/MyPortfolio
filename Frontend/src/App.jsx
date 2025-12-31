import {Route, Router, Routes} from 'react-router-dom';
import Contact from './Pages/Contact';
import Layout from './Components/Layout.jsx';


function App() {

  return (
    <>
      <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<div>Home Page</div>} />
            <Route path='/about' element={<div>About Page</div>} />
            <Route path='/contact' element={<Contact />} />
          </Route>
      </Routes>
    </>
  )
}

export default App
