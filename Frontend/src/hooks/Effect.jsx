import React, { useEffect,useState } from 'react'

const Effect = () => {
    const [count,setCount] = useState(0);
    const [value,setValue] = useState(0);
   useEffect(()=>{
    console.log("useEffect Mounted")
    },[count])
  const handleIncrement=()=>{
    setCount((count)=>count+1);
    setCount((count)=>count+1);
    setCount((count)=>count+1);
  }
  return (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={handleIncrement}>Inc</button>
        <h1>Value: {value}</h1>
        <button onClick={handleIncrement}>+</button>

    </div>
  )
}

export default Effect