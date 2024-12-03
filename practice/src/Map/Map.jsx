import React from 'react'

function Map() {
    const users =[
        {id:1,name:"lalitha"},
        {id:2,name:"Rahul"}, 
        {id:3,name:"Veena"}
    ]
  return (
    <div>
       <h1>Map</h1>

       {users.map((user)=>(
      <li key={user.id}>
        <h2>{user.name}</h2>
      </li>
       ))}
    </div>
  )
}
export default Map