'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Menu, X, Mail } from 'lucide-react'

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <span className={`text-2xl font-bold ${isScrolled ? 'text-slate-900' : 'text-white drop-shadow-md'}`}>
            Travukwik
          </span>
          <div className="relative h-12 w-12 rounded-full bg-white/90 flex items-center justify-center shadow-sm">
            <Image
              src="/travukwik-logo4.png"
              alt="Travukwik Logo"
              fill
              sizes="48px"
              className="object-contain"
            />
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {['Services', 'Destinations'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
              className={`font-medium hover:text-secondary transition-colors ${
                isScrolled ? 'text-slate-600' : 'text-white drop-shadow-sm'
              }`}
            >
              {item}
            </button>
          ))}
          <button 
            onClick={() => scrollToSection('contact')}
            className="bg-secondary hover:bg-sky-600 text-white px-6 py-2 rounded-full font-semibold transition-all transform hover:scale-105 flex items-center gap-2"
          >
            <Mail size={18} />
            Contact Us
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-secondary"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} color={isScrolled ? '#000' : '#fff'} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-xl py-6 px-4 md:hidden flex flex-col gap-4 border-t">
          {['Services', 'Destinations'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
              className="text-slate-700 font-medium text-lg text-left py-2 border-b border-gray-100"
            >
              {item}
            </button>
          ))}
          <button 
            onClick={() => scrollToSection('contact')}
            className="bg-primary text-white text-center py-3 rounded-lg font-bold"
          >
            Contact Us
          </button>
        </div>
      )}
    </nav>
  );
};