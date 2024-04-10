import React from 'react'
import { useParams } from 'react-router-dom'

function Product_Details() {
    const param=useParams();
  return (
    <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
        <div>Product Details Page</div>
        <div>{param.productId}</div>
    </div>
    
  )
}

export default Product_Details