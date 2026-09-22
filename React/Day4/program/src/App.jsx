
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Service from './Pages/Service'
import Help from './Pages/Help'
import Course from './Pages/Course'
import Gallery from './Pages/Gallery'
import { Route, Routes } from 'react-router-dom'
import Navbar from './component/Navbar'
const App = () => {
  return (
    <>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/About" element={<About/>}/>
    <Route path="/Contact" element={<Contact/>}/>
    <Route path="/Service" element={<Service/>}/>
    <Route path="/Help" element={<Help/>}/>
    <Route path="/Course" element={<Course/>}/>
     <Route path="/Gallery" element={<Gallery/>}/>
     </Routes>
    </>
  )
}

export default App