import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { productManager } from '../../utils/productManager';
import Icon from '../Icon';
import styles from './index.module.less';

const ProductShowcase = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadFeaturedProducts = async () => {
      try {
        await productManager.loadData();
        const allProducts = productManager.getAllProducts();
        // 取前4个产品用于首页展示
        const featured = allProducts.slice(0, 4);
        setFeaturedProducts(featured);
      } catch (error) {
        console.error('加载产品数据失败:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadFeaturedProducts();
  }, []);

  if (isLoading) {
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
          <div className={styles.loadingContainer}>
            <div className={styles.loadingSpinner}>加载中...</div>
          </div>
        </div>
      </section>
    );
  }

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
          {featuredProducts.map((product) => (
            <div key={product.id} className={styles.productCard}>
              <div className={styles.productImage}>
                <img 
                  src={productManager.getProductMainImage(product)}
                  alt={product.name}
                  className="product-img"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'flex';
                  }}
                />
                <div 
                  className={styles.productPlaceholder}
                  style={{ 
                    background: 'linear-gradient(135deg, #c9a96e 0%, #f4e4bc 100%)', 
                    display: 'none' 
                  }}
                >
                  <span className="product-preview">产品预览</span>
                </div>
                <div className={styles.productOverlay}>
                  <span className={styles.productCategory}>{product.series}</span>
                </div>
              </div>
              
              <div className={styles.productContent}>
                <div className={styles.productHeader}>
                  <p className={styles.productSubtitle}>{product.subtitle}</p>
                  <h3 className={styles.productName}>{product.name}</h3>
                </div>
                
                <p className={styles.productDescription}>{product.description}</p>
                
                <div className={styles.productPrice}>
                  <span className={styles.price}>{productManager.formatPrice(product.price)}</span>
                </div>
                
                <ul className={styles.productFeatures}>
                  {productManager.getProductKeyFeatures(product).slice(0, 3).map((feature, idx) => (
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
