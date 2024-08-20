import React from 'react';

const StageProgram: React.FC = () => {
  return (
    <section className="bg-quaternary py-8 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-6">Stage Program</h2>
        <div className="bg-white text-black p-4 rounded-lg max-w-2xl mx-auto">
          <p className="text-center text-xl mb-4">
            Insert stage program schedule here
          </p>
          {/* You can add a table or list of performances here */}
        </div>
      </div>
    </section>
  );
};

export default StageProgram;