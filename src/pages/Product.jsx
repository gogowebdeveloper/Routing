import React, { useEffect, useState } from 'react'
import URL from './Create_url';
import "./Product.css"


function Product() {
  const [data,setData]=useState([]);

  const Fetching=async()=>{
    const response=await URL.get("/Products");
    console.log(response.data);
    setData(response.data);
  }

  useEffect(()=>{
    Fetching()
  },[])

  return (
    <div className='url' >
      <table border={2}>
        <thead>
          <th>Sl.No</th>
          <th>Product Name</th>
          <th>Product</th>
          <th>Price</th>
          <th>Stalk</th>
        </thead>
        {data?.map((ele,id)=>{
          return(
            <tbody key={id}>
              <tr>
                <td className='id'>{ele.id}</td>
                <td className='title'>{ele.title}</td>
                <td className='image'><img src={ele.image} /></td>
                <td className='price'>$ {ele.price}</td>
                <td className='stalk'>{ele.rating.count}</td>
              </tr>
            </tbody>
          )
        })}
      </table>
    </div>
  )
}

export default Product