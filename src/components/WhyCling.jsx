import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Code2, Cpu, LineChart, Target, Zap } from 'lucide-react';

const reasons = [
  { title: "End-to-End Development", desc: "From initial concept and design to deployment and scaling.", icon: <Code2 className="w-6 h-6" /> },
  { title: "Business-Focused Solutions", desc: "We build technology that directly supports your operational goals.", icon: <Target className="w-6 h-6" /> },
  { title: "Modern Technology", desc: "Utilizing the latest frameworks for optimal performance and security.", icon: <Cpu className="w-6 h-6" /> },
  { title: "Scalable Architecture", desc: "Systems designed to grow seamlessly alongside your business.", icon: <Building2 className="w-6 h-6" /> },
  { title: "Dedicated Expertise", desc: "Access to a specialized team of engineers and digital strategists.", icon: <Zap className="w-6 h-6" /> },
  { title: "Long-Term Partnership", desc: "Ongoing support and iteration to ensure sustained success.", icon: <LineChart className="w-6 h-6" /> }
];

const WhyCling = () => {
  return (
    <section className="py-24 bg-surfaceLight">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">Why Businesses Choose Cling</h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">We combine technical excellence with strategic business understanding.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-surface border border-border shadow-sm hover:shadow-md transition-shadow group"
            >
              <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center text-secondary mb-6 group-hover:bg-secondary group-hover:text-white transition-colors">
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">{reason.title}</h3>
              <p className="text-muted leading-relaxed">{reason.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyCling;
