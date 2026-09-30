import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Sparkles, Zap } from 'lucide-react';

const features = [
  {
    title: "Computer Vision",
    description: "Advanced image and video analysis systems for automated surveillance, quality control, and visual data extraction.",
    icon: <Sparkles className="w-6 h-6 text-accent" />
  },
  {
    title: "Predictive Intelligence",
    description: "Machine learning models that forecast trends, optimize operations, and provide actionable business insights from historical data.",
    icon: <Brain className="w-6 h-6 text-accent" />
  },
  {
    title: "Intelligent Automation",
    description: "Smart workflow automation systems that reduce manual effort, minimize errors, and scale operational efficiency.",
    icon: <Zap className="w-6 h-6 text-accent" />
  }
];

const AIShowcase = () => {
  return (
    <section className="py-24 bg-surface relative overflow-hidden">
      {/* Decorative background blur */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Building Smarter With AI</h2>
            <p className="text-lg text-muted mb-10 leading-relaxed">
              From intelligent automation to computer vision and predictive systems, we build AI solutions designed around real business needs.
            </p>

            <div className="space-y-8">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-5"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-primary mb-2">{feature.title}</h4>
                    <p className="text-muted leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2 relative aspect-square max-w-md mx-auto w-full"
          >
            {/* Abstract AI Visual */}
            <div className="absolute inset-0 bg-primary rounded-3xl overflow-hidden shadow-2xl border border-border">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px]" />
              
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border border-secondary/30 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full border border-accent/40 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-secondary to-accent animate-pulse shadow-[0_0_40px_rgba(34,211,238,0.5)]" />
                </div>
              </div>

              {/* Orbital nodes */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/2 left-1/2 w-48 h-48 -ml-24 -mt-24 rounded-full border border-transparent"
              >
                <div className="w-3 h-3 bg-secondary rounded-full absolute top-0 left-1/2 -ml-1.5 shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
              </motion.div>
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/2 left-1/2 w-64 h-64 -ml-32 -mt-32 rounded-full border border-transparent"
              >
                <div className="w-2 h-2 bg-accent rounded-full absolute bottom-1/4 right-0 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AIShowcase;
