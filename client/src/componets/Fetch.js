import React, { useEffect, useState } from 'react'

function Fetch() {
  const[data,setdata]=useState([])

  useEffect(()=>
  {
   fetch("http://localhost:8000/api/user/protected-route").then((result)=>
   {
       return  result.json()
   }).then((data)=>
   {
        setdata(data)
        console.log(data);
   })


  },[])
  return (
    <div>
      {data.map((user,i)=>{
        return(
          <div>
              <tr key={i}>
                <td>{user.title}</td>
                <td>{user.date}</td>
                <td>{user.reminder}</td>
                </tr>
         
          </div>
      
        )

      })}
    </div>
  )
}

export default Fetch
