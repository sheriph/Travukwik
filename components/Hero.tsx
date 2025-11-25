import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/50 to-slate-900/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="inline-block mb-4 px-4 py-1 bg-secondary/20 backdrop-blur-sm rounded-full border border-secondary/50">
          <span className="text-secondary font-semibold tracking-wider uppercase text-sm">Your Gateway to the World</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Discover the World <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-white">
            Without Boundaries
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
          Experience seamless travel planning with Travukwik. From Lagos to the world, 
          we handle your flights, visas, and holidays so you can focus on the memories.
        </p>
        
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}
            className="group bg-secondary hover:bg-sky-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg shadow-sky-500/30 flex items-center justify-center gap-2"
          >
            Contact Us
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button 
             onClick={() => document.getElementById('destinations')?.scrollIntoView({behavior: 'smooth'})}
            className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-full font-bold text-lg transition-all"
          >
            Explore Destinations
          </button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
};