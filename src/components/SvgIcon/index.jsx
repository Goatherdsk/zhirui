import React from 'react';
import styles from './index.module.less';

const SvgIcon = ({ type, size = 24, className = '', ...props }) => {
  const iconSize = typeof size === 'number' ? `${size}px` : size;
  
  const icons = {
    'money-circle': (
      <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
        <path d="M12 6v2m0 8v2m-3-6h6m-6 4h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    
    'thunderbolt': (
      <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none">
        <path d="M13 2L3 14h6l-2 8 10-12h-6l2-8z" fill="currentColor"/>
      </svg>
    ),
    
    'team': (
      <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none">
        <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
        <circle cx="15" cy="7" r="3" stroke="currentColor" strokeWidth="2"/>
        <path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M21 21v-2a4 4 0 0 0-3-3.87" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    
    'employment': (
      <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none">
        <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
        <path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75M22 21v-2a4 4 0 0 0-3-3.87" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M19 8l-3 3 2 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="19" cy="8" r="1" fill="currentColor"/>
      </svg>
    ),
    
    'rise': (
      <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none">
        <line x1="12" y1="20" x2="12" y2="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <polyline points="18,10 12,4 6,10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8 12h8M6 16h12M10 20h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    
    'revenue': (
      <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
        <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8 15l2-2 2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 11h2v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    
    'dashboard': (
      <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
        <polyline points="12,6 12,12 16,14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    
    'line-chart': (
      <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none">
        <polyline points="3,17 9,11 13,15 21,7" stroke="currentColor" strokeWidth="2" fill="none"/>
        <polyline points="14,7 21,7 21,14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    
    'trophy': (
      <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none">
        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8 21l4-7 4 7" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M6 9a6 6 0 0 0 12 0V4H6v5z" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    
    'battery': (
      <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none">
        <rect x="1" y="6" width="18" height="12" rx="2" ry="2" stroke="currentColor" strokeWidth="2" fill="none"/>
        <line x1="23" y1="13" x2="23" y2="11" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
        <rect x="3" y="8" width="14" height="8" rx="1" fill="currentColor"/>
      </svg>
    ),
    
    'star': (
      <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none">
        <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" fill="currentColor"/>
      </svg>
    ),
    
    'border': (
      <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
        <path d="M9 9h6v6H9z" stroke="currentColor" strokeWidth="2" fill="none"/>
      </svg>
    ),
    
    'sun': (
      <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2"/>
        <line x1="12" y1="1" x2="12" y2="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <line x1="12" y1="21" x2="12" y2="23" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <line x1="1" y1="12" x2="3" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <line x1="21" y1="12" x2="23" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    
    'file-text': (
      <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
        <polyline points="14,2 14,8 20,8" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
        <line x1="16" y1="13" x2="8" y2="13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <line x1="16" y1="17" x2="8" y2="17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <polyline points="10,9 9,9 8,9" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    
    'aim': (
      <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
        <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="2"/>
        <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="2"/>
        <line x1="21.17" y1="8" x2="12" y2="8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <line x1="3.95" y1="6.06" x2="8.54" y2="14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <line x1="10.88" y1="21.94" x2="15.46" y2="14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    
    'graduation-cap': (
      <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M6 12v5c3 3 9 3 12 0v-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    
    'arrow-up': (
      <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none">
        <line x1="12" y1="19" x2="12" y2="5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <polyline points="5,12 12,5 19,12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    
    'environment': (
      <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none">
        <path d="M21.54 15H17a2 2 0 0 0-2 2v4.54" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7 3.34V5a3 3 0 0 0 3 3v0a2 2 0 0 1 2 2v0c0 1.1.9 2 2 2v0a2 2 0 0 0 2-2v0c0-1.1.9-2 2-2h3.17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M11 21.54V20a2 2 0 0 0-2-2v0a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.46" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    
    'sync': (
      <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none">
        <polyline points="23 4 23 10 17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <polyline points="1 20 1 14 7 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    
    'leaf': (
      <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none">
        <path d="M17 8c0-3.87-3.13-7-7-7s-7 3.13-7 7a8 8 0 1 0 16 0z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M12.94 5.25c-1.27-1.48-3.24-2.24-5.1-2.13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    
    'build': (
      <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/>
        <line x1="8" y1="21" x2="16" y2="21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <line x1="12" y1="17" x2="12" y2="21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    
    'bulb': (
      <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none">
        <path d="M9 21h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 17v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="12" cy="9" r="7" stroke="currentColor" strokeWidth="2"/>
        <path d="M10 17h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  };

  return (
    <span className={`${styles.svgIcon} ${className}`} {...props}>
      {icons[type] || icons['star']}
    </span>
  );
};

export default SvgIcon;
