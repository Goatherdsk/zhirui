import React from "react";
import { Link } from "react-router-dom";
import Icon from "../Icon";
import { COMPANY_INFO } from "../../constants/companyInfo";
import styles from "./index.module.less";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const footerSections = [
    {
      title: "产品中心",
      links: [
        { label: "商务车产品", path: "/products" },
      ],
    },
    {
      title: "服务支持",
      links: [
        { label: "专属服务", path: "/services" },
      ],
    },
    {
      title: "公司信息",
      links: [
        { label: "关于我们", path: "/about" },
        { label: "公司动态", path: "/news" },
      ],
    },
    {
      title: "联系我们",
      links: [
        { label: "联系方式", path: "/contact" },
      ],
    },
  ];
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          {/* 主要内容区域 */}
          <div className={styles.footerMain}>
            {/* 品牌信息 */}
            <div className={styles.footerBrand}>
              <div className={styles.footerLogo}>
                <h3>{COMPANY_INFO.brandName}</h3>
                <p className={styles.footerTagline}>{COMPANY_INFO.englishName}</p>
                <p className={styles.brandDescription}>
                  定义商务出行新标准，为精英人士打造的奢华移动空间
                </p>
              </div>
              
              <div className={styles.footerContact}>
                <p>
                  <Icon type="phone" size="16px" color="var(--accent-gold)" />
                  <span>客服热线：{COMPANY_INFO.phone}</span>
                </p>
                <p>
                  <Icon type="mobile" size="16px" color="var(--accent-gold)" />
                  <span>服务时间：{COMPANY_INFO.serviceHours}</span>
                </p>
                <p>
                  <Icon type="location" size="16px" color="var(--accent-gold)" />
                  <span>公司地址：{COMPANY_INFO.address.full}</span>
                </p>
              </div>
              
              {/* 社交媒体 */}
              <div className={styles.socialLinks}>
                <a href="#" className={styles.socialLink} aria-label="微信">
                  <Icon type="social" size="20px" color="currentColor" />
                </a>
                <a href="#" className={styles.socialLink} aria-label="微博">
                  <Icon type="social" size="20px" color="currentColor" />
                </a>
                <a href="#" className={styles.socialLink} aria-label="抖音">
                  <Icon type="social" size="20px" color="currentColor" />
                </a>
                <a href="#" className={styles.socialLink} aria-label="LinkedIn">
                  <Icon type="business" size="20px" color="currentColor" />
                </a>
              </div>
            </div>

            {/* 链接区域 */}
            <div className={styles.footerLinks}>
              {footerSections.map((section, index) => (
                <div key={index} className={styles.footerSection}>
                  <h3>{section.title}</h3>
                  <ul className={styles.sectionLinks}>
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <Link to={link.path} className={styles.footerLink}>
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
          <div className={styles.footerConnect}>
            <div className={styles.footerNewsletter}>
              <h3>订阅资讯</h3>
              <p>获取最新产品信息和优惠活动</p>
              <form className={styles.newsletterForm} noValidate>
                <input
                  type="email"
                  placeholder="请输入您的邮箱"
                  className={styles.newsletterInput}
                  required
                  aria-label="邮箱地址"
                />
                <button 
                  type="submit" 
                  className={styles.newsletterButton}
                  aria-label="订阅邮件资讯"
                >
                  订阅
                </button>
              </form>
            </div>
            
            <div className={styles.footerSocial}>
              <h3>关注我们</h3>
              <div className={styles.socialLinks}>
                <a href="#" className={styles.socialLink} aria-label="微信">
                  <Icon type="social" size="20px" color="currentColor" />
                </a>
                <a href="#" className={styles.socialLink} aria-label="微博">
                  <Icon type="social" size="20px" color="currentColor" />
                </a>
                <a href="#" className={styles.socialLink} aria-label="抖音">
                  <Icon type="social" size="20px" color="currentColor" />
                </a>
                <a href="#" className={styles.socialLink} aria-label="LinkedIn">
                  <Icon type="business" size="20px" color="currentColor" />
                </a>
              </div>
            </div>
          </div>

          {/* 底部信息 */}
          <div className={styles.footerBottom}>
            <div className={styles.footerBottomContent}>
              <div className={styles.footerLegal}>
                <p>&copy; {currentYear} {COMPANY_INFO.name}. 保留所有权利.</p>
              </div>
              <div className={styles.footerCertifications}>
                <span className={styles.certification}>
                  <a href={COMPANY_INFO.icpUrl} target="_blank" rel="noopener noreferrer">
                    {COMPANY_INFO.icp}
                  </a>
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
