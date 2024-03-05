import React from 'react'
import '../styles/Navbar.css'

const Navbar = () => {
  return (
    <nav>
        <div className="firstchild">
            <img src="./images/dog.jpg" alt="" />
        </div>
        <div className="secondchild">
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Project</a>
            <a href="">Contact</a>
        </div>
        <div className="thirdchild">
        <i class="fa-solid fa-user"></i>
        <i class="fa-solid fa-phone"></i>
        <i class="fa-solid fa-envelope"></i>
        </div>
    </nav>
  )
}

export default Navbar