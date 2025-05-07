import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-900 border-b px-6 py-4 flex items-center justify-between">
      <Link to="/" className="text-xl font-bold text-white">DibsBook</Link>

      {/* Hamburger Menu Button */}
      <button
        className="lg:hidden text-gray-700"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle Menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {menuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Desktop Menu */}
      <div className="hidden lg:flex items-center gap-6">
        <Link to="/" className="text-white hover:text-blue">Home</Link>
        <Link to="/book" className="text-white hover:text-blue">Book</Link>
        <Link to="/team" className="text-white hover:text-blue">Team</Link>
        <Link to="/contact" className="text-white hover:text-blue">Contact</Link>
        <div className="flex gap-3">
          <Link to="/login" className="px-4 py-2 border border-blue-600 text-white rounded hover:bg-blue-50 text-blue-50">Login</Link>
          <Link to="/register" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Register</Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg lg:hidden flex flex-col items-start p-6 gap-4 z-50">
          <Link to="/" onClick={() => setMenuOpen(false)} className="hover:text-blue-600">Home</Link>
          <Link to="/book" onClick={() => setMenuOpen(false)} className="hover:text-blue-600">Book</Link>
          <Link to="/team" onClick={() => setMenuOpen(false)} className="hover:text-blue-600">Team</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)} className="hover:text-blue-600">Contact</Link>
          <Link to="/login" onClick={() => setMenuOpen(false)} className="px-4 py-2 border border-blue-600 text-blue-600 rounded w-full text-center hover:bg-blue-50">Login</Link>
          <Link to="/register" onClick={() => setMenuOpen(false)} className="px-4 py-2 bg-blue-600 text-white rounded w-full text-center hover:bg-blue-700">Register</Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
