'use client'

import Image from 'next/image'
import { MapPin, Mail, Facebook, Twitter, Instagram } from 'lucide-react'

export const Contact: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="bg-slate-900 text-white pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
               <span className="text-2xl font-bold">Travukwik</span>
               <div className="relative h-10 w-10 rounded-full bg-white flex items-center justify-center">
                 <Image
                   src="/travukwik-logo4.png"
                   alt="Travukwik Logo"
                   fill
                   sizes="40px"
                   className="object-contain"
                 />
               </div>
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Making your travel dreams a reality. Quick, reliable, and tailored just for you.
              Experience the world with Travukwik.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/travukwik" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#1877F2] transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-secondary transition-colors">
                <Twitter size={18} />
              </a>
              <a href="https://www.instagram.com/travukwikltd/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-pink-600 transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-300">
                <MapPin className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                <span>9 Bode Thomas St, Surulere, Lagos, Nigeria</span>
              </li>
              <li className="flex items-center gap-3 text-slate-300">
                <Mail className="w-5 h-5 text-secondary flex-shrink-0" />
                <a href="mailto:info@travukwik.com" className="hover:text-white transition-colors">info@travukwik.com</a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button onClick={() => scrollToSection('about-us')} className="text-slate-400 hover:text-secondary transition-colors text-left">About Us</button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="text-slate-400 hover:text-secondary transition-colors text-left">Our Services</button>
              </li>
              <li>
                <button onClick={() => scrollToSection('destinations')} className="text-slate-400 hover:text-secondary transition-colors text-left">Destinations</button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-slate-500">
          <p>&copy; {new Date().getFullYear()} Travukwik. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};