import React from 'react';
import Hero from '../components/Hero';
import ProductShowcase from '../components/ProductShowcase';
import BrandAdvantages from '../components/BrandAdvantages';
import ServiceHighlights from '../components/ServiceHighlights';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <ProductShowcase />
      <BrandAdvantages />
      <ServiceHighlights />
    </div>
  );
};

export default Home;
