import React from 'react';
import Hero from '../../components/Hero';
import ProductShowcase from '../../components/ProductShowcase';
import BrandAdvantages from '../../components/BrandAdvantages';
import ServiceHighlights from '../../components/ServiceHighlights';
import styles from './index.module.less';
const Home = () => {
  return (
    <div className={styles.home}>
      <Hero />
      <ProductShowcase />
      <BrandAdvantages />
      <ServiceHighlights />
    </div>
  );
};

export default Home;
