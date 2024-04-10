import React from 'react'
import "./Purchase.css"
import { useNavigate } from 'react-router-dom'

function Purchase() {
    const navigate=useNavigate();

    const handleNavigate=()=>{
        navigate("/Product")
    }
  return (
    <div className='container_footer'>
        <div className='btn'>
        <button onClick={handleNavigate}>Buy</button>
        </div>
    </div>
  )
}

export default Purchase