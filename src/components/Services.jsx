import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Smartphone, Globe, Database, ArrowRight } from 'lucide-react';
import { SERVICES } from '../data/constants';

const iconMap = {
  "App Development": <Smartphone className="w-8 h-8" />,
  "Web Design": <Globe className="w-8 h-8" />,
  "ERPs": <Database className="w-8 h-8" />
};

const Services = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Technology That Moves Your Business Forward</h2>
          <div className="w-20 h-1 bg-secondary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-8 bg-surface rounded-2xl border border-border shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
            >
              {/* Accent border on hover */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-secondary/20 rounded-2xl transition-colors duration-300 pointer-events-none" />
              
              <div className="w-16 h-16 rounded-xl bg-surfaceLight flex items-center justify-center text-secondary mb-6 group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                {iconMap[service.title]}
              </div>
              
              <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
              <p className="text-muted leading-relaxed mb-8 flex-grow">{service.description}</p>
              
              <Link to="/services" className="flex items-center text-secondary font-semibold text-sm mt-auto group-hover:text-primary transition-colors">
                Learn more 
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-2 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
