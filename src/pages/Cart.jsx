import React from 'react'
import cartStyle from "./pages.module.css"
import { useNavigate } from 'react-router-dom'

function Cart() {
  const navigate=useNavigate();

  const handleNavigate=()=>{
    navigate("/Product")
  }
  return (
    <div className={cartStyle.cart_align}>
      <h1>Oops!</h1>
      <h3>No Products found</h3>
      <h4>Plzz Can You Add Some Products</h4>
      <button onClick={handleNavigate} className={cartStyle.btn} >Buy</button>
    </div>
  )
}

export default Cart