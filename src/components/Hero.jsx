import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-background">
      {/* Abstract Background Elements (Light Theme) */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-50/50 to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-t from-gray-50 to-transparent" />
        
        {/* Subtle geometric lines */}
        <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="gridPattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M0 40V0H40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-border" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#gridPattern)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="max-w-2xl py-12 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50/80 text-xs font-bold text-secondary mb-8 border border-blue-100 uppercase tracking-widest backdrop-blur-sm shadow-sm"
          >
            BUILD • INNOVATE • SCALE
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-primary leading-[1.1] mb-6"
          >
            Turning Bold Ideas Into <span className="text-secondary">Digital Products</span> That Perform.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-muted mb-10 leading-relaxed max-w-xl"
          >
            From intelligent applications and scalable platforms to AI-powered solutions, Cling Info Tech helps businesses transform ideas into reliable digital experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4"
          >
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-secondary text-white font-semibold hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 group"
            >
              Start a Conversation
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/portfolio"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-surface text-primary font-semibold border-2 border-border hover:border-secondary/30 hover:bg-surfaceLight transition-all"
            >
              View Our Work
            </Link>
          </motion.div>
        </div>

        {/* Visual Content - Custom Technology Ecosystem (Light Theme) */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative h-[500px] lg:h-[600px] w-full hidden lg:block"
        >
           {/* Ecosystem Container */}
           <div className="absolute inset-0 flex items-center justify-center">
             
             {/* Central Dashboard Mockup */}
             <div className="absolute z-20 w-80 h-56 bg-surface rounded-2xl shadow-2xl border border-border overflow-hidden rotate-[-5deg] hover:rotate-0 transition-transform duration-700 ease-out flex flex-col">
               {/* Browser Header */}
               <div className="bg-surfaceLight border-b border-border p-3 flex gap-2 items-center">
                 <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                 <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                 <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                 <div className="w-full mx-4 h-3 bg-surface rounded" />
               </div>
               {/* Dashboard Content */}
               <div className="flex-1 p-4 flex gap-4">
                 <div className="w-16 flex flex-col gap-2 border-r border-border pr-2">
                   <div className="w-full h-4 bg-surfaceLight rounded" />
                   <div className="w-full h-4 bg-surfaceLight rounded" />
                   <div className="w-full h-4 bg-surfaceLight rounded" />
                 </div>
                 <div className="flex-1 flex flex-col gap-3">
                   <div className="w-full h-1/2 bg-blue-50 rounded-lg border border-blue-100 flex items-end p-2">
                      <svg viewBox="0 0 100 40" className="w-full h-full preserveAspectRatio-none drop-shadow-sm">
                        <path d="M0 40 Q 25 10, 50 30 T 100 5 L 100 40 Z" fill="#eff6ff" />
                        <path d="M0 40 Q 25 10, 50 30 T 100 5" fill="none" stroke="#2563eb" strokeWidth="2" />
                      </svg>
                   </div>
                   <div className="flex gap-2 h-1/2">
                     <div className="flex-1 bg-surfaceLight rounded-lg border border-border" />
                     <div className="flex-1 bg-surfaceLight rounded-lg border border-border" />
                   </div>
                 </div>
               </div>
             </div>

             {/* Floating Mobile Mockup */}
             <motion.div 
               animate={{ y: [0, -15, 0] }}
               transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
               className="absolute z-30 bottom-10 right-10 w-32 h-64 bg-surface rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.1)] border-4 border-white overflow-hidden flex flex-col"
             >
               <div className="w-full h-full bg-surfaceLight p-3 flex flex-col gap-3">
                  <div className="w-12 h-4 bg-border rounded-full mx-auto mb-2" />
                  <div className="w-full h-24 bg-white rounded-xl shadow-sm" />
                  <div className="w-full flex-1 bg-white rounded-xl shadow-sm flex flex-col justify-end p-2 gap-2">
                     <div className="w-full h-6 bg-blue-50 rounded" />
                     <div className="w-3/4 h-6 bg-blue-50 rounded" />
                  </div>
               </div>
             </motion.div>

             {/* Floating AI/Data Node */}
             <motion.div 
               animate={{ y: [0, 15, 0] }}
               transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
               className="absolute z-10 top-12 right-20 w-40 p-4 bg-surface/90 backdrop-blur rounded-2xl shadow-xl border border-blue-100 flex items-center gap-3"
             >
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-secondary font-bold">
                  AI
                </div>
                <div className="flex-1 space-y-2">
                  <div className="h-2 bg-border rounded w-full" />
                  <div className="h-2 bg-border rounded w-2/3" />
                </div>
             </motion.div>

           </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
