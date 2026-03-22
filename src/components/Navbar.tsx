import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    closeMenu();
  };

  const navLinks = [
    { label: 'Home',       id: 'hero' },
    { label: 'Skills',     id: 'skills' },
    { label: 'Experience', id: 'experience' },
    { label: 'Education',  id: 'education' },
    { label: 'Projects',   id: 'projects' },
    { label: 'Contact',    id: 'contact' },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-6 pt-5">
      <nav
        className="rounded-2xl"
        style={{
          padding: '15px 35px',
          background: 'rgba(255, 255, 255, 0.3)',
          backdropFilter: 'blur(24px) saturate(160%)',
          WebkitBackdropFilter: 'blur(24px) saturate(160%)',
          border: '1px solid rgba(255, 255, 255, 0.6)',
          boxShadow: '0 8px 32px rgba(59, 130, 246, 0.06), inset 0 1px 0 rgba(255,255,255,0.8)',
        }}
      >
        {/* Desktop */}
        <ul className="hidden md:flex justify-center" style={{ gap: '40px' }}>
          {navLinks.map(({ label, id }) => (
            <li key={id}>
              <button
                onClick={() => scrollToSection(id)}
                className="transition-all duration-300 hover:scale-110 inline-block cursor-pointer"
                style={{
                  fontSize: '17px',
                  fontWeight: 600,
                  color: 'rgba(30, 58, 95, 0.6)',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = '#1d4ed8')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(30, 58, 95, 0.6)')}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <div className="md:hidden flex justify-end">
          <button onClick={toggleMenu} style={{ color: 'rgba(30, 58, 95, 0.6)' }}>
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4">
            <ul className="flex flex-col space-y-3">
              {navLinks.map(({ label, id }) => (
                <li key={id}>
                  <button
                    onClick={() => scrollToSection(id)}
                    className="transition-all duration-300 py-2 w-full text-center"
                    style={{
                      fontSize: '17px',
                      fontWeight: 600,
                      color: 'rgba(30, 58, 95, 0.6)',
                    }}
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;