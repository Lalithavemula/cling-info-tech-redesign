import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { OFFICES, CONTACT_INFO } from '../data/constants';

const GlobalPresence = () => {
  return (
    <section className="py-24 bg-surfaceLight relative overflow-hidden">
      {/* Subtle map/globe representation */}
      <div className="absolute right-0 top-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_right,var(--accent)_0%,transparent_50%)] opacity-5 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">Growing Across Markets</h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">Expanding our global footprint across diverse markets and cultures</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {OFFICES.map((office) => (
            <div key={office.id} className="group rounded-2xl bg-surface border border-border overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              {/* Office Abstract Visual */}
              <div className="h-40 bg-blue-50 relative flex items-center justify-center overflow-hidden border-b border-border">
                <div className="absolute inset-0 opacity-20 bg-[linear-gradient(45deg,transparent_25%,rgba(37,99,235,0.1)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px]" />
                <MapPin className="w-12 h-12 text-secondary/30 transform group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute bottom-4 left-4 right-4 h-1/2 bg-gradient-to-t from-surface to-transparent opacity-50" />
              </div>
              
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-secondary shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary">{office.city}</h3>
                </div>
                
                <p className="text-muted text-sm leading-relaxed mb-6 h-16">{office.address}</p>
                
                <div className="space-y-3 pt-6 border-t border-border">
                  <a href={`tel:${CONTACT_INFO.phone.replace(/\s+/g, '')}`} className="flex items-center text-sm text-primary hover:text-secondary font-medium">
                    <Phone className="w-4 h-4 mr-3 text-secondary" />
                    {CONTACT_INFO.phone}
                  </a>
                  <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center text-sm text-primary hover:text-secondary font-medium">
                    <Mail className="w-4 h-4 mr-3 text-secondary" />
                    {CONTACT_INFO.email}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlobalPresence;
