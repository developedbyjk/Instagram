import React from "react";
// import logo from './assets/logo.png'
// import logo from '/assets/logo.png';
import logo from '/logo.png'
import hearicon from '/icon-heart.png';




export default function Header() {
    return(
        <>
        <div class="header">
                <div class="logo">
                    <img  id ="logo" src= {logo}/>
                </div>  
                <div class="searchbar">
                    <input type="text" name="text" id="search-input" placeholder="Search" />
                </div>
                <div class="hearticon">
                <img src={hearicon} alt="Heart Icon" />
                </div>
         </div>
        </>
    )
}