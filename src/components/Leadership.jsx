import React from 'react';
import { motion } from 'framer-motion';
import { LEADERSHIP } from '../data/constants';

const Leadership = () => {
  return (
    <section className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">Meet the Team Behind Cling</h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">Driven by passion, guided by expertise.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {LEADERSHIP.map((leader, index) => (
            <motion.div
              key={leader.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-2xl border border-border shadow-sm hover:shadow-xl transition-all duration-300 p-8 text-center flex flex-col items-center">
                <div className="relative w-40 h-40 mb-6">
                  {/* Elegant Placeholder for Missing Photos */}
                  <div className="absolute inset-0 rounded-full bg-blue-50 border-4 border-white shadow-lg overflow-hidden group-hover:scale-105 transition-transform duration-500">
                    <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center">
                      <span className="text-4xl font-bold text-secondary opacity-50">
                        {leader.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center shadow-md">
                     <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-1 group-hover:text-secondary transition-colors">{leader.name}</h3>
                <p className="text-sm font-semibold text-muted uppercase tracking-wider">{leader.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
