import React from 'react';
import PageHeader from '../../components/PageHeader';
import Button from '../../components/Button';
import Icon from '../../components/Icon';
import styles from './index.module.less';

const Services = () => {
  const serviceStats = [
    { number: '24/7', label: '全天候服务' },
    { number: '100+', label: '服务网点' },
    { number: '99%', label: '客户满意度' }
  ];

  const services = [
    {
      id: 1,
      title: '个性化定制',
      subtitle: 'Customization',
      description: '根据您的商务需求，提供从内饰到外观的全方位专属定制服务',
      features: ['内饰定制', '外观改装', '功能配置', '专属标识'],
      icon: 'design'
    },
    {
      id: 2,
      title: '专业维护保养',
      subtitle: 'Professional Maintenance',
      description: '由认证技师团队提供专业维护，确保您的商务车始终保持最佳状态',
      features: ['定期保养', '故障诊断', '零件更换', '性能优化'],
      icon: 'tool'
    },
    {
      id: 3,
      title: '金融解决方案',
      subtitle: 'Financial Solutions',
      description: '灵活多样的金融服务，让您轻松拥有心仪的高端商务车',
      features: ['分期付款', '融资租赁', '保险服务', '置换升级'],
      icon: 'business'
    },
    {
      id: 4,
      title: 'VIP专享服务',
      subtitle: 'VIP Exclusive',
      description: '专为VIP客户打造的尊享服务体验，享受专属礼遇',
      features: ['专属顾问', '优先服务', '贵宾通道', '增值服务'],
      icon: 'star'
    },
    {
      id: 5,
      title: '智能互联支持',
      subtitle: 'Smart Connectivity',
      description: '先进的车载智能系统技术支持，让您的商务出行更智能便捷',
      features: ['系统升级', '功能培训', '远程诊断', '技术咨询'],
      icon: 'mobile'
    },
    {
      id: 6,
      title: '企业服务方案',
      subtitle: 'Corporate Solutions',
      description: '针对企业客户的一站式商务用车解决方案，提升企业形象',
      features: ['fleet管理', '批量采购', '企业定制', '运营支持'],
      icon: 'tool'
    }
  ];

  return (
    <div className={styles.servicesPage}>
      <PageHeader
        title="专属服务"
        englishTitle="Exclusive Services"
        subtitle="为您提供全方位的专业服务"
        description={[
          "我们不仅提供高品质的商务车，更为您提供全生命周期的专业服务",
          "从购车到使用，从维护到升级，让每一次出行都完美无忧"
        ]}
        backgroundType="services"
        showStats={true}
        stats={serviceStats}
        breadcrumbs={['首页', '专属服务']}
      />
      
      <div className="container">
        {/* 服务介绍区域 */}
        <section className={styles.servicesIntro}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              专业服务体系
            </h2>
            <p className={styles.sectionDescription}>
              六大核心服务模块，为您打造全方位的商务出行解决方案
            </p>
          </div>

          <div className={styles.servicesGrid}>
            {services.map((service) => (
              <div key={service.id} className={styles.serviceCard}>
                <div className={styles.serviceHeader}>
                  <div className={styles.serviceIcon}>
                    <Icon type={service.icon} size="48px" color="var(--accent-gold)" />
                  </div>
                  <h3 className={styles.serviceTitle}>{service.title}</h3>
                  <p className={styles.serviceSubtitle}>{service.subtitle}</p>
                </div>

                <p className={styles.serviceDescription}>
                  {service.description}
                </p>

                <div className={styles.serviceFeatures}>
                  <h4 className={styles.featuresTitle}>服务内容</h4>
                  <div className={styles.featuresGrid}>
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className={styles.featureItem}>
                        <Icon type="star" size="14px" color="var(--accent-gold)" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Button variant="outline" size="medium" className={styles.serviceButton}>
                  了解详情
                </Button>
              </div>
            ))}
          </div>
        </section>

        {/* 服务承诺区域 */}
        <section className={styles.servicePromise}>
          <h2 className={styles.promiseTitle}>我们的服务承诺</h2>
          <p className={styles.promiseDescription}>
            智锐商务车始终坚持以客户为中心，为您提供超越期待的服务体验
          </p>
          <div className={styles.promiseActions}>
            <Button variant="primary" size="large">
              预约服务
            </Button>
            <Button variant="outline" size="large">
              服务热线
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services;
