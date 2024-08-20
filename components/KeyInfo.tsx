import React from 'react';

const KeyInfo: React.FC = () => {
  return (
    <section className="bg-white py-8">
      <div className="container mx-auto px-4 flex">
        <div className="w-1/3">
          <h2 className="text-3xl font-bold mb-4">KEY INFO</h2>
          <div className="space-y-2">
            <p className="font-bold text-xl">19 October 2024</p>
            <p className="font-bold text-xl">12noon - 9pm</p>
            <p className="font-bold text-xl">Gregory Park, Milton</p>
          </div>
        </div>
        <div className="w-2/3">
          {/* This space is intentionally left blank to match the layout */}
        </div>
      </div>
    </section>
  );
};

export default KeyInfo;