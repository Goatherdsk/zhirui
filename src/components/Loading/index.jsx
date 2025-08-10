import React from 'react';
import styles from './index.module.less';
const Loading = ({ message = '加载中...' }) => {
  return (
    <div className="loading-container">
      <div className={styles.loadingSpinner}>
        <div className={styles.spinnerRing}></div>
        <div className={styles.spinnerRing}></div>
        <div className={styles.spinnerRing}></div>
      </div>
      <p className={styles.loadingMessage}>{message}</p>
    </div>
  );
};

export default Loading;
