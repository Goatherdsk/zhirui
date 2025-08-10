import React from 'react';
import { Link } from 'react-router-dom';
import { downloadedResources, getProductCarousel } from '../../utils/downloadedResources';
import Icon from '../Icon';
import styles from './index.module.less';

const ProductShowcase = () => {
  const productImages = getProductCarousel();
  
  const products = [
    {
      id: 1,
      name: "智锐·行政版",
      subtitle: "Executive Series",
      description: "为企业高管打造的移动办公空间，集商务、舒适、科技于一体",
      features: ["独立办公区域", "商务级音响系统", "隐私玻璃", "无线充电"],
      image: productImages[0] || "/images/downloaded/1751077930430153.jpg",
      gradient: "linear-gradient(135deg, #c9a96e 0%, #f4e4bc 100%)",
      category: "行政商务"
    },
    {
      id: 2,
      name: "智锐·尊享版",
      subtitle: "Premium Series", 
      description: "奢华内饰与先进科技的完美融合，为VIP客户提供至尊体验",
      features: ["真皮座椅", "按摩功能", "恒温系统", "娱乐系统"],
      image: productImages[1] || "/images/downloaded/1751092257777798.jpg",
      gradient: "linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",
      category: "豪华定制"
    },
    {
      id: 3,
      name: "智锐·科技版",
      subtitle: "Tech Series",
      description: "搭载最新智能科技，实现车内设备无缝连接与智能控制",
      features: ["AI语音助手", "智能互联", "自动驾驶辅助", "云端服务"],
      image: productImages[2] || "/images/downloaded/1751092160154273.jpg",
      gradient: "linear-gradient(135deg, #2d2d2d 0%, #1a1a1a 100%)",
      category: "智能科技"
    },
    {
      id: 4,
      name: "智锐·至尊版",
      subtitle: "Ultimate Series",
      description: "匠心工艺与顶级配置的巅峰之作，为追求极致的您量身定制",
      features: ["手工真皮内饰", "钻石级音响", "星空顶棚", "专属定制"],
      image: productImages[3] || "/images/downloaded/1751092097915753.jpg",
      gradient: "linear-gradient(135deg, #8b5a3c 0%, #d4af37 100%)",
      category: "限量典藏"
    }
  ];

  return (
    <section className={styles.productShowcase}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <p className={styles.sectionSubtitle}>OUR PRODUCTS</p>
          <h2 className={styles.sectionTitle}>精品车型</h2>
          <p className={styles.sectionDescription}>
            每一款车型都经过精心设计，满足不同商务场景的需求
          </p>
        </div>

        <div className={styles.productsGrid}>
          {products.map((product) => (
            <div key={product.id} className={styles.productCard}>
              <div className={styles.productImage}>
                <img 
                  src={product.image}
                  alt={product.name}
                  className="product-img"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'flex';
                  }}
                />
                <div 
                  className={styles.productPlaceholder}
                  style={{ background: product.gradient, display: 'none' }}
                >
                  <span className="product-preview">产品预览</span>
                </div>
                <div className={styles.productOverlay}>
                  <span className={styles.productCategory}>{product.category}</span>
                </div>
              </div>
              
              <div className={styles.productContent}>
                <div className={styles.productHeader}>
                  <p className={styles.productSubtitle}>{product.subtitle}</p>
                  <h3 className={styles.productName}>{product.name}</h3>
                </div>
                
                <p className={styles.productDescription}>{product.description}</p>
                
                <ul className={styles.productFeatures}>
                  {product.features.map((feature, idx) => (
                    <li key={idx} className={styles.featureItem}>
                      <span className={styles.featureIcon}>
                        <Icon type="check" size="14px" color="var(--accent-gold)" />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link to={`/products/${product.id}`} className={styles.productLink}>
                  了解更多
                  <span className={styles.linkArrow}>
                    <Icon type="arrow" size="16px" color="currentColor" />
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.showcaseFooter}>
          <Link to="/products" className={styles.viewAllBtn}>
            查看全部产品
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
