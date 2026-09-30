import React from 'react';
import Portfolio from '../components/Portfolio';
import CTA from '../components/CTA';

const PortfolioPage = () => {
  return (
    <div className="bg-background">
      <div className="pt-24 pb-12 bg-surfaceLight border-b border-border text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Our Work</h1>
        <p className="text-muted text-lg max-w-2xl mx-auto">Explore our portfolio of digital products and enterprise solutions.</p>
      </div>
      <Portfolio />
      <CTA />
    </div>
  );
};

export default PortfolioPage;
