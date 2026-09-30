import React from 'react';
import Contact from '../components/Contact';
import GlobalPresence from '../components/GlobalPresence';

const ContactPage = () => {
  return (
    <div className="bg-background">
      <div className="pt-24 bg-surfaceLight border-b border-border text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4">Contact Us</h1>
      </div>
      <Contact />
      <GlobalPresence />
    </div>
  );
};

export default ContactPage;
