import React from 'react'
import "./navbar.css";
const Navbar = () => {
  return (
  
    <nav className="navbar">
      <h2 className='name'>Horizon Courts</h2>
  <div className="nav-links">
    <span className="nav-item active">
      <a href="#">About Us</a>
    </span>

    <span className="nav-item">
      <a href="#">Services</a>
    </span>

    <span className="nav-item">
      <a href="#">Coaches</a>
    </span>

    <span className="nav-item">
      <a href="#">Events</a>
    </span>

    <span className="nav-item">
      <a href="#">Contacts</a>
    </span>
  </div>

  <div className="nav-btn">
    <a href="#" className="book-btn">
      Book now ↗
    </a>
  </div>
  
</nav>
  
  )
}

export default Navbar
