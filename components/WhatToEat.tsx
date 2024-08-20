import React from 'react';

const WhatToEat: React.FC = () => {
  return (
    <section className="bg-quinary py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-6">What&apos;s to eat?</h2>
        <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-xl font-bold mb-2">Food Stalls</h3>
            <ul className="list-disc list-inside">
              <li>BBQ</li>
              <li>Pizza</li>
              <li>Ice Cream</li>
              <li>Coffee</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-xl font-bold mb-2">Drinks</h3>
            <ul className="list-disc list-inside">
              <li>Soft Drinks</li>
              <li>Water</li>
              <li>Juice</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-xl font-bold mb-2">Cake Stall</h3>
            <p>Homemade cakes and treats available!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatToEat;