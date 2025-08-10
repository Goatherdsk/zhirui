import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './index.module.less';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: "定义商务出行新标准",
      subtitle: "REDEFINING BUSINESS TRAVEL",
      description: "为精英人士打造的奢华移动空间，融合尖端科技与匠心工艺",
      buttonText: "探索产品",
      buttonLink: "/products",
      backgroundGradient: "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #2d2d2d 100%)",
      features: ["尊贵内饰", "智能科技", "专属定制"]
    },
    {
      title: "卓越工艺·无界奢华",
      subtitle: "EXCELLENCE WITHOUT BOUNDARIES", 
      description: "每一处细节都彰显品质，每一次出行都是尊贵体验",
      buttonText: "定制服务",
      buttonLink: "/services",
      backgroundGradient: "linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 50%, #2d2d2d 100%)",
      features: ["手工工艺", "个性化", "VIP服务"]
    },
    {
      title: "智慧科技·尊享舒适",
      subtitle: "SMART TECHNOLOGY, PREMIUM COMFORT",
      description: "先进的智能系统与豪华内饰完美结合，开启未来出行方式",
      buttonText: "联系我们",
      buttonLink: "/contact",
      backgroundGradient: "linear-gradient(135deg, #2d2d2d 0%, #1a1a1a 50%, #0a0a0a 100%)",
      features: ["AI智能", "云端互联", "安全保障"]
    }
  ];

  // 自动轮播
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className={styles.hero}>
      {/* 视频背景 */}
      <video 
        className={styles.videoBackground}
        autoPlay 
        muted 
        loop 
        playsInline
      >
        <source src="/videos/7.mp4" type="video/mp4" />
      </video>
      
      {/* 高端遮罩层 */}
      <div className={styles.heroOverlay}></div>
      
      <div className={styles.heroSlider}>
        {slides.map((slide, index) => (
          <div 
            key={index}
            className={`${styles.heroSlide} ${index === currentSlide ? styles.active : ''}`}
          >
            <div className={styles.heroContent}>
              <div className={styles.heroText}>
                <p className={styles.subtitle}>{slide.subtitle}</p>
                <h1 className={styles.title}>{slide.title}</h1>
                <p className={styles.description}>{slide.description}</p>
                
                <div className={styles.heroActions}>
                  <Link to={slide.buttonLink} className={`${styles.heroButton} ${styles.primary}`}>
                    <span>{slide.buttonText}</span>
                  </Link>
                  <Link to="/test-drive" className={`${styles.heroButton} ${styles.secondary}`}>
                    <span>预约试驾</span>
                  </Link>
                </div>
                
                {/* 特色标签 */}
                <div className={styles.heroFeatures}>
                  {slide.features.map((feature, idx) => (
                    <span key={idx} className={styles.featureTag}>
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 轮播指示器 */}
      <div className={styles.heroIndicators}>
        {slides.map((_, index) => (
          <button
            key={index}
            className={`${styles.indicator} ${index === currentSlide ? styles.active : ''}`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`切换到第 ${index + 1} 张幻灯片`}
          />
        ))}
      </div>

      {/* 滚动提示 */}
      <div className={styles.scrollIndicator}>
        <span>SCROLL</span>
        <div className={styles.scrollLine}></div>
      </div>
    </section>
  );
};

export default Hero;
