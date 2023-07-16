import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex justify-center text-bold text-2xl font-serif pt-7 pb-7 bg-gray-500">
      <ul className="flex space-x-4">
        <li> 
          <Link to="/" className="text-white hover:text-gray-700">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="text-white hover:text-gray-700">
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
