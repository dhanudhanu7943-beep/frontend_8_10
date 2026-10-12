import React from 'react'

const App = () => {

  const lang=["Python","java","Html","SQL","C++"]
  const City=["Chennai","Sivagangai","Maduari","Nahapattinam"]
  const course=["Fs","React","AIML","AI","DS"]
  return (
   <>
   <div className="items-center p-5">
    {lang.map((e,i)=>(
      <div key={i}>{e}</div>

    ))
  }
  </div>
  <ul className="flex justify-center h-10 bg-blue-100 items-center gap-10">
    {City.map((e,i)=>(
    <li key={i}>{e}</li>
    ))
  }
  </ul>

  <div className="bg-gray-300">
    <h1 className="flex justify-center items-center font-extrablod mt-5 bg-amber-500">
      Available Courses
      </h1>
      <ul className="flex justify-center items-center gap-10 p-10">
        {course.map((e,i)=>(
          <li key={i} className="bg-pink-200 rounded-2xl w-40 text-center h-10">{e}</li>

        ))}
        </ul>
        </div>
    
   </>


  )
}

export default App