import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
// 暂时创建占位页面组件
import Products from './pages/Products';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import News from './pages/News';
import './App.css';

const App = observer(() => {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/news" element={<News />} />
            <Route path="*" element={<div>页面未找到</div>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
});

export default App;
