import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-background px-4">
      <div className="text-center">
        <h1 className="text-9xl font-black text-primary/10 mb-4">404</h1>
        <h2 className="text-3xl font-bold text-primary mb-6">Page Not Found</h2>
        <p className="text-muted mb-8 max-w-md mx-auto">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Link 
          to="/" 
          className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-white font-medium hover:bg-primary/90 transition-all"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
