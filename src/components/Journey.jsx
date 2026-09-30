import React from 'react';
import { motion } from 'framer-motion';
import { MILESTONES } from '../data/constants';

const Journey = () => {
  return (
    <section className="py-24 bg-surface border-y border-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">Our Journey</h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">A journey as dynamic as us. From our foundation to taking on ambitious projects.</p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-border -translate-y-1/2 z-0" />
          <div className="md:hidden absolute top-0 left-6 w-0.5 h-full bg-border z-0" />

          <div className="grid md:grid-cols-4 gap-8 md:gap-4 relative z-10">
            {MILESTONES.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative pl-14 md:pl-0"
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 md:left-1/2 top-0 md:top-1/2 w-4 h-4 rounded-full bg-secondary ring-4 ring-blue-50 md:-translate-x-1/2 md:-translate-y-1/2 shadow-sm" />
                
                {/* Timeline Content */}
                <div className={`md:text-center mt-[-4px] md:mt-0 bg-surface p-6 rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow relative ${index % 2 === 0 ? 'md:-mt-24 md:mb-12' : 'md:mt-12'}`}>
                  <h3 className="text-3xl font-black text-secondary mb-3">{milestone.year}</h3>
                  <p className="text-muted text-sm leading-relaxed">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
