import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../data/constants';
import { Smartphone, Globe, Database, PenTool, LayoutGrid, Cpu, Users } from 'lucide-react';
import CTA from '../components/CTA';

const fullServices = [
  ...SERVICES,
  { id: 4, title: "AI / ML", description: "Transforming businesses with intelligent automation and predictive analytics." },
  { id: 5, title: "Digital Marketing", description: "Data-driven marketing strategies to accelerate growth and digital presence." },
  { id: 6, title: "3D Animation", description: "Immersive visual experiences and product visualizations." },
  { id: 7, title: "Custom Software", description: "Bespoke software development tailored precisely to your operational needs." },
  { id: 8, title: "Dedicated Development", description: "Extend your team with our expert developers and tech leads." }
];

const getIcon = (title) => {
  if (title.includes("App")) return <Smartphone className="w-8 h-8" />;
  if (title.includes("Web")) return <Globe className="w-8 h-8" />;
  if (title.includes("ERP")) return <Database className="w-8 h-8" />;
  if (title.includes("AI")) return <Cpu className="w-8 h-8" />;
  if (title.includes("Marketing")) return <LayoutGrid className="w-8 h-8" />;
  if (title.includes("3D")) return <PenTool className="w-8 h-8" />;
  if (title.includes("Dedicated")) return <Users className="w-8 h-8" />;
  return <LayoutGrid className="w-8 h-8" />;
};

const ServicesPage = () => {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="py-24 bg-surfaceLight border-b border-border relative overflow-hidden">
         <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(37,99,235,0.05)_0%,transparent_60%)]" />
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold mb-6 text-primary"
            >
              Technology Built Around Your Business
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-muted max-w-3xl mx-auto"
            >
              Comprehensive digital solutions to modernize operations, engage users, and accelerate growth.
            </motion.p>
         </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {fullServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group p-8 bg-surface rounded-2xl border border-border shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
              >
                <div className="w-16 h-16 rounded-xl bg-surfaceLight flex items-center justify-center text-secondary mb-6 group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                  {getIcon(service.title)}
                </div>
                
                <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
                <p className="text-muted leading-relaxed mb-8 flex-grow">{service.description}</p>
                
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
};

export default ServicesPage;
