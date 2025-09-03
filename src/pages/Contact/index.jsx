import React from 'react';
import PageHeader from '../../components/PageHeader';
import Button from '../../components/Button';
import Icon from '../../components/Icon';
import { COMPANY_INFO } from '../../constants/companyInfo';

const Contact = () => {
  const contactStats = [
    { number: '4大', label: '销售区域' },
    { number: '24h', label: '在线客服' },
    { number: '1h', label: '快速响应' }
  ];

  const contactMethods = [
    {
      id: 1,
      title: '客服热线',
      subtitle: 'Service Hotline',
      content: COMPANY_INFO.phone,
      description: '7×24小时专业客服，随时为您解答疑问',
      icon: 'phone',
      type: 'phone'
    },
    {
      id: 2,
      title: '官方邮箱',
      subtitle: 'Official Email',
      content: COMPANY_INFO.email,
      description: '专业客服团队，1个工作日内回复您的邮件',
      icon: 'email',
      type: 'email'
    },
    {
      id: 3,
      title: '在线客服',
      subtitle: 'Online Chat',
      content: '即时沟通',
      description: '智能客服+人工客服，为您提供实时咨询服务',
      icon: 'chat',
      type: 'chat'
    },
    {
      id: 4,
      title: '总部地址',
      subtitle: 'Headquarters',
      content: COMPANY_INFO.address.full,
      description: '欢迎您莅临我们的总部参观交流',
      icon: 'location',
      type: 'address'
    }
  ];

  // 销售网点信息
  const salesNetworks = [
    {
      region: '华东区域',
      cities: ['合肥', '南京', '杭州', '上海'],
      manager: '华东销售总监',
      phone: '138-xxxx-1001',
      email: 'east@zhirui.com'
    },
    {
      region: '华北区域', 
      cities: ['北京', '天津', '石家庄', '济南'],
      manager: '华北销售总监',
      phone: '138-xxxx-1002',
      email: 'north@zhirui.com'
    },
    {
      region: '华南区域',
      cities: ['广州', '深圳', '厦门', '海口'],
      manager: '华南销售总监',
      phone: '138-xxxx-1003',
      email: 'south@zhirui.com'
    },
    {
      region: '西南区域',
      cities: ['成都', '重庆', '昆明', '贵阳'],
      manager: '西南销售总监',
      phone: '138-xxxx-1004',
      email: 'southwest@zhirui.com'
    }
  ];

  // 服务支持信息
  const serviceSupports = [
    {
      title: '技术支持',
      description: '专业技术团队提供7×24小时技术支持',
      phone: '400-888-6688转1',
      email: 'tech@zhirui.com',
      icon: 'wrench'
    },
    {
      title: '售后服务',
      description: '全国联保，就近服务，快速响应',
      phone: '400-888-6688转2', 
      email: 'service@zhirui.com',
      icon: 'shield'
    },
    {
      title: '配件供应',
      description: '原厂配件保障，全国物流配送',
      phone: '400-888-6688转3',
      email: 'parts@zhirui.com', 
      icon: 'package'
    }
  ];

  return (
    <div className="page">
      <PageHeader
        title="联系我们"
        englishTitle="Contact Us"
        subtitle="与我们取得联系，获取专业的咨询服务"
        description={[
          "我们的专业团队随时为您提供咨询服务和技术支持",
          "无论您有任何问题或需求，我们都将竭诚为您解答"
        ]}
        backgroundType="contact"
        showStats={true}
        stats={contactStats}
        breadcrumbs={['首页', '联系我们']}
      />
      
      <div className="container">
        {/* 联系方式区域 */}
        <section className="contact-methods" style={{ padding: '6rem 0 4rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: '600',
              color: 'var(--accent-light-gold)',
              marginBottom: '1rem',
              background: 'linear-gradient(135deg, var(--accent-gold) 0%, var(--accent-light-gold) 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              多种联系方式
            </h2>
            <p style={{
              fontSize: '1.2rem',
              color: 'var(--accent-light-gold)',
              opacity: '0.8',
              lineHeight: '1.8',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              选择最适合您的沟通方式，我们将为您提供专业的服务支持
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            marginBottom: '4rem'
          }}>
            {contactMethods.map((method) => (
              <div
                key={method.id}
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '20px',
                  padding: '2.5rem',
                  backdropFilter: 'blur(10px)',
                  transition: 'all 0.4s ease',
                  textAlign: 'center',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--accent-gold)';
                  e.currentTarget.style.boxShadow = '0 8px 32px rgba(201, 169, 110, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{
                  fontSize: '3rem',
                  marginBottom: '1.5rem',
                  display: 'flex',
                  justifyContent: 'center'
                }}>
                  <Icon type={method.icon} size="48px" color="var(--accent-gold)" />
                </div>

                <h3 style={{
                  fontSize: '1.8rem',
                  fontWeight: '600',
                  color: 'var(--accent-light-gold)',
                  marginBottom: '0.5rem'
                }}>
                  {method.title}
                </h3>

                <p style={{
                  fontSize: '1rem',
                  color: 'var(--accent-gold)',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  marginBottom: '1.5rem',
                  fontWeight: '400'
                }}>
                  {method.subtitle}
                </p>

                <div style={{
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  color: 'var(--accent-gold)',
                  marginBottom: '1rem',
                  fontFamily: 'monospace'
                }}>
                  {method.content}
                </div>

                <p style={{
                  color: 'var(--accent-light-gold)',
                  opacity: '0.8',
                  lineHeight: '1.6',
                  marginBottom: '2rem'
                }}>
                  {method.description}
                </p>

                <Button 
                  variant="outline" 
                  size="medium" 
                  style={{ width: '100%' }}
                >
                  {method.type === 'phone' && '立即拨打'}
                  {method.type === 'email' && '发送邮件'}
                  {method.type === 'chat' && '开始对话'}
                  {method.type === 'address' && '查看地图'}
                </Button>
              </div>
            ))}
          </div>
        </section>

        {/* 销售网点区域 */}
        <section className="sales-networks" style={{ padding: '4rem 0' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: '600',
              color: 'var(--accent-light-gold)',
              marginBottom: '1rem',
              background: 'linear-gradient(135deg, var(--accent-gold) 0%, var(--accent-light-gold) 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              <Icon type="network" size="24px" color="var(--accent-gold)" /> 销售网络
            </h2>
            <p style={{
              fontSize: '1.2rem',
              color: 'var(--accent-light-gold)',
              opacity: '0.8',
              lineHeight: '1.8',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              覆盖全国主要城市的销售网络，为您提供就近的专业销售与咨询服务
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem',
            marginBottom: '4rem'
          }}>
            {salesNetworks.map((network, index) => (
              <div
                key={index}
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(201, 169, 110, 0.2)',
                  borderRadius: '16px',
                  padding: '2.5rem',
                  transition: 'all 0.3s ease',
                  textAlign: 'center'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(201, 169, 110, 0.08)';
                  e.currentTarget.style.borderColor = 'var(--accent-gold)';
                  e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                  e.currentTarget.style.borderColor = 'rgba(201, 169, 110, 0.2)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <h3 style={{
                  fontSize: '1.6rem',
                  fontWeight: '600',
                  color: 'var(--accent-gold)',
                  marginBottom: '1.5rem'
                }}>
                  {network.region}
                </h3>

                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.5rem',
                  justifyContent: 'center',
                  marginBottom: '2rem'
                }}>
                  {network.cities.map((city, cityIndex) => (
                    <span
                      key={cityIndex}
                      style={{
                        background: 'rgba(201, 169, 110, 0.15)',
                        color: 'var(--accent-light-gold)',
                        padding: '0.4rem 1rem',
                        borderRadius: '20px',
                        fontSize: '0.9rem',
                        border: '1px solid rgba(201, 169, 110, 0.3)'
                      }}
                    >
                      {city}
                    </span>
                  ))}
                </div>

                <div style={{ marginBottom: '1rem' }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    marginBottom: '0.8rem'
                  }}>
                    <Icon type="business" size="16px" color="var(--accent-gold)" />
                    <span style={{
                      color: 'var(--accent-light-gold)',
                      fontSize: '1rem',
                      fontWeight: '500'
                    }}>
                      {network.manager}
                    </span>
                  </div>

                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    marginBottom: '0.8rem'
                  }}>
                    <Icon type="phone" size="16px" color="var(--accent-gold)" />
                    <span style={{
                      color: 'var(--accent-light-gold)',
                      fontSize: '1rem',
                      fontFamily: 'monospace'
                    }}>
                      {network.phone}
                    </span>
                  </div>

                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem'
                  }}>
                    <Icon type="email" size="16px" color="var(--accent-gold)" />
                    <span style={{
                      color: 'var(--accent-light-gold)',
                      fontSize: '1rem'
                    }}>
                      {network.email}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 服务支持区域 */}
        <section className="service-support" style={{ padding: '4rem 0' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: '600',
              color: 'var(--accent-light-gold)',
              marginBottom: '1rem',
              background: 'linear-gradient(135deg, var(--accent-gold) 0%, var(--accent-light-gold) 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              <Icon type="shield" size="24px" color="var(--accent-gold)" /> 服务支持
            </h2>
            <p style={{
              fontSize: '1.2rem',
              color: 'var(--accent-light-gold)',
              opacity: '0.8',
              lineHeight: '1.8',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              全方位的服务支持体系，确保您的每一次出行都安心无忧
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            marginBottom: '4rem'
          }}>
            {serviceSupports.map((support, index) => (
              <div
                key={index}
                style={{
                  background: 'linear-gradient(135deg, rgba(26, 26, 26, 0.8) 0%, rgba(45, 45, 45, 0.6) 100%)',
                  border: '1px solid rgba(201, 169, 110, 0.2)',
                  borderRadius: '16px',
                  padding: '2.5rem',
                  transition: 'all 0.3s ease',
                  textAlign: 'center'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(135deg, rgba(201, 169, 110, 0.1) 0%, rgba(26, 26, 26, 0.9) 100%)';
                  e.currentTarget.style.borderColor = 'var(--accent-gold)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(135deg, rgba(26, 26, 26, 0.8) 0%, rgba(45, 45, 45, 0.6) 100%)';
                  e.currentTarget.style.borderColor = 'rgba(201, 169, 110, 0.2)';
                }}
              >
                <div style={{
                  fontSize: '3rem',
                  marginBottom: '1.5rem',
                  display: 'flex',
                  justifyContent: 'center'
                }}>
                  <Icon type={support.icon} size="48px" color="var(--accent-gold)" />
                </div>

                <h3 style={{
                  fontSize: '1.6rem',
                  fontWeight: '600',
                  color: 'var(--accent-gold)',
                  marginBottom: '1rem'
                }}>
                  {support.title}
                </h3>

                <p style={{
                  fontSize: '1rem',
                  color: 'var(--accent-light-gold)',
                  opacity: '0.8',
                  lineHeight: '1.6',
                  marginBottom: '1.5rem'
                }}>
                  {support.description}
                </p>

                <div style={{ marginBottom: '1rem' }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    marginBottom: '0.8rem'
                  }}>
                    <Icon type="phone" size="16px" color="var(--accent-gold)" />
                    <span style={{
                      color: 'var(--accent-light-gold)',
                      fontSize: '1rem',
                      fontFamily: 'monospace'
                    }}>
                      {support.phone}
                    </span>
                  </div>

                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem'
                  }}>
                    <Icon type="email" size="16px" color="var(--accent-gold)" />
                    <span style={{
                      color: 'var(--accent-light-gold)',
                      fontSize: '1rem'
                    }}>
                      {support.email}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 留言咨询区域 */}
        <section className="contact-form" style={{
          background: 'linear-gradient(135deg, rgba(26, 26, 26, 0.95) 0%, rgba(45, 45, 45, 0.9) 100%)',
          padding: '4rem',
          borderRadius: '20px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          marginBottom: '4rem'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: '600',
              color: 'var(--accent-light-gold)',
              marginBottom: '1rem',
              background: 'linear-gradient(135deg, var(--accent-gold) 0%, var(--accent-light-gold) 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              在线咨询
            </h2>
            <p style={{
              fontSize: '1.2rem',
              color: 'var(--accent-light-gold)',
              opacity: '0.8',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              填写您的咨询信息，我们将在24小时内与您取得联系
            </p>
          </div>

          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '2rem',
            flexWrap: 'wrap'
          }}>
            <Button variant="primary" size="large">
              在线咨询表单
            </Button>
            <Button variant="outline" size="large">
              预约上门服务
            </Button>
            <Button variant="secondary" size="large">
              申请试驾
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
