import React from 'react';
import styles from './index.module.less';

const ProductSpecs = ({ product }) => {
  if (!product?.specs) {
    return null;
  }

  const { basic, exterior, interior, seats, accessories } = product.specs;

  return (
    <div className={styles.productSpecs}>
      {/* 基本参数 */}
      {basic && Object.keys(basic).length > 0 && (
        <div className={styles.specSection}>
          <h3 className={styles.specTitle}>车辆基本参数</h3>
          <div className={styles.specGrid}>
            {basic.length && (
              <div className={styles.specItem}>
                <span className={styles.specLabel}>车身长度</span>
                <span className={styles.specValue}>{basic.length}</span>
              </div>
            )}
            {basic.width && (
              <div className={styles.specItem}>
                <span className={styles.specLabel}>车身宽度</span>
                <span className={styles.specValue}>{basic.width}</span>
              </div>
            )}
            {basic.height && (
              <div className={styles.specItem}>
                <span className={styles.specLabel}>车身高度</span>
                <span className={styles.specValue}>{basic.height}</span>
              </div>
            )}
            {basic.wheelbase && (
              <div className={styles.specItem}>
                <span className={styles.specLabel}>轴距</span>
                <span className={styles.specValue}>{basic.wheelbase}</span>
              </div>
            )}
            {basic.displacement && (
              <div className={styles.specItem}>
                <span className={styles.specLabel}>排量</span>
                <span className={styles.specValue}>3.5L</span>
              </div>
            )}
            {basic.power && (
              <div className={styles.specItem}>
                <span className={styles.specLabel}>功率</span>
                <span className={styles.specValue}>210KW</span>
              </div>
            )}
          </div>
        </div>
      )}

      {/* 外部配置 */}
      {exterior && exterior.length > 0 && (
        <div className={styles.specSection}>
          <h3 className={styles.specTitle}>外部配置</h3>
          <div className={styles.configList}>
            {exterior.map((item, index) => (
              <div key={index} className={styles.configItem}>
                <span className={styles.configIcon}>✦</span>
                <span className={styles.configText}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 内部配置 */}
      {interior && interior.length > 0 && (
        <div className={styles.specSection}>
          <h3 className={styles.specTitle}>内部配置</h3>
          <div className={styles.configList}>
            {interior.map((item, index) => (
              <div key={index} className={styles.configItem}>
                <span className={styles.configIcon}>✦</span>
                <span className={styles.configText}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 座椅配置 */}
      {seats && seats.length > 0 && (
        <div className={styles.specSection}>
          <h3 className={styles.specTitle}>座椅配置</h3>
          <div className={styles.configList}>
            {seats.map((item, index) => (
              <div key={index} className={styles.configItem}>
                <span className={styles.configIcon}>◆</span>
                <span className={styles.configText}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 随车用品 */}
      {accessories && accessories.length > 0 && (
        <div className={styles.specSection}>
          <h3 className={styles.specTitle}>随车用品</h3>
          <div className={styles.configList}>
            {accessories.map((item, index) => (
              <div key={index} className={styles.configItem}>
                <span className={styles.configIcon}>⬥</span>
                <span className={styles.configText}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductSpecs;
