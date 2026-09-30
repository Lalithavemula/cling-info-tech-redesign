import React from 'react';
import { motion } from 'framer-motion';
import { STATS } from '../data/constants';

const Stats = () => {
  return (
    <section className="py-24 bg-primary text-white relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-secondary/30 to-transparent blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {STATS.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-white to-white/60 mb-2">
                {stat.number}
              </div>
              <div className="text-sm md:text-base font-medium text-white/70">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
