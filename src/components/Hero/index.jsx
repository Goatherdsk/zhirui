import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { Link } from 'react-router-dom';
import styles from './index.module.less';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoCanPlay, setVideoCanPlay] = useState(true);
  const [isWeChat, setIsWeChat] = useState(false);
  
  // 检测微信环境和视频播放能力
  useEffect(() => {
    const ua = navigator.userAgent.toLowerCase();
    const weChatEnv = ua.includes('micromessenger');
    setIsWeChat(weChatEnv);
    
    // 在微信环境中检测视频播放能力
    if (weChatEnv) {
      const video = document.createElement('video');
      video.muted = true;
      video.autoplay = true;
      video.playsInline = true;
      
      // 检测是否支持自动播放
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          setVideoCanPlay(false);
        });
      } else {
        setVideoCanPlay(false);
      }
    }
  }, []);
  
  // 检测移动端和动画偏好设置
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    const checkMotionPreference = () => {
      setPrefersReducedMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    };
    
    checkMobile();
    checkMotionPreference();
    
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // 视频加载处理
  const handleVideoLoad = useCallback(() => {
    setVideoLoaded(true);
  }, []);

  // 视频播放错误处理
  const handleVideoError = useCallback(() => {
    setVideoCanPlay(false);
  }, []);

  const slides = useMemo(() => [
    {
      title: "定义商务出行新标准",
      subtitle: "REDEFINING BUSINESS TRAVEL",
      description: "为精英人士打造的奢华移动空间，融合尖端科技与匠心工艺",
      buttonText: "探索产品",
      buttonLink: "/products",
      features: ["尊贵内饰", "智能科技", "专属定制"]
    },
    {
      title: "卓越工艺·无界奢华",
      subtitle: "EXCELLENCE WITHOUT BOUNDARIES", 
      description: "每一处细节都彰显品质，每一次出行都是尊贵体验",
      buttonText: "定制服务",
      buttonLink: "/services",
      features: ["手工工艺", "个性化", "VIP服务"]
    },
    {
      title: "智慧科技·尊享舒适",
      subtitle: "SMART TECHNOLOGY, PREMIUM COMFORT",
      description: "先进的智能系统与豪华内饰完美结合，开启未来出行方式",
      buttonText: "联系我们",
      buttonLink: "/contact",
      features: ["AI智能", "云端互联", "安全保障"]
    }
  ], []);

  // 优化的轮播控制
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  // 自动轮播（移动端减慢频率以提升性能）
  useEffect(() => {
    if (prefersReducedMotion) return;
    
    const interval = isMobile ? 8000 : 6000;
    const timer = setInterval(nextSlide, interval);

    return () => clearInterval(timer);
  }, [nextSlide, isMobile, prefersReducedMotion]);

  return (
    <section className={styles.hero}>
      {/* 视频背景或备用背景 */}
      {videoCanPlay && !isWeChat ? (
        <video 
          className={styles.videoBackground}
          autoPlay 
          muted 
          loop 
          playsInline
          preload={isMobile ? "none" : "metadata"}
          poster="/images/placeholder.jpg"
          onLoadedData={handleVideoLoad}
          onError={handleVideoError}
          style={{
            filter: isMobile ? 'brightness(0.3) contrast(1.2)' : 'grayscale(0.3) contrast(1.1) brightness(0.4)',
            opacity: videoLoaded ? 1 : 0.8
          }}
        >
          <source src="/videos/7.mp4" type="video/mp4" />
          您的浏览器不支持视频播放。
        </video>
      ) : (
        // 微信环境或视频无法播放时的备用背景
        <div className={`${styles.fallbackBackground} ${isWeChat ? styles.wechatBackground : ''}`}></div>
      )}
      
      {/* 遮罩层 - 移动端调高透明度 */}
      <div className={`${styles.heroOverlay} ${isMobile ? styles.mobileOverlay : ''}`}></div>
      
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
                  <Link to="/contact" className={`${styles.heroButton} ${styles.secondary}`}>
                    <span>联系我们</span>
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

      {/* 简化的滚动提示 */}
      {!isMobile && (
        <div className={styles.scrollIndicator} role="presentation" aria-hidden="true">
          <span>SCROLL</span>
          <div className={styles.scrollLine}></div>
        </div>
      )}
    </section>
  );
};

export default Hero;
