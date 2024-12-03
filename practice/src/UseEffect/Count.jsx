import React, { useEffect, useState } from 'react'

function Count() {
    const[count,setCount]=useState(0)
    const[cal,setCal]=useState(0)

    useEffect(()=>{
    setCal(() => count*2)
    },[count])
  return (
    <div>
        <p>Count{count}</p>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        <button onClick={()=>setCount(count-1)}>decrement</button>
        <p>{cal}</p>

    </div>
  )
}
export default Count