import { useState } from 'react';
import logo from "../assets/spark_logo.png";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-off-white/80 backdrop-blur-md border-b border-black/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img alt="Logo" className="h-20 w-auto" src={logo}  />
        </div>
        
        <div className="hidden md:flex items-center space-x-12">
          {['About', 'Services', 'Why Us'].map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} 
               className="text-xs font-bold uppercase tracking-widest hover:text-brand transition-colors">
              {item}
            </a>
          ))}
          <a className="px-8 py-3 bg-dark text-white text-xs font-black uppercase tracking-widest rounded-full hover:bg-brand transition-all" href="#contact">
            Contact Us
          </a>
        </div>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <span className="material-symbols-outlined">{isOpen ? 'close' : 'menu'}</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;