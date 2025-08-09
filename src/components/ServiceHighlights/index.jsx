import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../Icon';
import './index.css';

const ServiceHighlights = () => {
  const services = [
    {
      id: 1,
      icon: "design",
      title: "个性化定制",
      subtitle: "PERSONALIZED CUSTOMIZATION",
      description: "根据您的需求和品味，提供从内饰到外观的全方位定制服务",
      features: ["内饰材料选择", "色彩搭配方案", "功能配置优化", "专属标识定制"]
    },
    {
      id: 2,
      icon: "tool",
      title: "专业维护",
      subtitle: "PROFESSIONAL MAINTENANCE",
      description: "专业技师团队提供全生命周期的维护保养服务",
      features: ["定期保养检查", "24小时救援", "原厂配件保障", "技术升级服务"]
    },
    {
      id: 3,
      icon: "business",
      title: "VIP服务",
      subtitle: "VIP CONCIERGE SERVICE",
      description: "专属客户经理为您提供一对一的贴心服务体验",
      features: ["专属客户经理", "上门取送车", "预约优先处理", "定制化解决方案"]
    },
    {
      id: 4,
      icon: "mobile",
      title: "智能互联",
      subtitle: "SMART CONNECTIVITY",
      description: "通过智能应用实现车辆远程监控和智能化管理",
      features: ["远程车况监控", "智能预约服务", "行程数据分析", "安全防护提醒"]
    },
    {
      id: 5,
      icon: "crown",
      title: "品质保障",
      subtitle: "QUALITY ASSURANCE",
      description: "严格的品质管控体系，确保每一处细节都达到最高标准",
      features: ["多重质检程序", "终身质量保证", "原厂认证标准", "品质追溯系统"]
    },
    {
      id: 6,
      icon: "star",
      title: "尊享礼遇",
      subtitle: "EXCLUSIVE PRIVILEGES",
      description: "为尊贵客户提供独特的专属权益和精英体验",
      features: ["会员专属活动", "优先预约权", "专属停车位", "定制纪念品"]
    },
    {
      id: 7,
      icon: "check",
      title: "安全保障",
      subtitle: "SECURITY PROTECTION",
      description: "全方位安全防护体系，护航您的每一次出行",
      features: ["智能防盗系统", "紧急救援服务", "保险理赔协助", "安全驾驶培训"]
    },
    {
      id: 8,
      icon: "tech",
      title: "创新体验",
      subtitle: "INNOVATION EXPERIENCE",
      description: "持续引入前沿科技，为您带来超越想象的驾乘体验",
      features: ["前沿科技应用", "定期功能更新", "个性化推荐", "智能学习适应"]
    }
  ];

  return (
    <section className="service-highlights">
      <div className="container">
        <div className="section-header">
          <p className="section-subtitle">OUR SERVICES</p>
          <h2 className="section-title">专属服务</h2>
          <p className="section-description">
            致力于为每一位客户提供超越期待的专业服务体验
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-icon">
                <Icon type={service.icon} size="32px" className="icon-gold" />
              </div>
              
              <div className="service-content">
                <p className="service-subtitle">{service.subtitle}</p>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                
                <ul className="service-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="service-feature">
                      <Icon type="check" size="12px" className="icon-gold" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="service-cta">
          <div className="cta-content">
            <h3>需要专属服务方案？</h3>
            <p>我们的专业顾问团队随时为您提供个性化的服务咨询</p>
            <div className="cta-buttons">
              <Link to="/contact" className="cta-primary">
                联系我们
              </Link>
              <Link to="/services" className="cta-secondary">
                了解更多服务
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHighlights;
