const Student=()=>{
    const Studentname="Dhanalaskshmi"
    const Age=21
    const Course="Fullstack"
    const IsActive=true
    const fees=40000
    return(
        <>
        <div className= "detail">
            <h1>Student Details</h1>
            <p>Name:{Studentname}</p>
            <p>Age:{Age}</p>
            <p>Course:{Course}</p>
            <p>Status:{IsActive?"Active" :"Unactive"}</p>
            <p>fees:{fees}</p>
            </div>
            </>
            )
        }
export default Student     
    
    
    
    
    
    