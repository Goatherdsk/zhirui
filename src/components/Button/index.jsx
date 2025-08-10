import React from 'react';
import styles from './index.module.less';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'medium', 
  onClick, 
  disabled = false,
  className = '',
  ...props 
}) => {
  const buttonClasses = [
    styles.btn,
    styles[`btn${variant.charAt(0).toUpperCase() + variant.slice(1)}`],
    styles[`btn${size.charAt(0).toUpperCase() + size.slice(1)}`],
    disabled && styles.btnDisabled,
    className
  ].filter(Boolean).join(' ');

  return (
    <button 
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
