import React, { useRef } from 'react'

function Count() {
    const countref= useRef(0)

    const incre=()=>{
        countref.current +=1;
        console.log(countref.current)
    }
  return (
    <div>
        
        <button onClick={incre}>Increment</button>
    </div>
  )
}

export default Count