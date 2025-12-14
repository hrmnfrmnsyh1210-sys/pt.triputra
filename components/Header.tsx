import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-sm border-slate-200 py-3' 
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="relative">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-700 to-primary-900 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg transform group-hover:rotate-3 transition-transform duration-300">
              TK
            </div>
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-secondary-500 rounded-full border-2 border-white"></div>
          </div>
          <div>
            <h1 className={`font-bold text-lg leading-tight tracking-tight ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
              PT. Triputra Khatulistiwa
            </h1>
            <p className={`text-[10px] font-medium tracking-widest uppercase ${isScrolled ? 'text-slate-500' : 'text-slate-300'}`}>
              Logistics Partner
            </p>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.label} 
              href={item.href}
              className={`text-sm font-semibold transition-colors relative group ${
                isScrolled ? 'text-slate-600 hover:text-primary-700' : 'text-slate-200 hover:text-white'
              }`}
            >
              {item.label}
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${isScrolled ? 'bg-primary-600' : 'bg-white'}`}></span>
            </a>
          ))}
          <button className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all transform hover:-translate-y-0.5 hover:shadow-lg ${
            isScrolled 
              ? 'bg-primary-700 text-white hover:bg-primary-800 shadow-primary-700/20' 
              : 'bg-white text-primary-900 hover:bg-slate-100 shadow-white/10'
          }`}>
            Hubungi Kami
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className={isScrolled ? 'text-slate-900' : 'text-white'} />
          ) : (
            <Menu className={isScrolled ? 'text-slate-900' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-slate-100 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col p-6 gap-2">
            {NAV_ITEMS.map((item) => (
              <a 
                key={item.label} 
                href={item.href}
                className="text-slate-600 font-medium py-3 px-4 rounded-lg hover:bg-slate-50 hover:text-primary-700 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="h-px bg-slate-100 my-2"></div>
            <button className="bg-gradient-to-r from-primary-700 to-primary-600 text-white py-3.5 rounded-xl font-bold w-full shadow-lg shadow-primary-600/20">
              Hubungi WhatsApp
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;