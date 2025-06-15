import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutAssamTea from '../components/AboutAssamTea';
import ProductDisplay from '../components/ProductDisplay';
import CustReview from '../components/CustReview';
import Wcu from '../components/Wcu';

const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutAssamTea />
      <ProductDisplay />
      <CustReview />
      <Wcu />
    </>
  );
};

export default Home;
