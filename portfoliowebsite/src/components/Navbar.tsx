import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='fixed top-0 left-0 right-0 z-50 px-4 py-4'>
      <ul className="flex justify-center gap-8">
        <li><Link to="/" className="text-[#7b7b7b] hover:text-[#222222] transition-all duration-300 font-semibold hover:scale-130 inline-block">Home</Link></li>
        <li><Link to="/about" className="text-[#7b7b7b] hover:text-[#222222] transition-all duration-300 font-semibold hover:scale-130 inline-block">About me</Link></li>
        <li><Link to="/projects" className="text-[#7b7b7b] hover:text-[#222222] transition-all duration-300 font-semibold hover:scale-130 inline-block">Projects</Link></li>
        <li><Link to="/contact" className="text-[#7b7b7b] hover:text-[#222222] transition-all duration-300 font-semibold hover:scale-130 inline-block">Contact</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar