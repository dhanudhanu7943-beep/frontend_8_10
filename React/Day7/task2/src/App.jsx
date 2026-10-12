import React from 'react'

const App = () => {
  const Std={Name:"Dhanu", course:"FS", Stdid:102,city:"Chennai" }
  const Emp={Name:"Madhu", Empid:103, Role:"AI",Salary:20000}
  const Product={Name:"lap", cost:15000,storage:"Mega byte",Brand:"Samsung"}
  
  return (
    <>
   <div className="bg-yellow-200 p-5 m-10 text-center">
    <p>{Std.Name}</p>
    <p>{Std.course}</p>
   <p>{Std.Stdid}</p>
   <p>{Std.city}</p>
   </div>


   <div className="bg-pink-100 p-5 m-10 text-center">
    <h1 className="font-extrabold p-2">Employe Details</h1>
    <p>Name:{Emp.Name}</p>
    <p>Name:{Emp.Empid}</p>
    <p>Name:{Emp.Role}</p>
    <p>Name:{Emp.Salary}</p>

    </div>

    <div className="bg-red-300 p-5 m-10 text-center">
      <p>{Product.Name}</p>
      <p>{Product.cost}</p>
      <p>{Product.storage}</p>
      <p>{Product.Brand}</p>

    </div>

    </>
  )
}

export default App