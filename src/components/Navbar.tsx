import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className='fixed top-0 left-0 right-0 z-50 px-4 py-4 bg-[#f8f8f8]'>
      <div className="max-w-7xl mx-auto">
        {/* Desktop Menu */}
        <ul className="hidden md:flex justify-center gap-8">
          <li><Link to="/" className="text-[#7b7b7b] hover:text-[#222222] transition-all duration-300 font-semibold hover:scale-130 inline-block">Home</Link></li>
          <li><Link to="/about" className="text-[#7b7b7b] hover:text-[#222222] transition-all duration-300 font-semibold hover:scale-130 inline-block">About me</Link></li>
          <li><Link to="/projects" className="text-[#7b7b7b] hover:text-[#222222] transition-all duration-300 font-semibold hover:scale-130 inline-block">Projects</Link></li>
          <li><Link to="/contact" className="text-[#7b7b7b] hover:text-[#222222] transition-all duration-300 font-semibold hover:scale-130 inline-block">Contact</Link></li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex justify-end">
          <button
            onClick={toggleMenu}
            className="text-[#7b7b7b] hover:text-[#222222] transition-colors"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4">
            <ul className="flex flex-col space-y-3">
              <li><Link to="/" onClick={closeMenu} className="text-[#7b7b7b] hover:text-[#222222] transition-all duration-300 font-semibold inline-block py-2">Home</Link></li>
              <li><Link to="/about" onClick={closeMenu} className="text-[#7b7b7b] hover:text-[#222222] transition-all duration-300 font-semibold inline-block py-2">About me</Link></li>
              <li><Link to="/projects" onClick={closeMenu} className="text-[#7b7b7b] hover:text-[#222222] transition-all duration-300 font-semibold inline-block py-2">Projects</Link></li>
              <li><Link to="/contact" onClick={closeMenu} className="text-[#7b7b7b] hover:text-[#222222] transition-all duration-300 font-semibold inline-block py-2">Contact</Link></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;