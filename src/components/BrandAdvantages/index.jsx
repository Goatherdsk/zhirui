import React from 'react';
import Icon from '../Icon';
import styles from './index.module.less';
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
    <section className={styles.brandAdvantages}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <p className={styles.sectionSubtitle}>WHY CHOOSE US</p>
          <h2 className={styles.sectionTitle}>品牌优势</h2>
          <p className={styles.sectionDescription}>
            凭借卓越的工艺、优质的材料和完善的服务，为您提供无与伦比的商务出行体验
          </p>
        </div>

        <div className={styles.advantagesGrid}>
          {advantages.map((advantage, index) => (
            <div key={advantage.id} className={styles.advantageCard} data-index={index}>
              <div className={styles.advantageNumber}>
                {advantage.number}
              </div>
              
              <div className={styles.advantageContent}>
                <p className={styles.advantageSubtitle}>{advantage.subtitle}</p>
                <h3 className={styles.advantageTitle}>{advantage.title}</h3>
                <p className={styles.advantageDescription}>{advantage.description}</p>
                
                <div className={styles.advantageStats}>
                  <span className={styles.statsNumber}>{advantage.stats}</span>
                  <span className={styles.statsLabel}>{advantage.statsLabel}</span>
                </div>
              </div>

              <div className={styles.advantageDecoration}>
                <div className={styles.decorationDot}></div>
                <div className={styles.decorationLine}></div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.advantagesCta}>
          <div className={styles.ctaContent}>
            <h3>想了解更多品牌故事？</h3>
            <p>探索智锐商务车的发展历程和企业文化</p>
            <a href="/about" className={styles.ctaLink}>
              品牌故事
              <span className={styles.linkArrow}>
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
