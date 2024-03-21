import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const params = useParams();
    console.log("params ==>", params)
  return (
    <>
    <div>{Number.parseInt(params.id)}</div>
    
    </>
    
  )
}

export default User