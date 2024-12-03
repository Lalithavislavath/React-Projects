import React, { useMemo, useState } from 'react'

function Memo() {
    const[count,setCount]=useState(0)
    const[input,setInput]=useState('')
    const expensive=useMemo(()=>{
        return count *200
    },[count])
  return (
    <div>
        <h2>Usememo example</h2>
        <input type="text" value={input} onChange={(e)=>setInput(e.target.value)}/>
        <p>Input value:{input}</p>
        <p>Count:{count}</p>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        <button onClick={()=>setCount(count-1)}>decrement</button>
        <p>Calculation:{expensive}</p>

    </div>
  )
}
export default Memo