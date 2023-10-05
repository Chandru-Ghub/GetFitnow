import React from 'react'
import '../styles/Navbar.css'
const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="logo">
            <h2>
                GETFit
                <span class="material-symbols-outlined dumble">
                exercise
                </span>
            </h2>
        </div>
        <ul className="navs">
            <li>Home</li>
            <li>About</li>
            <li>Plans</li>
            <li>Info</li>
            <li>contact</li>
            
        </ul>
    </div>
  )
}

export default Navbar