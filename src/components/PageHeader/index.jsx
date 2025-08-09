import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

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
        return 'page-header-products';
      case 'services':
        return 'page-header-services';
      case 'about':
        return 'page-header-about';
      case 'contact':
        return 'page-header-contact';
      default:
        return 'page-header-default';
    }
  };

  return (
    <div className={`page-header ${getBackgroundClass()}`}>
      <div className="header-overlay"></div>
      <div className="container">
        <div className="header-content">
          {breadcrumbs.length > 0 && (
            <nav className="breadcrumb">
              {breadcrumbs.map((crumb, index) => (
                <span key={index} className="breadcrumb-item">
                  {typeof crumb === 'string' ? crumb : (
                    crumb.path ? (
                      <Link to={crumb.path}>{crumb.name}</Link>
                    ) : (
                      crumb.name
                    )
                  )}
                  {index < breadcrumbs.length - 1 && (
                    <span className="breadcrumb-separator">/</span>
                  )}
                </span>
              ))}
            </nav>
          )}
          
          <div className="header-text">
            <h1 className="page-title">{title}</h1>
            {englishTitle && (
              <p className="page-english-title">{englishTitle}</p>
            )}
            {subtitle && (
              <p className="page-subtitle">{subtitle}</p>
            )}
            {description && (
              <div className="page-description">
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
            <div className="header-stats">
              {stats.map((stat, index) => (
                <div key={index} className="stat-item">
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* 装饰性元素 */}
        <div className="header-decoration">
          <div className="decoration-line decoration-line-1"></div>
          <div className="decoration-line decoration-line-2"></div>
          <div className="decoration-circle decoration-circle-1"></div>
          <div className="decoration-circle decoration-circle-2"></div>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
