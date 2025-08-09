import React from 'react';
import Icon from '../Icon';
import './index.css';

const BrandAdvantages = () => {
  const advantages = [
    {
      id: 1,
      number: '01',
      title: '匠心工艺',
      subtitle: 'CRAFTSMANSHIP',
      description: '每一辆车都经过100+道工序精心打造，追求细节完美',
      stats: '100+',
      statsLabel: '道工序'
    },
    {
      id: 2,
      number: '02',
      title: '顶级材料',
      subtitle: 'PREMIUM MATERIALS',
      description: '选用全球顶级供应商的优质材料，确保持久耐用',
      stats: '99.9%',
      statsLabel: '品质率'
    },
    {
      id: 3,
      number: '03',
      title: '智能科技',
      subtitle: 'SMART TECHNOLOGY',
      description: '集成最新AI技术和物联网系统，打造智能出行体验',
      stats: '50+',
      statsLabel: '智能功能'
    },
    {
      id: 4,
      number: '04',
      title: '专属服务',
      subtitle: 'EXCLUSIVE SERVICE',
      description: '提供24/7全天候专属服务，确保您的每次出行无忧',
      stats: '24/7',
      statsLabel: '全天服务'
    }
  ];

  return (
    <section className="brand-advantages">
      <div className="container">
        <div className="section-header">
          <p className="section-subtitle">WHY CHOOSE US</p>
          <h2 className="section-title">品牌优势</h2>
          <p className="section-description">
            凭借卓越的工艺、优质的材料和完善的服务，为您提供无与伦比的商务出行体验
          </p>
        </div>

        <div className="advantages-grid">
          {advantages.map((advantage, index) => (
            <div key={advantage.id} className="advantage-card" data-index={index}>
              <div className="advantage-number">
                {advantage.number}
              </div>
              
              <div className="advantage-content">
                <p className="advantage-subtitle">{advantage.subtitle}</p>
                <h3 className="advantage-title">{advantage.title}</h3>
                <p className="advantage-description">{advantage.description}</p>
                
                <div className="advantage-stats">
                  <span className="stats-number">{advantage.stats}</span>
                  <span className="stats-label">{advantage.statsLabel}</span>
                </div>
              </div>

              <div className="advantage-decoration">
                <div className="decoration-dot"></div>
                <div className="decoration-line"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="advantages-cta">
          <div className="cta-content">
            <h3>想了解更多品牌故事？</h3>
            <p>探索智睿商务车的发展历程和企业文化</p>
            <a href="/about" className="cta-link">
              品牌故事
              <span className="link-arrow">
                <Icon type="arrow" size="16px" color="currentColor" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandAdvantages;
