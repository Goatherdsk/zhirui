import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import appStore from '../../stores/AppStore';
import styles from './index.module.less';

const Header = observer(() => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  
  const navigation = [
    { path: '/', label: '首页', key: 'home' },
    { path: '/products', label: '产品中心', key: 'products' },
    { path: '/services', label: '专属服务', key: 'services' },
    { path: '/about', label: '关于我们', key: 'about' },
    { path: '/news', label: '公司动态', key: 'news' },
    { path: '/contact', label: '联系我们', key: 'contact' }
  ];

  // 监听滚动事件
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 键盘导航支持
  const handleKeyDown = (event) => {
    if (event.key === 'Escape' && appStore.isMobileMenuOpen) {
      appStore.closeMobileMenu();
    }
  };

  // 处理移动端菜单切换
  const handleMobileMenuToggle = () => {
    appStore.toggleMobileMenu();
  };

  // 处理移动端菜单链接点击
  const handleMobileNavClick = () => {
    appStore.closeMobileMenu();
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <div className={styles.headerContent}>
          {/* Logo */}
          <Link to="/" className={styles.logo} aria-label="智锐商务车首页">
            <h2>智锐商务车</h2>
          </Link>

          {/* 桌面端导航 */}
          <nav className={styles.desktopNav} aria-label="主导航">
            <ul className={styles.navList}>
              {navigation.map(item => (
                <li key={item.key} className="nav-item">
                  <Link 
                    to={item.path}
                    className={`${styles.navLink} ${location.pathname === item.path ? styles.active : ''}`}
                    aria-current={location.pathname === item.path ? 'page' : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* 语言切换和移动端菜单按钮 */}
          <div className={styles.headerActions}>
            {/* 语言切换 */}
            <div className={styles.languageSwitcher} role="group" aria-label="语言切换">
              <button 
                className={`${styles.langBtn} ${appStore.currentLanguage === 'zh' ? styles.active : ''}`}
                onClick={() => appStore.setLanguage('zh')}
                aria-pressed={appStore.currentLanguage === 'zh'}
                aria-label="切换到中文"
              >
                中文
              </button>
              <button 
                className={`${styles.langBtn} ${appStore.currentLanguage === 'en' ? styles.active : ''}`}
                onClick={() => appStore.setLanguage('en')}
                aria-pressed={appStore.currentLanguage === 'en'}
                aria-label="Switch to English"
              >
                EN
              </button>
            </div>

            {/* 移动端菜单按钮 */}
            <button 
              className={`${styles.mobileMenuBtn} ${appStore.isMobileMenuOpen ? styles.active : ''}`}
              onClick={handleMobileMenuToggle}
              aria-expanded={appStore.isMobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={appStore.isMobileMenuOpen ? '关闭菜单' : '打开菜单'}
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </button>
          </div>
        </div>
      </div>

      {/* 移动端菜单 */}
      <div 
        id="mobile-menu"
        className={`${styles.mobileMenu} ${appStore.isMobileMenuOpen ? styles.open : ''}`}
        aria-hidden={!appStore.isMobileMenuOpen}
      >
        <nav aria-label="移动端导航">
          <ul className={styles.mobileNavList}>
            {navigation.map(item => (
              <li key={item.key} className={styles.mobileNavItem}>
                <Link 
                  to={item.path}
                  className={`${styles.mobileNavLink} ${location.pathname === item.path ? styles.active : ''}`}
                  onClick={handleMobileNavClick}
                  aria-current={location.pathname === item.path ? 'page' : undefined}
                  tabIndex={appStore.isMobileMenuOpen ? 0 : -1}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
});

export default Header;
