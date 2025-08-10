import React from 'react';
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
    <div className={`${styles.pageHeader} ${getBackgroundClass()}`}>
      <div className={styles.headerOverlay}></div>
      <div className={styles.container}>
        <div className={styles.headerContent}>
          {breadcrumbs.length > 0 && (
            <nav className={styles.breadcrumb}>
              {breadcrumbs.map((crumb, index) => (
                <span key={index} className={styles.breadcrumbItem}>
                  {typeof crumb === 'string' ? crumb : (
                    crumb.path ? (
                      <Link to={crumb.path}>{crumb.name}</Link>
                    ) : (
                      crumb.name
                    )
                  )}
                  {index < breadcrumbs.length - 1 && (
                    <span className={styles.breadcrumbSeparator}>/</span>
                  )}
                </span>
              ))}
            </nav>
          )}
          
          <div className={styles.headerText}>
            <h1 className={styles.pageTitle}>{title}</h1>
            {englishTitle && (
              <p className={styles.pageEnglishTitle}>{englishTitle}</p>
            )}
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

          {showStats && stats.length > 0 && (
            <div className={styles.headerStats}>
              {stats.map((stat, index) => (
                <div key={index} className={styles.statItem}>
                  <div className={styles.statNumber}>{stat.number}</div>
                  <div className={styles.statLabel}>{stat.label}</div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* 装饰性元素 */}
        <div className={styles.headerDecoration}>
          <div className={`${styles.decorationLine} ${styles.decorationLine1}`}></div>
          <div className={`${styles.decorationLine} ${styles.decorationLine2}`}></div>
          <div className={`${styles.decorationCircle} ${styles.decorationCircle1}`}></div>
          <div className={`${styles.decorationCircle} ${styles.decorationCircle2}`}></div>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
