import React from "react";
// import logo from './assets/logo.png'
// import logo from '/assets/logo.png';
import reel from '/reel.png';
import { NavLink } from "react-router-dom";





export default function Footer() {
    return(
        <>
        <div class="myfooter">
     <footer>
    <NavLink to={"/"}>
    <i class="fa-solid fa-house"></i> 
    </NavLink>
    
     <NavLink to="/search">
        <i class="fa-solid fa-magnifying-glass"></i>
    </NavLink>

    <NavLink to="/add">
    <i class="fa-regular fa-square-plus"></i>
    </NavLink>

    <NavLink to="/reel">
    <i class="fa-regular fa-circle-play"></i>
    </NavLink>

    <NavLink to="/profile">
    <i class="fa-regular fa-user"></i>
    </NavLink>     
        {/* <img src={reel}/> */}
       
        
    </footer>       
   </div>
       
        </>
    )
}