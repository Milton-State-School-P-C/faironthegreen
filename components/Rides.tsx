import React from 'react';

const Rides: React.FC = () => {
  return (
    <section className="bg-secondary py-8 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-6">Rides</h2>
        <p className="text-center text-xl mb-4">
          Ride passes are available to pre-purchase at an early bird rate
        </p>
        <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
          <div className="bg-primary p-4 rounded-lg">
            <p className="font-bold">Under 110cm - $35</p>
          </div>
          <div className="bg-primary p-4 rounded-lg">
            <p className="font-bold">110cm & over - $40</p>
          </div>
        </div>
        <p className="text-center mt-4 text-xl">
          Single Ride tickets - $7
        </p>
      </div>
    </section>
  );
};

export default Rides;