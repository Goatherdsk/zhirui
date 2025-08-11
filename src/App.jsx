import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import Header from './components/Header';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import Home from './pages/Home';
// 暂时创建占位页面组件
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import News from './pages/News';
import NewsDetail from './pages/NewsDetail';
import styles from './App.module.less';

// 滚动到顶部组件
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // 使用 setTimeout 确保页面渲染完成后再滚动
    const scrollToTop = () => {
      // 立即滚动到顶部
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      
      // 备用方案：使用 window.scrollTo
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant'
      });
    };

    // 延迟执行，确保DOM更新完成
    setTimeout(scrollToTop, 0);
    
    // 再次确保滚动到顶部（处理异步加载的内容）
    const timer = setTimeout(scrollToTop, 100);
    
    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
};

const App = observer(() => {
  return (
    <Router>
      <div className={styles.app}>
        <ScrollToTop />
        <Header />
        <main className={styles.mainContent}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/news" element={<News />} />
            <Route path="/news/:id" element={<NewsDetail />} />
            <Route path="*" element={<div>页面未找到</div>} />
          </Routes>
        </main>
        <Footer />
        <BackToTop />
      </div>
    </Router>
  );
});

export default App;
