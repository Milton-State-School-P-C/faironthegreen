import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Hero: React.FC = () => {
  return (
    <header className="bg-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="https://miltonss.eq.edu.au/" target="_blank" rel="noopener noreferrer" className="flex-shrink-0">
            <Image src="/images/mss-logo.png" alt="Milton State School" width={80} height={80} />
          </Link>
          <div className="flex flex-col items-center">
            <Image src="/images/fotg-logo.png" alt="Fair on the Green Logo" width={250} height={250} className="mb-4" />
            <h1 className="text-6xl font-bold text-center text-primary">Fair on the Green</h1>
          </div>
          <div className="flex-shrink-0 w-20"></div> {/* This empty div balances the layout */}
        </div>
      </div>
    </header>
  );
};

export default Hero;