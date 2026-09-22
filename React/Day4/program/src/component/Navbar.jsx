import { Link } from "react-router-dom"
import logo from "../assets/hero.png"


const Navbar = () => {
  return (
  <>
  <div className="bg-red-200 h-80 flex justify-between items-center font-bold m-1 p-1">
 <div className=" ">
    <img className="w-20 h-20" src={logo} alt="logo" />

 </div>
 <div className="flex gap-10">
 <Link to="/"> Home</Link>
 <Link to="/About"> About</Link>
<Link to="/Contact">Contact</Link>
<Link to="/Course"> Course</Link>
<Link to="/Service"> Service</Link>
<Link to="/Help"> Help</Link>
<Link to="/Gallery"> Gallery</Link>



 </div>
 </div>
  </>
  
    
 )
}

export default Navbar