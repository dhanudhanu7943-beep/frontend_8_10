import React ,{useState} from 'react'

const App = () => {
  const[countNumber,setCountNumber]=useState(0)
  const handleClick=()=>{
    setCountNumber(countNumber+1)

  }
  const handleDec=()=>{
    setCountNumber(countNumber-1)
  }
    const handleReset=()=>{
    setCountNumber(0)
  } 

  return (
   <div>
    <h1>{countNumber}</h1>
    <button onClick={handleClick}>Count(++)</button>
     <button onClick={handleDec}>Count(--)</button>
      <button onClick={handleReset}>Rest</button>
      </div>
  )
}





export default App