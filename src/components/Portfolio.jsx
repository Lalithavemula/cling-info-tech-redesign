import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const projects = [
  { id: 1, name: "PhonoLogix", category: "Web", industry: "Communications", desc: "A robust communication platform.", color: "bg-blue-500", element: "dashboard" },
  { id: 2, name: "Mint Engage", category: "Mobile", industry: "Marketing", desc: "Interactive marketing engagement application.", color: "bg-indigo-500", element: "mobile" },
  { id: 3, name: "MatchMe", category: "Mobile", industry: "Social", desc: "Connecting people through a modern social interface.", color: "bg-pink-500", element: "mobile" },
  { id: 4, name: "Piaah", category: "Web", industry: "E-Commerce", desc: "Streamlined digital storefront.", color: "bg-orange-500", element: "store" },
  { id: 5, name: "Matrix", category: "ERP", industry: "Enterprise", desc: "Complex backend resource management system.", color: "bg-emerald-600", element: "dashboard" },
  { id: 6, name: "TaskFlow", category: "Web", industry: "Productivity", desc: "Task management and team collaboration tool.", color: "bg-purple-500", element: "board" },
  { id: 7, name: "Forescribe", category: "AI", industry: "Healthcare", desc: "AI-assisted transcription and analysis.", color: "bg-cyan-500", element: "ai" },
  { id: 8, name: "MyFSSAI", category: "Web", industry: "Government", desc: "Compliance management portal.", color: "bg-slate-600", element: "dashboard" }
];

const categories = ["All", "Web", "Mobile", "AI", "ERP"];

// Helper to generate abstract CSS UI Mockups for projects
const renderMockup = (element, color) => {
  switch (element) {
    case 'mobile':
      return (
        <div className="w-24 h-40 rounded-xl bg-white shadow-lg border-2 border-border p-1.5 flex flex-col gap-2 relative z-10 group-hover:scale-105 transition-transform duration-500">
          <div className="w-10 h-1 bg-border rounded-full mx-auto" />
          <div className={`w-full flex-1 rounded-md ${color} opacity-20`} />
          <div className={`w-full h-8 rounded-md ${color} opacity-80`} />
        </div>
      );
    case 'dashboard':
      return (
        <div className="w-48 h-32 rounded-lg bg-white shadow-lg border border-border p-2 flex flex-col relative z-10 group-hover:scale-105 transition-transform duration-500">
           <div className="flex gap-1 mb-2 border-b border-border pb-1">
             <div className="w-1.5 h-1.5 rounded-full bg-red-400" /><div className="w-1.5 h-1.5 rounded-full bg-yellow-400" /><div className="w-1.5 h-1.5 rounded-full bg-green-400" />
           </div>
           <div className="flex gap-2 flex-1">
             <div className="w-1/4 h-full bg-surfaceLight rounded" />
             <div className="w-3/4 flex flex-col gap-2">
                <div className={`w-full h-1/2 rounded ${color} opacity-80`} />
                <div className="flex gap-2 h-1/2">
                   <div className={`flex-1 rounded ${color} opacity-20`} />
                   <div className={`flex-1 rounded ${color} opacity-20`} />
                </div>
             </div>
           </div>
        </div>
      );
    case 'ai':
      return (
        <div className="w-32 h-32 rounded-full border-4 border-dashed border-white/50 flex items-center justify-center relative z-10 group-hover:rotate-12 transition-transform duration-500">
           <div className={`w-20 h-20 rounded-full ${color} opacity-80 shadow-lg flex items-center justify-center`}>
             <div className="w-10 h-10 rounded-full bg-white/30 animate-ping" />
           </div>
        </div>
      );
    case 'store':
      return (
        <div className="w-40 h-32 rounded-lg bg-white shadow-lg border border-border p-2 flex flex-col gap-2 relative z-10 group-hover:scale-105 transition-transform duration-500">
           <div className={`w-full h-1/2 rounded ${color} opacity-80`} />
           <div className="flex gap-2 h-1/2">
              <div className={`flex-1 rounded ${color} opacity-20`} />
              <div className={`flex-1 rounded ${color} opacity-20`} />
              <div className={`flex-1 rounded ${color} opacity-20`} />
           </div>
        </div>
      );
    case 'board':
      return (
        <div className="w-40 h-32 rounded-lg bg-white shadow-lg border border-border p-2 flex gap-2 relative z-10 group-hover:scale-105 transition-transform duration-500">
           <div className="flex-1 bg-surfaceLight rounded flex flex-col gap-1 p-1">
             <div className={`w-full h-4 rounded ${color} opacity-80`} />
             <div className={`w-full h-4 rounded ${color} opacity-20`} />
           </div>
           <div className="flex-1 bg-surfaceLight rounded flex flex-col gap-1 p-1">
             <div className={`w-full h-4 rounded ${color} opacity-20`} />
             <div className={`w-full h-4 rounded ${color} opacity-80`} />
           </div>
           <div className="flex-1 bg-surfaceLight rounded flex flex-col gap-1 p-1">
             <div className={`w-full h-4 rounded ${color} opacity-20`} />
           </div>
        </div>
      );
    default:
      return <div className={`w-32 h-32 rounded-xl ${color} opacity-50 relative z-10 group-hover:scale-105 transition-transform duration-500`} />;
  }
};

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section className="py-24 bg-surfaceLight">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">Work That Speaks for Itself</h2>
            <p className="text-lg text-muted">We partner with forward-thinking companies to build solutions that perform in the real world.</p>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                  activeFilter === cat 
                    ? 'bg-secondary text-white shadow-md' 
                    : 'bg-surface border border-border text-text hover:border-secondary hover:text-secondary'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                key={project.id}
                className="group flex flex-col rounded-2xl bg-surface border border-border overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              >
                {/* Visual Concept Mockup */}
                <div className={`relative h-64 overflow-hidden flex items-center justify-center bg-gradient-to-br from-surfaceLight to-border/50`}>
                   {/* Abstract background pattern */}
                   <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_center,black_1px,transparent_1px)] bg-[size:10px_10px]" />
                   
                   {/* Render the specific mockup representation */}
                   {renderMockup(project.element, project.color)}

                   <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-300 z-20 flex items-center justify-center">
                     <div className="w-12 h-12 rounded-full bg-white text-secondary shadow-lg flex items-center justify-center translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                       <ArrowUpRight className="w-5 h-5" />
                     </div>
                   </div>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-primary group-hover:text-secondary transition-colors">{project.name}</h3>
                      <p className="text-xs font-bold text-secondary uppercase tracking-wider mt-1">{project.industry}</p>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-blue-50 text-xs font-bold text-secondary border border-blue-100">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-muted text-sm leading-relaxed mt-2">{project.desc}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-16 text-center">
          <Link to="/portfolio" className="inline-flex items-center text-secondary font-bold hover:text-blue-700 transition-colors group">
            View All Projects
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Portfolio;
