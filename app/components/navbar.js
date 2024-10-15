import React from 'react';
import Link from 'next/link';
import '../../app/Navbar.css'; // Assuming you will add some external styles

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link href="/">
          Mohamed Amir Ben Dhief
          </Link>
      </div>
      <ul className="nav-links">
        <li>
          <Link href="Aboutme">
            About Me
          </Link>
        </li>
        <li>
          <Link href="projects">
            Projects
          </Link>
        </li>
        <li>
          <Link href="skills">
            Skills
          </Link>
        </li>
        <li>
          <Link href="contact">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
