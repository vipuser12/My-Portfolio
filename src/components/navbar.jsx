import { navbar } from '../data/data.jsx';
import { IoMenu, IoClose } from "react-icons/io5";
import { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className='bg-black/80 backdrop-blur-md w-full text-white fixed top-0 left-0 h-21 flex items-center shadow-lg z-100 justify-between px-6 border-b border-gray-800/50'>

      <div className="logo">
        <a href="#home" className='group flex items-center gap-3 transition-transform duration-300'>
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-indigo-500 rounded-full blur opacity-75 animate-pulse group-hover:opacity-100 transition duration-1000"></div>
            <div className="relative bg-black rounded-full">
              <img
                className='rounded-full w-12 h-12 object-cover border-2 border-indigo-500'
                src="/2025-06-04 10.44.30.jpg"
                alt="Mohamed Ahmed"
              />
            </div>
          </div>
          <span className='text-white font-bold text-lg tracking-tight group-hover:text-indigo-400 transition-colors'>
            MOHAMED <span className="text-indigo-500">AHMED</span>
          </span>
        </a>
      </div>

      <button className="text-4xl md:hidden cursor-pointer p-1 z-110 text-gray-300 hover:text-white transition-colors" onClick={toggleMenu}>
        {isOpen ? <IoClose /> : <IoMenu />}
      </button>

      <nav className='hidden md:flex items-center gap-2'>
        {navbar.map((item, index) => (
          <a key={index} href={item.link} className='px-4 py-2 text-gray-300 hover:text-indigo-400 font-semibold transition-all duration-300 relative group uppercase'>
            {item.name}
            <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </a>
        ))}
      </nav>

      <div className={`fixed top-20 right-0 w-full bg-zinc-900/95 backdrop-blur-xl shadow-2xl transform 
      ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0 pointer-events-none'} 
      transition-all duration-300 ease-in-out z-90 md:hidden flex flex-col p-8 space-y-6 rounded-bl-3xl border-l border-b border-gray-800`}>

        {navbar.map((item, index) => (
          <a
            key={index}
            href={item.link}
            onClick={() => setIsOpen(false)}
            className='text-xl font-bold text-gray-300 hover:text-indigo-500 transition-all flex items-center gap-3'
          >
            <span className="text-indigo-500 text-xs">0{index + 1}.</span>
            {item.name.toUpperCase()}
          </a>
        ))}

        <a href="#contact" onClick={() => setIsOpen(false)} className="bg-indigo-600 text-center py-3 rounded-xl font-bold shadow-lg shadow-indigo-600/20">
          HIRE ME
        </a>
      </div>
    </header>
  );
}

export default Navbar;
