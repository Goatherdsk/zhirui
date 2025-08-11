import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import Loading from '../../components/Loading';
import Icon from '../../components/Icon';
import { productManager } from '../../utils/productManager';
import styles from './index.module.less';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedImageCategory, setSelectedImageCategory] = useState('exterior');
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  useEffect(() => {
    const loadProduct = async () => {
      try {
        setIsLoading(true);
        const products = await productManager.loadData();
        const foundProduct = products.find(p => p.id === id);
        
        if (!foundProduct) {
          navigate('/products');
          return;
        }
        
        setProduct(foundProduct);
      } catch (error) {
        console.error('加载产品详情失败:', error);
        navigate('/products');
      } finally {
        setIsLoading(false);
      }
    };

    if (id) {
      loadProduct();
    }
  }, [id, navigate]);

  const handleImageCategoryChange = (category) => {
    setSelectedImageCategory(category);
    setSelectedImageIndex(0);
  };

  const handleImageChange = (index) => {
    setSelectedImageIndex(index);
  };

  if (isLoading) {
    return <Loading />;
  }

  if (!product) {
    return (
      <div className={styles.errorContainer}>
        <h2>产品未找到</h2>
        <Button onClick={() => navigate('/products')}>
          返回产品页面
        </Button>
      </div>
    );
  }

  const currentImages = product.images[selectedImageCategory] || [];
  const currentImage = currentImages[selectedImageIndex];

  return (
    <div className={styles.productDetail}>
      {/* 返回按钮 */}
      <div className={styles.backButton}>
        <Button 
          variant="secondary" 
          onClick={() => navigate('/products')}
          icon={<Icon type="arrow-left" size="16px" />}
        >
          返回产品列表
        </Button>
      </div>

      {/* 产品头部信息 */}
      <div className={styles.productHeader}>
        <div className={styles.productBadge} data-badge={product.badge}>
          {product.badge}
        </div>
        <h1 className={styles.productName}>{product.name}</h1>
        <p className={styles.productSubtitle}>{product.subtitle}</p>
        <div className={styles.productMeta}>
          <span className={styles.productSeries}>系列: {product.series}</span>
          <span className={styles.productCategory}>类别: {product.category}</span>
          <span className={styles.productPrice}>{product.price}</span>
        </div>
      </div>

      {/* 图片展示区域 */}
      <div className={styles.imageSection}>
        <div className={styles.imageGallery}>
          {/* 主图 */}
          <div className={styles.mainImage}>
            {currentImage && (
              <img 
                src={currentImage} 
                alt={`${product.name} - ${selectedImageCategory}`}
                className={styles.mainImageImg}
              />
            )}
          </div>

          {/* 图片分类标签 */}
          <div className={styles.imageCategories}>
            {Object.keys(product.images).map(category => (
              <button
                key={category}
                className={`${styles.categoryBtn} ${selectedImageCategory === category ? styles.active : ''}`}
                onClick={() => handleImageCategoryChange(category)}
              >
                {category === 'exterior' ? '外观' : 
                 category === 'interior' ? '内饰' : '细节'}
                <span className={styles.imageCount}>
                  ({product.images[category].length})
                </span>
              </button>
            ))}
          </div>

          {/* 缩略图 */}
          <div className={styles.thumbnails}>
            {currentImages.map((image, index) => (
              <div
                key={index}
                className={`${styles.thumbnail} ${selectedImageIndex === index ? styles.active : ''}`}
                onClick={() => handleImageChange(index)}
              >
                <img src={image} alt={`缩略图 ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 产品配置表格 */}
      <div className={styles.configSection}>
        <h2 className={styles.sectionTitle}>详细配置</h2>
        
        {/* 基本参数 */}
        {product.specs.basic && Object.keys(product.specs.basic).length > 0 && (
          <div className={styles.configTable}>
            <h3 className={styles.tableTitle}>基本参数</h3>
            <table className={styles.table}>
              <tbody>
                {product.specs.basic.brand_name && (
                  <tr>
                    <td className={styles.labelCell}>车型名称</td>
                    <td className={styles.valueCell}>{product.specs.basic.brand_name}</td>
                  </tr>
                )}
                {product.specs.basic.length && (
                  <tr>
                    <td className={styles.labelCell}>车身长度</td>
                    <td className={styles.valueCell}>{product.specs.basic.length}</td>
                  </tr>
                )}
                {product.specs.basic.width && (
                  <tr>
                    <td className={styles.labelCell}>车身宽度</td>
                    <td className={styles.valueCell}>{product.specs.basic.width}</td>
                  </tr>
                )}
                {product.specs.basic.height && (
                  <tr>
                    <td className={styles.labelCell}>车身高度</td>
                    <td className={styles.valueCell}>{product.specs.basic.height}</td>
                  </tr>
                )}
                {product.specs.basic.wheelbase && (
                  <tr>
                    <td className={styles.labelCell}>轴距</td>
                    <td className={styles.valueCell}>{product.specs.basic.wheelbase}</td>
                  </tr>
                )}
                {product.specs.basic.displacement && (
                  <tr>
                    <td className={styles.labelCell}>排量</td>
                    <td className={styles.valueCell}>{product.specs.basic.displacement}</td>
                  </tr>
                )}
                {product.specs.basic.power && (
                  <tr>
                    <td className={styles.labelCell}>功率</td>
                    <td className={styles.valueCell}>{product.specs.basic.power}</td>
                  </tr>
                )}
                {product.specs.basic.drive && (
                  <tr>
                    <td className={styles.labelCell}>驱动方式</td>
                    <td className={styles.valueCell}>{product.specs.basic.drive}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}

        {/* 外部配置 */}
        {product.specs.exterior && product.specs.exterior.length > 0 && (
          <div className={styles.configTable}>
            <h3 className={styles.tableTitle}>外部配置</h3>
            <table className={styles.table}>
              <tbody>
                {product.specs.exterior.map((item, index) => (
                  <tr key={index}>
                    <td className={styles.labelCell}>配置 {index + 1}</td>
                    <td className={styles.valueCell}>{item}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* 内部配置 */}
        {product.specs.interior && product.specs.interior.length > 0 && (
          <div className={styles.configTable}>
            <h3 className={styles.tableTitle}>内部配置</h3>
            <table className={styles.table}>
              <tbody>
                {product.specs.interior.map((item, index) => (
                  <tr key={index}>
                    <td className={styles.labelCell}>配置 {index + 1}</td>
                    <td className={styles.valueCell}>{item}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* 座椅配置 */}
        {product.specs.seats && product.specs.seats.length > 0 && (
          <div className={styles.configTable}>
            <h3 className={styles.tableTitle}>座椅配置</h3>
            <table className={styles.table}>
              <tbody>
                {product.specs.seats.map((item, index) => (
                  <tr key={index}>
                    <td className={styles.labelCell}>座椅 {index + 1}</td>
                    <td className={styles.valueCell}>{item}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* 随车用品 */}
        {product.specs.accessories && product.specs.accessories.length > 0 && (
          <div className={styles.configTable}>
            <h3 className={styles.tableTitle}>随车用品</h3>
            <table className={styles.table}>
              <tbody>
                {product.specs.accessories.map((item, index) => (
                  <tr key={index}>
                    <td className={styles.labelCell}>用品 {index + 1}</td>
                    <td className={styles.valueCell}>{item}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* 操作按钮 */}
      <div className={styles.actionSection}>
        <div className={styles.actionButtons}>
          <Button variant="primary" size="large">
            立即咨询
          </Button>
          <Button variant="outline" size="large">
            预约试驾
          </Button>
          <Button variant="secondary" size="large">
            获取报价
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
