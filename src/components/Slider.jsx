import React, { useState } from 'react'
import img1 from "../assets/Cars/car1.jpg"
import img2 from "../assets/Cars/car2.jpg"
import img3 from "../assets/Cars/car3.jpg"
import img4 from "../assets/Cars/car4.jpg"
import img5 from "../assets/Cars/car5.jpg"
import "./Slider.css"


const Cars_Slider=[
    {id:1,image:{img1}},
    {id:2,image:{img2}},
    {id:3,image:{img3}},
    {id:4,image:{img4}},
    {id:5,image:{img5}},

]


function Slider() {

  return (
    <div className='Slider_container'>
        <div className='Slider'>
            {Cars_Slider.map((ele,id)=>{
                return(
                    <img src={ele.image}  />
                )
})}
        </div>
    </div>
  )
}

export default Slider