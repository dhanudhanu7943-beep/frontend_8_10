

const App = () => {
  const arr=["Python","C++","java","SQL","JS"]
  const obj={name:"John",age:30,city:"New York",course:"React"}
  const arrobj=[{id:1},{name:"Dhanu"},{price:500},{category:"Electronics"},
               {id:2},{name:"Anbu"},{price:800},{category:"toys"},
               {id:3},{name:"Moni"},{price:200},{category:"clothes"},
               {id:4},{name:"Shiva"},{price:900},{category:"furniture"},
                 
  ]
  return (
   <>
    <div className="bg-blue-200 h-30 w-30 text-center m-10 " >
      {arr.map((e,i)=>(
      <div key={i}>{e}</div>
      ))
    }
    </div>
    <div className="bg-pink-200 h-30 w-30 text-center m-10" >
      <div>
        <p>{obj.name}</p>
        <p>{obj.age}</p>
        <p>{obj.city}</p>
        <p>{obj.course}</p>
        </div>
      </div>
   <div className="bg-green-200 h-30 w-100 text-center m-10  " >
    
      {arrobj.map((e,i)=>(
        <div key={i} className="bg-yellow-200 ">
          <p>{e.id}</p>
          <p>{e.name}</p>
          <p>{e.price}</p>
          <p>{e.category}</p>
        </div>
      ))}
    
    </div>
   </>
  )
}

export default App