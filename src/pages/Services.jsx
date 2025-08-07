import React from 'react';
import PageHeader from '../components/PageHeader';
import Button from '../components/Button';
import Icon from '../components/Icon';

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
      description: '根据您的具体需求，提供从内饰到外观的全方位定制服务',
      features: ['内饰定制', '外观改装', '功能配置', '专属标识'],
      icon: 'design'
    },
    {
      id: 2,
      title: '专业维护',
      subtitle: 'Maintenance',
      description: '由经过认证的技师团队，为您的爱车提供专业的维护保养服务',
      features: ['定期保养', '故障诊断', '零件更换', '性能优化'],
      icon: 'tool'
    },
    {
      id: 3,
      title: '金融服务',
      subtitle: 'Finance',
      description: '灵活的金融解决方案，让您轻松拥有心仪的商务车',
      features: ['分期付款', '融资租赁', '保险服务', '置换升级'],
      icon: '💰'
    },
    {
      id: 4,
      title: '司机培训',
      subtitle: 'Training',
      description: '专业的司机培训课程，确保安全、舒适的驾驶体验',
      features: ['安全驾驶', '礼仪培训', '车辆操作', '应急处理'],
      icon: '🎓'
    },
    {
      id: 5,
      title: '道路救援',
      subtitle: 'Roadside Assistance',
      description: '24小时道路救援服务，让您的出行无后顾之忧',
      features: ['紧急救援', '现场维修', '拖车服务', '备用车辆'],
      icon: 'car'
    },
    {
      id: 6,
      title: '管家服务',
      subtitle: 'Concierge',
      description: '专属管家服务，为您提供全方位的商务出行支持',
      features: ['行程规划', '预约服务', '24小时热线', '贵宾接待'],
      icon: '👔'
    }
  ];

  return (
    <div className="page">
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
        <section className="services-intro" style={{ padding: '6rem 0 4rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: '600',
              color: 'var(--text-light)',
              marginBottom: '1rem',
              background: 'linear-gradient(135deg, var(--accent-gold) 0%, var(--text-light) 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              专业服务体系
            </h2>
            <p style={{
              fontSize: '1.2rem',
              color: 'var(--text-light)',
              opacity: '0.8',
              lineHeight: '1.8',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              六大核心服务模块，为您打造全方位的商务出行解决方案
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '2rem',
            marginBottom: '4rem'
          }}>
            {services.map((service) => (
              <div
                key={service.id}
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '20px',
                  padding: '2.5rem',
                  backdropFilter: 'blur(10px)',
                  transition: 'all 0.4s ease',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-10px)';
                  e.target.style.borderColor = 'var(--accent-gold)';
                  e.target.style.boxShadow = '0 20px 60px rgba(0, 0, 0, 0.3), 0 0 40px rgba(201, 169, 110, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                  e.target.style.boxShadow = 'none';
                }}
              >
                <div style={{ marginBottom: '1.5rem' }}>
                  <div style={{
                    fontSize: '3rem',
                    marginBottom: '1rem',
                    display: 'flex',
                    justifyContent: 'center'
                  }}>
                    <Icon type={service.icon} size="48px" color="var(--accent-gold)" />
                  </div>
                  <h3 style={{
                    fontSize: '1.8rem',
                    fontWeight: '600',
                    color: 'var(--text-light)',
                    marginBottom: '0.5rem'
                  }}>
                    {service.title}
                  </h3>
                  <p style={{
                    fontSize: '1rem',
                    color: 'var(--accent-gold)',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    fontWeight: '400'
                  }}>
                    {service.subtitle}
                  </p>
                </div>

                <p style={{
                  color: 'var(--text-light)',
                  opacity: '0.8',
                  lineHeight: '1.6',
                  marginBottom: '2rem',
                  fontSize: '1rem'
                }}>
                  {service.description}
                </p>

                <div style={{ marginBottom: '2rem' }}>
                  <h4 style={{
                    color: 'var(--text-light)',
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    marginBottom: '1rem'
                  }}>
                    服务内容
                  </h4>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '0.8rem'
                  }}>
                    {service.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          padding: '0.5rem',
                          background: 'rgba(255, 255, 255, 0.03)',
                          borderRadius: '8px',
                          transition: 'all 0.3s ease'
                        }}
                      >
                        <span style={{ color: 'var(--accent-gold)', fontSize: '0.9rem' }}>
                          <Icon type="star" size="14px" color="var(--accent-gold)" />
                        </span>
                        <span style={{
                          color: 'var(--text-light)',
                          fontSize: '0.9rem'
                        }}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <Button variant="outline" size="medium" style={{ width: '100%' }}>
                  了解详情
                </Button>
              </div>
            ))}
          </div>
        </section>

        {/* 服务承诺区域 */}
        <section className="service-promise" style={{
          background: 'linear-gradient(135deg, rgba(26, 26, 26, 0.95) 0%, rgba(45, 45, 45, 0.9) 100%)',
          padding: '4rem',
          borderRadius: '20px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          textAlign: 'center',
          marginBottom: '4rem'
        }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: '600',
            color: 'var(--text-light)',
            marginBottom: '2rem',
            background: 'linear-gradient(135deg, var(--accent-gold) 0%, var(--text-light) 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            我们的服务承诺
          </h2>
          <p style={{
            fontSize: '1.2rem',
            color: 'var(--text-light)',
            opacity: '0.8',
            marginBottom: '3rem',
            maxWidth: '800px',
            margin: '0 auto 3rem'
          }}>
            智睿商务车始终坚持以客户为中心，为您提供超越期待的服务体验
          </p>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '2rem',
            flexWrap: 'wrap'
          }}>
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
