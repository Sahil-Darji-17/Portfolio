import React from 'react';

const ResumePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-8">
        <iframe src="/resume.pdf" className="w-full h-screen" />
      </div>
    </div>
  );
};

export default ResumePage; 