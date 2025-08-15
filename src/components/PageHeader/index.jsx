import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './index.module.less';

const PageHeader = ({ 
  title, 
  subtitle, 
  englishTitle,
  description,
  backgroundType = 'default',
  showStats = false,
  stats = [],
  breadcrumbs = []
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const getBackgroundClass = () => {
    switch (backgroundType) {
      case 'products':
        return styles.pageHeaderProducts;
      case 'services':
        return styles.pageHeaderServices;
      case 'about':
        return styles.pageHeaderAbout;
      case 'contact':
        return styles.pageHeaderContact;
      default:
        return styles.pageHeaderDefault;
    }
  };

  return (
    <div className={`${styles.pageHeader} ${getBackgroundClass()} ${isVisible ? styles.visible : ''}`}>
      <div className={styles.headerOverlay}></div>
      <div className={styles.container}>
        <div className={styles.headerContent}>
          {breadcrumbs.length > 0 && (
            <nav className={styles.breadcrumb} aria-label="页面导航">
              <div className={styles.breadcrumbList}>
                {breadcrumbs.map((crumb, index) => (
                  <div key={index} className={styles.breadcrumbItem}>
                    {typeof crumb === 'string' ? (
                      <span className={styles.breadcrumbText}>{crumb}</span>
                    ) : crumb.path ? (
                      <Link 
                        to={crumb.path} 
                        className={styles.breadcrumbLink}
                        aria-current={index === breadcrumbs.length - 1 ? 'page' : undefined}
                      >
                        {crumb.name}
                      </Link>
                    ) : (
                      <span 
                        className={styles.breadcrumbText}
                        aria-current={index === breadcrumbs.length - 1 ? 'page' : undefined}
                      >
                        {crumb.name}
                      </span>
                    )}
                    {index < breadcrumbs.length - 1 && (
                      <span className={styles.breadcrumbSeparator} aria-hidden="true">/</span>
                    )}
                  </div>
                ))}
              </div>
            </nav>
          )}
          
          <div className={styles.headerText}>
            <div className={styles.titleGroup}>
              {englishTitle && (
                <p className={styles.pageEnglishTitle}>{englishTitle}</p>
              )}
              <h1 className={styles.pageTitle}>
                <span className={styles.titleText}>{title}</span>
              </h1>
            </div>

            {(subtitle || description) && (
              <div className={styles.contentGroup}>
                {subtitle && (
                  <p className={styles.pageSubtitle}>{subtitle}</p>
                )}
                {description && (
                  <div className={styles.pageDescription}>
                    {Array.isArray(description) ? (
                      description.map((desc, index) => (
                        <p key={index}>{desc}</p>
                      ))
                    ) : (
                      <p>{description}</p>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>

          {showStats && stats.length > 0 && (
            <div className={styles.headerStats}>
              <div className={styles.statsGrid}>
                {stats.map((stat, index) => (
                  <div 
                    key={index} 
                    className={styles.statItem}
                    style={{ animationDelay: `${0.8 + index * 0.2}s` }}
                  >
                    <div className={styles.statNumber}>{stat.number}</div>
                    <div className={styles.statLabel}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* 装饰性元素 */}
        <div className={styles.headerDecoration} aria-hidden="true">
          <div className={`${styles.decorationLine} ${styles.decorationLine1}`}></div>
          <div className={`${styles.decorationLine} ${styles.decorationLine2}`}></div>
          <div className={`${styles.decorationCircle} ${styles.decorationCircle1}`}></div>
          <div className={`${styles.decorationCircle} ${styles.decorationCircle2}`}></div>
          <div className={styles.decorationPattern}></div>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
