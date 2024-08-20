import React from 'react';
import Head from 'next/head';
import Header from '../components/Hero';
import MainContent from '../components/MainContent';
import Rides from '../components/Rides';
import StageProgram from '../components/StageProgram';
import WhatToEat from '../components/WhatToEat';
import ThingsToDo from '../components/ThingsToDo';

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Fair on the Green</title>
        <meta name="description" content="Fair on the Green event information" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main>
        <MainContent />
        <Rides />
        <StageProgram />
        <ThingsToDo />
        <WhatToEat />
      </main>
      <footer className="bg-primary text-white py-4 text-center">
        <p>&copy; 2024 Fair on the Green. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;