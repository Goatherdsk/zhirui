import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import appStore from '../stores/AppStore';
import './Header.css';

const Header = observer(() => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  
  const navigation = [
    { path: '/', label: '首页', key: 'home' },
    { path: '/products', label: '产品中心', key: 'products' },
    { path: '/services', label: '专属服务', key: 'services' },
    { path: '/about', label: '关于我们', key: 'about' },
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

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          {/* Logo */}
          <Link to="/" className="logo">
            <h2>智睿商务车</h2>
          </Link>

          {/* 桌面端导航 */}
          <nav className="desktop-nav">
            <ul className="nav-list">
              {navigation.map(item => (
                <li key={item.key} className="nav-item">
                  <Link 
                    to={item.path}
                    className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* 语言切换和移动端菜单按钮 */}
          <div className="header-actions">
            {/* 语言切换 */}
            <div className="language-switcher">
              <button 
                className={`lang-btn ${appStore.currentLanguage === 'zh' ? 'active' : ''}`}
                onClick={() => appStore.setLanguage('zh')}
              >
                中文
              </button>
              <button 
                className={`lang-btn ${appStore.currentLanguage === 'en' ? 'active' : ''}`}
                onClick={() => appStore.setLanguage('en')}
              >
                EN
              </button>
            </div>

            {/* 移动端菜单按钮 */}
            <button 
              className={`mobile-menu-btn ${appStore.isMobileMenuOpen ? 'active' : ''}`}
              onClick={() => appStore.toggleMobileMenu()}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>

      {/* 移动端菜单 */}
      <div className={`mobile-menu ${appStore.isMobileMenuOpen ? 'open' : ''}`}>
        <nav className="mobile-nav">
          <ul className="mobile-nav-list">
            {navigation.map(item => (
              <li key={item.key} className="mobile-nav-item">
                <Link 
                  to={item.path}
                  className={`mobile-nav-link ${location.pathname === item.path ? 'active' : ''}`}
                  onClick={() => appStore.closeMobileMenu()}
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
