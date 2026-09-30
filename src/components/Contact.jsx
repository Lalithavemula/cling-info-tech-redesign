import React, { useState } from 'react';
import { Mail, Phone, MapPin, Loader2 } from 'lucide-react';
import { CONTACT_INFO, OFFICES } from '../data/constants';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      e.target.reset();
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-surfaceLight">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Left Info */}
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">Let's talk about your next project.</h2>
            <p className="text-lg text-muted mb-12">Fill out the form and our team will get back to you within 24 hours.</p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="text-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-1">Email Us</h4>
                  <a href={`mailto:${CONTACT_INFO.email}`} className="text-muted hover:text-secondary transition-colors">{CONTACT_INFO.email}</a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="text-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-1">Call Us</h4>
                  <a href={`tel:${CONTACT_INFO.phone.replace(/\s+/g, '')}`} className="text-muted hover:text-secondary transition-colors">{CONTACT_INFO.phone}</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-1">Head Office</h4>
                  <p className="text-muted">{OFFICES[0].address}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-surface p-8 md:p-10 rounded-2xl shadow-xl border border-border">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">Message Sent!</h3>
                <p className="text-muted">Thank you for reaching out. We'll be in touch shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-primary mb-2">Full Name</label>
                    <input required type="text" className="w-full px-4 py-3 rounded-lg border border-border bg-surfaceLight focus:bg-surface focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-primary mb-2">Email Address</label>
                    <input required type="email" className="w-full px-4 py-3 rounded-lg border border-border bg-surfaceLight focus:bg-surface focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all" />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-primary mb-2">Phone</label>
                    <input required type="tel" className="w-full px-4 py-3 rounded-lg border border-border bg-surfaceLight focus:bg-surface focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-primary mb-2">Company</label>
                    <input required type="text" className="w-full px-4 py-3 rounded-lg border border-border bg-surfaceLight focus:bg-surface focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">Message</label>
                  <textarea required rows="4" className="w-full px-4 py-3 rounded-lg border border-border bg-surfaceLight focus:bg-surface focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all resize-none"></textarea>
                </div>

                <button 
                  disabled={isSubmitting}
                  type="submit" 
                  className="w-full py-4 rounded-lg bg-primary text-white font-bold hover:bg-primary/90 transition-colors flex items-center justify-center disabled:opacity-70"
                >
                  {isSubmitting ? <Loader2 className="w-6 h-6 animate-spin" /> : "Send Enquiry"}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
