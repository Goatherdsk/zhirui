import React, { useState, useEffect } from 'react';
import Icon from '../Icon';
import styles from './index.module.less';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    // 初始检查
    toggleVisibility();

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <button
      onClick={scrollToTop}
      style={{
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        background: 'linear-gradient(135deg, #c9a96e 0%, #d4af37 100%)',
        border: 'none',
        color: '#000',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
        boxShadow: '0 4px 20px rgba(201, 169, 110, 0.4)',
        transition: 'all 0.3s ease',
        fontSize: '16px',
        fontWeight: 'bold'
      }}
      onMouseOver={(e) => {
        e.target.style.transform = 'scale(1.1)';
        e.target.style.boxShadow = '0 6px 25px rgba(201, 169, 110, 0.6)';
      }}
      onMouseOut={(e) => {
        e.target.style.transform = 'scale(1)';
        e.target.style.boxShadow = '0 4px 20px rgba(201, 169, 110, 0.4)';
      }}
      title="回到顶部"
    >
      ↑
    </button>
  );
};

export default BackToTop;
