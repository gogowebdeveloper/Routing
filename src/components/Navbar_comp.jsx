import React from "react";
import { NavLink } from "react-router-dom";
import navStyle from "./Navbar.module.css";
import svg from "../assets/mcdonald-s-15-logo-svgrepo-com.svg"
import cart from "../assets/shopping-cart.svg"

function Navbar_comp() {
  return (
    <div className={navStyle.container}>
      <div className={navStyle.company}>
        <img className={navStyle.image} src={svg} />
      </div>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) => {
                return isActive ? navStyle.active : isPending ? "pending" : "";
              }}
              
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/About"
              className={({isActive})=>isActive?navStyle.active:undefined}
              
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Product"
              className={({isActive})=>isActive?navStyle.active:undefined}
            
            >
              Product
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Contact"
              className={({isActive})=>isActive?navStyle.active:undefined}
              
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink  to="/Cart">
              <img className={navStyle.cart} src={cart} alt="" />
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar_comp;
