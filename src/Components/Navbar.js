// src/components/Navbar.js
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setScrolled(scrollPosition > 400); // Change the threshold as needed
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="logo">
        <NavLink to="/">Shivoham Energies</NavLink>
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        <div>&#x2630;</div>
      </div>
      <div className={`menu-background ${menuOpen ? 'active' : ''}`} onClick={closeMenu}>
        <ul className="menu-links">
       
          <li>
            <NavLink to="/" exact activeClassName="active" onClick={closeMenu}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName="active" onClick={closeMenu}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" activeClassName="active" onClick={closeMenu}>
              Services
            </NavLink>
          </li>
          <li>
            <Link to="project-section" smooth={true} duration={800} onClick={closeMenu}>
              Projects
            </Link>
          </li>
          <li>
            <NavLink to="/contact" activeClassName="active" onClick={closeMenu}>
              Contact
            </NavLink>
          </li>
          </ul>
      </div>
    </nav>
  );
};

export default Navbar;
// Import React and any other necessary dependencies
// Import React and any other necessary dependencies
// Import React and any other necessary dependencies
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './Navbar.css';

// // Functional component for the Navbar
// const Navbar = () => {
//   const [isMenuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen(!isMenuOpen);
//   };

//   const closeMenu = () => {
//     setMenuOpen(false);
//   };

//   return (
//     <nav>
//       <div className="logo">
//         {/* Your logo component or image goes here */}
//         <img src="your-logo.png" alt="Logo" />
//       </div>
//       <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
//         <div className="menu-icon" onClick={toggleMenu}>
//           &#9776; {/* Hamburger menu icon */}
//         </div>
//         <ul style={{ display: isMenuOpen ? 'flex' : 'none' }}>
//           <li>
//             <Link to="/" onClick={closeMenu}>
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link to="/services" onClick={closeMenu}>
//               Services
//             </Link>
//           </li>
//           <li>
//             <Link to="/about" onClick={closeMenu}>
//               About
//             </Link>
//           </li>
//           <li>
//             <Link to="/product" onClick={closeMenu}>
//               Product
//             </Link>
//           </li>
//           <li>
//             <Link to="/contact" onClick={closeMenu}>
//               Contact
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
