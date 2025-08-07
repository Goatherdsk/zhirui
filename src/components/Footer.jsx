import React from "react";
import { Link } from "react-router-dom";
import Icon from "./Icon";
import "./Footer.css";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const footerSections = [
    {
      title: "产品中心",
      links: [
        { label: "智睿·行政版", path: "/products/executive" },
        { label: "智睿·尊享版", path: "/products/premium" },
        { label: "智睿·科技版", path: "/products/tech" },
        { label: "产品对比", path: "/products/compare" },
      ],
    },
    {
      title: "服务支持",
      links: [
        { label: "个性化定制", path: "/services/customization" },
        { label: "专业维护", path: "/services/maintenance" },
        { label: "VIP服务", path: "/services/vip" },
        { label: "智能互联", path: "/services/connectivity" },
      ],
    },
    {
      title: "公司信息",
      links: [
        { label: "关于我们", path: "/about" },
        { label: "品牌故事", path: "/about/story" },
        { label: "新闻动态", path: "/news" },
        { label: "招贤纳士", path: "/careers" },
      ],
    },
    {
      title: "联系我们",
      links: [
        { label: "联系方式", path: "/contact" },
        { label: "经销商查询", path: "/dealers" },
        { label: "预约试驾", path: "/test-drive" },
        { label: "在线咨询", path: "/consultation" },
      ],
    },
  ];
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* 主要内容区域 */}
          <div className="footer-main">
            {/* 品牌信息 */}
            <div className="footer-brand">
              <div className="footer-logo">
                <h3>智睿商务车</h3>
                <p className="footer-tagline">ZHIRUI BUSINESS VEHICLES</p>
                <p className="brand-description">
                  定义商务出行新标准，为精英人士打造的奢华移动空间
                </p>
              </div>
              
              <div className="footer-contact">
                <p>
                  <Icon type="phone" size="16px" color="var(--accent-gold)" />
                  <span>客服热线：400-888-6688</span>
                </p>
                <p>
                  <Icon type="mobile" size="16px" color="var(--accent-gold)" />
                  <span>服务时间：周一至周日 8:00-22:00</span>
                </p>
              </div>
              
              {/* 社交媒体 */}
              <div className="social-links">
                <a href="#" className="social-link" aria-label="微信">
                  <Icon type="social" size="20px" color="currentColor" />
                </a>
                <a href="#" className="social-link" aria-label="微博">
                  <Icon type="social" size="20px" color="currentColor" />
                </a>
                <a href="#" className="social-link" aria-label="抖音">
                  <Icon type="social" size="20px" color="currentColor" />
                </a>
                <a href="#" className="social-link" aria-label="LinkedIn">
                  <Icon type="business" size="20px" color="currentColor" />
                </a>
              </div>
            </div>

            {/* 链接区域 */}
            <div className="footer-links">
              {footerSections.map((section, index) => (
                <div key={index} className="footer-section">
                  <h3>{section.title}</h3>
                  <ul className="section-links">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <Link to={link.path} className="footer-link">
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* 连接与订阅区域 */}
          <div className="footer-connect">
            <div className="footer-newsletter">
              <h3>订阅资讯</h3>
              <p>获取最新产品信息和优惠活动</p>
              <form className="newsletter-form">
                <input
                  type="email"
                  placeholder="请输入您的邮箱"
                  className="newsletter-input"
                />
                <button type="submit" className="newsletter-button">
                  订阅
                </button>
              </form>
            </div>
            
            <div className="footer-social">
              <h3>关注我们</h3>
              <div className="social-links">
                <a href="#" className="social-link" aria-label="微信">
                  <Icon type="social" size="20px" color="currentColor" />
                </a>
                <a href="#" className="social-link" aria-label="微博">
                  <Icon type="social" size="20px" color="currentColor" />
                </a>
                <a href="#" className="social-link" aria-label="抖音">
                  <Icon type="social" size="20px" color="currentColor" />
                </a>
                <a href="#" className="social-link" aria-label="LinkedIn">
                  <Icon type="business" size="20px" color="currentColor" />
                </a>
              </div>
            </div>
          </div>

          {/* 底部信息 */}
          <div className="footer-bottom">
            <div className="footer-bottom-content">
              <div className="footer-legal">
                <p>&copy; {currentYear} 智睿商务车有限公司. 保留所有权利.</p>
                <div className="legal-links">
                  <Link to="/privacy" className="legal-link">隐私政策</Link>
                  <Link to="/terms" className="legal-link">使用条款</Link>
                  <Link to="/sitemap" className="legal-link">网站地图</Link>
                </div>
              </div>
              <div className="footer-certifications">
                <span className="certification">
                  ICP备案号：京ICP备xxxxxxxx号
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
