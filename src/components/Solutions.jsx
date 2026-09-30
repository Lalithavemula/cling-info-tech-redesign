import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Monitor, AppWindow, Cpu } from 'lucide-react';

const solutions = [
  {
    title: "Web Platforms",
    description: "Robust, scalable, and responsive web applications built with modern frameworks to deliver seamless digital experiences.",
    tags: ["React", "Node.js", "Cloud"],
    icon: <Monitor className="w-6 h-6" />
  },
  {
    title: "Mobile Applications",
    description: "Native and cross-platform mobile experiences designed to engage users and perform reliably across all devices.",
    tags: ["iOS", "Android", "React Native"],
    icon: <AppWindow className="w-6 h-6" />
  },
  {
    title: "Business / ERP Systems",
    description: "Custom enterprise resource planning tools that integrate your back and front office applications for streamlined operations.",
    tags: ["Custom Software", "Database", "Analytics"],
    icon: <Cpu className="w-6 h-6" />
  }
];

const Solutions = () => {
  return (
    <section id="solutions" className="py-24 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">From Idea to Impact</h2>
          <p className="text-xl text-white/60 max-w-2xl">We build specialized solutions tailored to your unique operational requirements.</p>
        </div>

        <div className="space-y-12">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col lg:flex-row gap-8 lg:gap-16 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* Abstract Visual Placeholder for Solution */}
              <div className="w-full lg:w-1/2 aspect-video bg-surfaceLight/10 rounded-2xl border border-white/10 flex items-center justify-center overflow-hidden relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="w-24 h-24 rounded-full bg-white/5 flex items-center justify-center text-white/50 group-hover:scale-110 group-hover:text-white transition-all duration-500">
                  {solution.icon}
                </div>
              </div>

              {/* Content */}
              <div className="w-full lg:w-1/2 space-y-6">
                <h3 className="text-3xl font-bold">{solution.title}</h3>
                <p className="text-lg text-white/70 leading-relaxed">{solution.description}</p>
                <div className="flex flex-wrap gap-2">
                  {solution.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-white/10 text-sm font-medium text-white/90 border border-white/5">
                      {tag}
                    </span>
                  ))}
                </div>
                <Link to="/solutions" className="flex w-max items-center text-accent hover:text-white transition-colors group mt-4 font-semibold">
                  Explore Solution
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
