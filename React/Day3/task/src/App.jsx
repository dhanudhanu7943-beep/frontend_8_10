import { Route, Routes } from "react-router-dom"
import Navbar from "./component/Navbar"
import Home from "./Pages/Home"
import About from "./Pages/About"
const App = () => {
  return (
    <>

    {/* <Navbar/> */}
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
    </Routes>
    </>
  )
}

export default App