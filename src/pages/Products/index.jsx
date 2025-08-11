import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import Loading from '../../components/Loading';
import PageHeader from '../../components/PageHeader';
import Icon from '../../components/Icon';
import { productManager, categoryConfig, badgeConfig } from '../../utils/productManager';
import styles from './index.module.less';
const Products = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);

  // 加载产品数据
  useEffect(() => {
    const loadProducts = async () => {
      try {
        setIsLoading(true);
        const allProducts = await productManager.loadData();
        setProducts(allProducts);
      } catch (error) {
        console.error('加载产品数据失败:', error);
        setProducts([]);
      } finally {
        setIsLoading(false);
      }
    };

    loadProducts();
  }, []);

  // 获取筛选后的产品
  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const handleCategoryChange = (categoryId) => {
    setIsLoading(true);
    setSelectedCategory(categoryId);
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  };

  return (
    <div className={styles.productsPage}>
      <PageHeader
        title="产品中心"
        subtitle="PRODUCT CENTER"
        englishTitle="Luxury Business Vehicles"
        description="汇聚全球顶级商务车型，为您提供最专业的高端出行解决方案。每一款车型都经过精心挑选，确保品质与性能的完美结合。"
        backgroundType="products"
        showStats={true}
        stats={[
          { number: '15+', label: '车型款式' },
          { number: '300+', label: '定制方案' },
          { number: '5000+', label: '满意客户' }
        ]}
        breadcrumbs={[
          { name: '首页', path: '/' },
          { name: '产品中心', path: '/products' }
        ]}
      />
      
      <div className="container">
        {/* 产品分类筛选 */}
        <div className={styles.productFilters}>
          <div className={styles.filterHeader}>
            <h2>选择您的理想车型</h2>
            <p>根据用途和需求筛选最适合的产品</p>
          </div>
          <div className={styles.filterTabs}>
            {categoryConfig.map(category => (
              <button
                key={category.id}
                className={`${styles.filterTab} ${selectedCategory === category.id ? styles.active : ''}`}
                onClick={() => handleCategoryChange(category.id)}
              >
                <span className={styles.tabIcon}>
                  <Icon type={category.icon} size="20px" color="currentColor" />
                </span>
                <span className={styles.tabName}>{category.name}</span>
                <span className={styles.tabCount}>
                  {category.id === 'all' ? products.length : products.filter(p => p.category === category.id).length}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* 产品列表 */}
        <div className={styles.productsSection}>
          {isLoading ? (
            <Loading />
          ) : (
            <div className={styles.productsGrid}>
              {filteredProducts.map(product => (
                <div key={product.id} className={styles.productCard}>
                  <div className={styles.productHeader}>
                    <div className={styles.productBadge} data-badge={product.badge}>
                      {badgeConfig[product.badge]?.label || product.badge}
                    </div>
                    <div 
                      className={styles.productBackground}
                      style={{ background: product.gradient }}
                    >
                      <div className={styles.productOverlay}></div>
                      {/* 显示第一张外观图片作为背景 */}
                      {product.images.exterior[0] && (
                        <img 
                          src={product.images.exterior[0]} 
                          alt={product.name}
                          className={styles.productImage}
                          loading="lazy"
                        />
                      )}
                    </div>
                  </div>

                  <div className={styles.productContent}>
                    <div className={styles.productTitleSection}>
                      <h3 className={styles.productName}>{product.name}</h3>
                      <p className={styles.productSubtitle}>{product.subtitle}</p>
                    </div>

                    <div className={styles.productPriceSection}>
                      <div className="price-container">
                        <span className={styles.currentPrice}>{product.price}</span>
                        {product.originalPrice && (
                          <span className={styles.originalPrice}>{product.originalPrice}</span>
                        )}
                      </div>
                      <div className={styles.productHighlights}>
                        {product.highlights.map((highlight, index) => (
                          <span key={index} className={styles.highlightTag}>
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>

                    <p className={styles.productDescription}>{product.description}</p>

                    <div className={styles.productFeatures}>
                      <h4>核心配置</h4>
                      <div className={styles.featuresGrid}>
                        {product.features.slice(0, 4).map((feature, index) => (
                          <div key={index} className={styles.featureItem}>
                            <span className={styles.featureIcon}>
                              <Icon type="star" size="14px" color="var(--accent-gold)" />
                            </span>
                            <span className={styles.featureText}>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className={styles.productActions}>
                      <Button 
                        variant="primary" 
                        size="large"
                        onClick={() => navigate(`/products/${product.id}`)}
                      >
                        查看详情
                      </Button>
                      <Button variant="secondary" size="large">
                        立即咨询
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* 底部行动号召 */}
        <div className={styles.productsCta}>
          <div className={styles.ctaContent}>
            <h2>找到心仪车型了吗？</h2>
            <p>我们的专业顾问将为您提供个性化建议</p>
            <div className={styles.ctaActions}>
              <Button variant="primary" size="large">
                预约试驾
              </Button>
              <Button variant="outline" size="large">
                获取报价
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
