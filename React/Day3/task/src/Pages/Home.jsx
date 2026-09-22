import Navbar from "../component/Navbar"

const Home = () => {
  return (
    <>
    <Navbar/>
    <div className="banner">
    <div className="box">
        <div className="img">
            <img src=" img" alt=""  />
        </div>
        <div className="details">
            <p><strong>NAME :</strong>Dhanalakshmi</p>
            <p><strong>COURSE :</strong>Fullstack Developer</p>
            <p><strong>DOB :</strong>18/05/2005</p>
        </div>
    </div>
   </div> 
    
    </>
  )
}

export default Home