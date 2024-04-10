import React from 'react'
import Navbar_comp from './components/Navbar_comp'
import { Outlet } from 'react-router-dom'
import Purchase from './components/Purchase'
import Slider from './components/Slider'

function Root() {
  return (
    <div>
        <Navbar_comp/>
        <div>
        <Outlet/>
        </div>
        {/* <div><Purchase/></div> */}
        {/* <div><Slider/></div> */}
    </div>
  )
}

export default Root