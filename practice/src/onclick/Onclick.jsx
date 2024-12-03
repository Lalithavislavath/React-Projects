import React from 'react'

function Onclick() {
    const shoot = () => {
        alert("Great Shot!");
      }
    
  return (
    <div>
        <button onClick={shoot}>Click</button>
    </div>
  )
}
export default Onclick