import React, { useState } from 'react'
function Form() {
    const[name,setName]=useState("")
     const handleSubmit=(e)=>{
        e.preventDefault();
        alert(`Entered name:${name}`);
     }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>
                Name:<input type='text' value={name} onChange={(e)=>setName(e.target.value)}/>
            </label>
            <input type='submit' />
        </form>
    </div>
  )
}

export default Form