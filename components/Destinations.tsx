import React from 'react';
import { Star, MapPin } from 'lucide-react';
import { Destination } from '../types';

const destinations: Destination[] = [
  {
    id: 1,
    name: 'Santorini',
    country: 'Greece',
    price: '$1,200',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Dubai',
    country: 'UAE',
    price: '$950',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1512453979798-5ea936a7fe11?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'Bali',
    country: 'Indonesia',
    price: '$1,100',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 4,
    name: 'Paris',
    country: 'France',
    price: '$1,500',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 5,
    name: 'Maldives',
    country: 'Maldives',
    price: '$1,800',
    rating: 5.0,
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 6,
    name: 'London',
    country: 'UK',
    price: '$1,300',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 7,
    name: 'New York',
    country: 'USA',
    price: '$1,600',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1496442226666-8d4a0e62e6e9?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 8,
    name: 'Zanzibar',
    country: 'Tanzania',
    price: '$900',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1586861635167-e5223aeb4227?q=80&w=800&auto=format&fit=crop',
  }
];

export const Destinations: React.FC = () => {
  return (
    <section id="destinations" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-primary font-bold tracking-wide uppercase mb-2">Popular Choice</h2>
            <h3 className="text-4xl font-bold text-slate-900">Top Destinations</h3>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((dest) => (
            <div key={dest.id} className="group rounded-2xl overflow-hidden shadow-lg cursor-pointer relative">
              <div className="h-80 overflow-hidden">
                <img 
                  src={dest.image} 
                  alt={dest.name} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90"></div>
              
              <div className="absolute bottom-0 left-0 w-full p-6 text-white">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="text-xl font-bold">{dest.name}</h4>
                    <div className="flex items-center gap-1 text-sm text-gray-300">
                      <MapPin size={14} />
                      <span>{dest.country}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 bg-white/20 backdrop-blur-sm px-2 py-1 rounded-lg">
                    <Star size={14} className="text-yellow-400 fill-yellow-400" />
                    <span className="text-sm font-bold">{dest.rating}</span>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-4 pt-4 border-t border-white/20">
                  <span className="text-sm text-gray-300">Starting from</span>
                  <span className="text-xl font-bold text-secondary">{dest.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};