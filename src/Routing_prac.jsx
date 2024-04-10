import React from 'react'
import { RouterProvider } from "react-router-dom"
import { createBrowserRouter } from 'react-router-dom';
import Root from './Root';
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
import Contact from './pages/Contact';
import Error from './pages/Error';
import Cart from './pages/Cart';
import Product_Details from './pages/Product_Details';


function Routing_prac() {
    const Route=createBrowserRouter([
        {
            path:"/",element:<Root/>,errorElement:<Error/>,
            children:[
                {path:"/",element:<Home/>},
                {path:"/About",element:<About/>},
                {path:"/Product",element:<Product/>},
                {path:"/Contact",element:<Contact/>},
                {path:"/Cart" ,element:<Cart/>},
                {path:"/Product/:productId",element:<Product_Details/>}                   
                
            ]
        }
    ])
  return (
    <div>
        <RouterProvider router={Route} />
    </div>
  )
}

export default Routing_prac ;