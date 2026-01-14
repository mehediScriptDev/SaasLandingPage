import { Link, NavLink } from "react-router";
import { useState, useEffect } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Header height offset
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  const links = (
    <>
      <li>
        <button onClick={() => scrollToSection('hero')} className="hover:text-primary transition-colors cursor-pointer">Home</button>
      </li>
      <li>
        <button onClick={() => scrollToSection('features')} className="hover:text-primary transition-colors cursor-pointer">Features</button>
      </li>
      <li>
        <button onClick={() => scrollToSection('how-it-works')} className="hover:text-primary transition-colors cursor-pointer">How It Works</button>
      </li>
      <li>
        <button onClick={() => scrollToSection('faq')} className="hover:text-primary transition-colors cursor-pointer">FAQ</button>
      </li>
      <li>
        <a href="https://simupitch.ai/login" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Resources</a>
      </li>
    </>
  );

  return (
    <header className={`fixed top-0 w-full z-50 text-white py-4 px-6 transition-all duration-300 ${
      isScrolled ? 'bg-[#1b1311]/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-2xl uppercase font-bold font-secondary tracking-tight">
            simupitch ai
          </span>
          <div className="flex gap-1">
            <div className="w-1 h-4 bg-primary rounded-full"></div>
            <div className="w-1 h-4 bg-primary rounded-full"></div>
            <div className="w-1 h-4 bg-primary rounded-full"></div>
          </div>
        </div>

        {/* Navigation - Desktop */}
        <nav className="hidden lg:flex items-center gap-8">
         <ul className="flex gap-8 items-center font-normal text-sm transition-colors">
         {links}
         </ul>
        </nav>

        {/* Action Buttons - Desktop */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            to="https://simupitch.ai/login"
            target="_blank"
            className="text-sm hover:text-primary transition-colors"
          >
            Login
          </Link>
          <Link 
            to={"https://simupitch.ai/login"} 
            target="_blank" 
            className="bg-primary hover:bg-primary/90 cursor-pointer text-white text-sm font-medium px-6 py-2.5 rounded-full transition-all"
          >
            Book demo
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden flex flex-col gap-1.5 w-8 h-8 justify-center items-center"
          aria-label="Toggle menu"
        >
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden absolute inset-0 top-18 bg-black backdrop-blur-md transition-all duration-300 ${
        isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        <nav className="flex flex-col h-full  -mt-3 z-50 bg-black">
          <ul className="flex flex-col gap-6 p-6 text-lg bg-[#1b1311]/95">
            {links}
          </ul>
          
          <div className="mt-auto space-y-4 p-6 bg-[#1b1311]/95 pb-8 border-b border-gray-800">
            <Link
              to="https://simupitch.ai/login"
              target="_blank"
              onClick={() => setIsMenuOpen(false)}
              className="block w-full text-center py-3 text-white border border-white/20 rounded-full hover:bg-white/10 transition-all"
            >
              Log in
            </Link>
            <Link
              to="https://simupitch.ai/login"
              target="_blank"
              onClick={() => setIsMenuOpen(false)}
              className="block w-full text-center py-3 bg-primary text-white rounded-full hover:bg-primary/90 transition-all"
            >
              Book demo
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
