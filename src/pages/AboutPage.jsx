import React from 'react';
import Journey from '../components/Journey';
import Leadership from '../components/Leadership';
import WhyCling from '../components/WhyCling';
import CTA from '../components/CTA';

const AboutPage = () => {
  return (
    <div className="bg-background">
      {/* About Hero */}
      <section className="py-24 bg-surfaceLight text-center border-b border-border">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">About Cling Info Tech</h1>
          <p className="text-xl text-muted leading-relaxed">
            We are an end-to-end IT Solutions provider dedicated to enhancing skills, delivering dynamic innovations, and building long-term partnerships.
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="p-8 rounded-2xl bg-surface border border-border shadow-sm">
            <h2 className="text-2xl font-bold text-secondary mb-4">Our Vision</h2>
            <p className="text-muted leading-relaxed">
              At Cling, our goal is to deliver premier web design, development, and marketing solutions to our clients, fostering their profitable online growth while expanding our roster of satisfied clients. We are dedicated to enhancing various facets of our business, such as the quality of our work, customer service excellence, technology integration, dynamic innovation, and steadfast commitment.
            </p>
          </div>
          <div className="p-8 rounded-2xl bg-primary text-white shadow-xl">
            <h2 className="text-2xl font-bold text-accent mb-4">Our Mission</h2>
            <p className="text-white/80 leading-relaxed">
              We recognize the significance of staying at the forefront in today's swiftly changing digital environment. That's why we consistently allocate resources to enhance our personnel, refine our processes, and embrace cutting-edge technologies. Our commitment is to deliver top-notch services to our clients.
            </p>
          </div>
        </div>
      </section>

      <WhyCling />
      <Journey />
      <Leadership />
      <CTA />
    </div>
  );
};

export default AboutPage;
