import React, { useState } from 'react';
import Button from '../components/Button';
import Loading from '../components/Loading';
import PageHeader from '../components/PageHeader';
import './Products.css';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isLoading, setIsLoading] = useState(false);

  const categories = [
    { id: 'all', name: '全部车型', icon: '🚗' },
    { id: 'executive', name: '行政商务', icon: '💼' },
    { id: 'premium', name: '奢华尊享', icon: '👑' },
    { id: 'tech', name: '科技智能', icon: '🔬' }
  ];

  const products = [
    {
      id: 1,
      name: '智睿·行政版',
      subtitle: 'Executive Series',
      category: 'executive',
      price: '88.8万起',
      originalPrice: '98.8万',
      description: '为企业高管打造的移动办公空间，集商务、舒适、科技于一体',
      features: ['独立办公区域', '商务级音响系统', '隐私玻璃', '无线充电', '空气净化', '智能座椅'],
      specs: {
        engine: '2.0T 涡轮增压',
        power: '245马力',
        transmission: '8速自动',
        fuel: '7.8L/100km',
        seats: '4-7座可选',
        length: '5.2米'
      },
      highlights: ['畅销款', '高性价比'],
      gradient: 'linear-gradient(135deg, #c9a96e 0%, #f4e4bc 100%)',
      badge: 'HOT'
    },
    {
      id: 2,
      name: '智睿·尊享版',
      subtitle: 'Premium Series',
      category: 'premium',
      price: '128.8万起',
      originalPrice: '148.8万',
      description: '奢华内饰与先进科技的完美融合，为VIP客户提供至尊体验',
      features: ['真皮座椅', '按摩功能', '恒温系统', '娱乐系统', '星空顶棚', '香氛系统'],
      specs: {
        engine: '3.0T V6',
        power: '340马力',
        transmission: '10速自动',
        fuel: '8.5L/100km',
        seats: '4座豪华版',
        length: '5.5米'
      },
      highlights: ['限量版', '顶级配置'],
      gradient: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)',
      badge: 'LUXURY'
    },
    {
      id: 3,
      name: '智睿·科技版',
      subtitle: 'Tech Series',
      category: 'tech',
      price: '98.8万起',
      originalPrice: '108.8万',
      description: '搭载最新智能科技，实现车内设备无缝连接与智能控制',
      features: ['AI语音助手', '智能互联', '自动驾驶辅助', '云端服务', '人脸识别', '5G网络'],
      specs: {
        engine: '2.0T 混动',
        power: '280马力',
        transmission: 'E-CVT',
        fuel: '5.8L/100km',
        seats: '5-6座可选',
        length: '5.3米'
      },
      highlights: ['新能源', '智能化'],
      gradient: 'linear-gradient(135deg, #2d2d2d 0%, #1a1a1a 100%)',
      badge: 'NEW'
    },
    {
      id: 4,
      name: '智睿·至尊版',
      subtitle: 'Ultimate Series',
      category: 'premium',
      price: '188.8万起',
      originalPrice: '218.8万',
      description: '匠心工艺与顶级配置的巅峰之作，为追求极致的您量身定制',
      features: ['手工真皮内饰', '钻石级音响', '星空顶棚', '专属定制', '贵金属装饰', '私人管家'],
      specs: {
        engine: '4.0T V8',
        power: '500马力',
        transmission: '10速自动',
        fuel: '9.8L/100km',
        seats: '4座至尊版',
        length: '5.8米'
      },
      highlights: ['限量收藏', '手工定制'],
      gradient: 'linear-gradient(135deg, #8b5a3c 0%, #d4af37 100%)',
      badge: 'EXCLUSIVE'
    }
  ];

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
    <div className="products-page">
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
        <div className="product-filters">
          <div className="filter-header">
            <h2>选择您的理想车型</h2>
            <p>根据用途和需求筛选最适合的产品</p>
          </div>
          <div className="filter-tabs">
            {categories.map(category => (
              <button
                key={category.id}
                className={`filter-tab ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => handleCategoryChange(category.id)}
              >
                <span className="tab-icon">{category.icon}</span>
                <span className="tab-name">{category.name}</span>
                <span className="tab-count">
                  {category.id === 'all' ? products.length : products.filter(p => p.category === category.id).length}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* 产品列表 */}
        <div className="products-section">
          {isLoading ? (
            <Loading />
          ) : (
            <div className="products-grid">
              {filteredProducts.map(product => (
                <div key={product.id} className="product-card">
                  <div className="product-header">
                    <div className="product-badge" data-badge={product.badge}>
                      {product.badge}
                    </div>
                    <div 
                      className="product-background"
                      style={{ background: product.gradient }}
                    >
                      <div className="product-overlay"></div>
                    </div>
                  </div>

                  <div className="product-content">
                    <div className="product-title-section">
                      <h3 className="product-name">{product.name}</h3>
                      <p className="product-subtitle">{product.subtitle}</p>
                    </div>

                    <div className="product-price-section">
                      <div className="price-container">
                        <span className="current-price">{product.price}</span>
                        {product.originalPrice && (
                          <span className="original-price">{product.originalPrice}</span>
                        )}
                      </div>
                      <div className="product-highlights">
                        {product.highlights.map((highlight, index) => (
                          <span key={index} className="highlight-tag">
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>

                    <p className="product-description">{product.description}</p>

                    <div className="product-features">
                      <h4>核心配置</h4>
                      <div className="features-grid">
                        {product.features.map((feature, index) => (
                          <div key={index} className="feature-item">
                            <span className="feature-icon">✦</span>
                            <span className="feature-text">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="product-specs">
                      <h4>技术参数</h4>
                      <div className="specs-grid">
                        <div className="spec-item">
                          <span className="spec-label">发动机</span>
                          <span className="spec-value">{product.specs.engine}</span>
                        </div>
                        <div className="spec-item">
                          <span className="spec-label">功率</span>
                          <span className="spec-value">{product.specs.power}</span>
                        </div>
                        <div className="spec-item">
                          <span className="spec-label">变速箱</span>
                          <span className="spec-value">{product.specs.transmission}</span>
                        </div>
                        <div className="spec-item">
                          <span className="spec-label">油耗</span>
                          <span className="spec-value">{product.specs.fuel}</span>
                        </div>
                        <div className="spec-item">
                          <span className="spec-label">座位</span>
                          <span className="spec-value">{product.specs.seats}</span>
                        </div>
                        <div className="spec-item">
                          <span className="spec-label">长度</span>
                          <span className="spec-value">{product.specs.length}</span>
                        </div>
                      </div>
                    </div>

                    <div className="product-actions">
                      <Button variant="primary" size="large">
                        立即咨询
                      </Button>
                      <Button variant="secondary" size="large">
                        查看详情
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* 底部行动号召 */}
        <div className="products-cta">
          <div className="cta-content">
            <h2>找到心仪车型了吗？</h2>
            <p>我们的专业顾问将为您提供个性化建议</p>
            <div className="cta-actions">
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
