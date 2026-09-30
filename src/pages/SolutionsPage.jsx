import React from 'react';
import { motion } from 'framer-motion';
import CTA from '../components/CTA';

const SolutionsPage = () => {
  return (
    <div className="bg-background">
      <section className="py-24 bg-surfaceLight text-primary text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Enterprise-Grade Solutions</h1>
          <p className="text-xl text-muted">Specialized platforms designed to solve complex business challenges.</p>
        </div>
      </section>

      <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
        {/* Web Platforms */}
        <section className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="w-full lg:w-1/2 space-y-6">
            <h2 className="text-3xl font-bold text-primary">Web Platforms</h2>
            <p className="text-lg text-muted leading-relaxed">
              We engineer scalable, high-performance web applications using modern React architecture, robust APIs, and cloud-native infrastructure.
            </p>
            <ul className="space-y-3">
              {['SaaS Development', 'Custom Portals', 'E-Commerce Solutions'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-primary font-medium">
                  <span className="w-2 h-2 rounded-full bg-secondary" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="rounded-xl border border-border shadow-2xl bg-surface overflow-hidden">
              {/* Browser Mockup */}
              <div className="bg-surfaceLight p-3 border-b border-border flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="p-6 grid grid-cols-3 gap-4 bg-surface h-64">
                <div className="col-span-1 bg-surfaceLight rounded-lg border border-border" />
                <div className="col-span-2 space-y-4">
                  <div className="h-24 bg-surfaceLight rounded-lg border border-border flex items-end p-4">
                     <div className="w-full h-1/2 bg-gradient-to-t from-secondary/20 to-transparent border-t-2 border-secondary" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="h-16 bg-surfaceLight rounded-lg border border-border" />
                    <div className="h-16 bg-surfaceLight rounded-lg border border-border" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mobile Applications */}
        <section className="flex flex-col lg:flex-row-reverse gap-12 items-center">
          <div className="w-full lg:w-1/2 space-y-6">
            <h2 className="text-3xl font-bold text-primary">Mobile Applications</h2>
            <p className="text-lg text-muted leading-relaxed">
              Native iOS, Android, and cross-platform applications designed with user-centric interfaces and powerful backends.
            </p>
            <ul className="space-y-3">
              {['iOS & Android Native', 'React Native', 'App Optimization'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-primary font-medium">
                  <span className="w-2 h-2 rounded-full bg-accent" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center">
            {/* Phone Mockup */}
            <div className="w-64 h-[500px] border-[8px] border-primary rounded-[3rem] bg-surface relative overflow-hidden shadow-2xl">
               <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-primary rounded-b-xl z-20" />
               <div className="absolute inset-0 bg-gradient-to-b from-secondary/10 to-surface p-4 pt-12 flex flex-col gap-4">
                 <div className="w-full h-32 rounded-xl bg-surface shadow-sm border border-border" />
                 <div className="w-full h-16 rounded-xl bg-surface shadow-sm border border-border" />
                 <div className="w-full h-16 rounded-xl bg-surface shadow-sm border border-border" />
               </div>
            </div>
          </div>
        </section>

      </div>
      <CTA />
    </div>
  );
};

export default SolutionsPage;
