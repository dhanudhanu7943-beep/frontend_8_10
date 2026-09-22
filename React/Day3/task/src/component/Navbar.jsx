import { Link } from "react-router-dom"

const Navbar = () => {
  return (
     <> 
     <div className="navbar">
        <div className="logo">
            <h1>LOGO</h1>
        </div>
        <div className="nav">
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        </div>
        </div>
     </>
  )
}

export default Navbar