import React from 'react';
import { motion } from 'framer-motion';
import { HeartPulse, Landmark, ShoppingBag, Utensils, Truck, Factory, GraduationCap, Home, Sprout } from 'lucide-react';

const industries = [
  { name: "Healthcare", icon: <HeartPulse className="w-8 h-8" />, color: "from-teal-500 to-emerald-500" },
  { name: "Finance", icon: <Landmark className="w-8 h-8" />, color: "from-blue-600 to-indigo-600" },
  { name: "Retail", icon: <ShoppingBag className="w-8 h-8" />, color: "from-pink-500 to-rose-500" },
  { name: "Food & Hospitality", icon: <Utensils className="w-8 h-8" />, color: "from-orange-400 to-amber-500" },
  { name: "Transportation", icon: <Truck className="w-8 h-8" />, color: "from-slate-600 to-gray-700" },
  { name: "Manufacturing", icon: <Factory className="w-8 h-8" />, color: "from-zinc-500 to-stone-600" },
  { name: "Education", icon: <GraduationCap className="w-8 h-8" />, color: "from-violet-500 to-purple-600" },
  { name: "Real Estate", icon: <Home className="w-8 h-8" />, color: "from-sky-500 to-blue-500" },
  { name: "Agriculture", icon: <Sprout className="w-8 h-8" />, color: "from-lime-500 to-green-600" }
];

const Industries = () => {
  return (
    <section className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">Built for Real-World Industries</h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">We deliver specialized digital solutions tailored to the unique operational requirements of diverse sectors.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group relative h-48 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              {/* Dynamic Abstract Background replacing generic stock photos */}
              <div className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-90 group-hover:scale-110 transition-transform duration-700 ease-out`} />
              
              {/* Overlay pattern for texture */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff1a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff1a_1px,transparent_1px)] bg-[size:16px_16px]" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />

              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="text-white mb-2 transform group-hover:-translate-y-2 transition-transform duration-300">
                  {industry.icon}
                </div>
                <h3 className="text-xl font-bold text-white transform group-hover:-translate-y-1 transition-transform duration-300">{industry.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
