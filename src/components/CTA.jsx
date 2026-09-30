import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-24 bg-surface relative overflow-hidden">
      {/* Light Clean CTA Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-blue-50/50" />
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-100/50 to-transparent blur-3xl" />
      </div>
      
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <div className="w-20 h-20 bg-white rounded-2xl shadow-lg border border-border flex items-center justify-center mx-auto mb-8 text-secondary">
          <MessageSquare className="w-10 h-10" />
        </div>
        
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-primary mb-6 tracking-tight">
          Have an Idea? <span className="text-secondary">Let's Build It.</span>
        </h2>
        <p className="text-xl text-muted mb-12 max-w-2xl mx-auto leading-relaxed">
          Tell us what you're building. We'll help turn the idea into a practical digital solution.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/contact" className="w-full sm:w-auto px-8 py-4 rounded-xl bg-secondary text-white font-bold hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center">
            Start a Conversation
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;
