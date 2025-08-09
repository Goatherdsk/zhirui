import React from 'react';
import PageHeader from '../../components/PageHeader';
import Button from '../../components/Button';
import Icon from '../../components/Icon';

const Contact = () => {
  const contactStats = [
    { number: '100+', label: '服务网点' },
    { number: '24h', label: '在线客服' },
    { number: '2h', label: '响应时间' }
  ];

  const contactMethods = [
    {
      id: 1,
      title: '客服热线',
      subtitle: 'Service Hotline',
      content: '400-888-9999',
      description: '7×24小时专业客服，随时为您解答疑问',
      icon: 'phone',
      type: 'phone'
    },
    {
      id: 2,
      title: '官方邮箱',
      subtitle: 'Official Email',
      content: 'service@zhirui.com',
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
      content: '上海市浦东新区陆家嘴环路1000号',
      description: '欢迎您莅临我们的总部参观交流',
      icon: 'location',
      type: 'address'
    }
  ];

  const offices = [
    {
      city: '北京',
      address: '北京市朝阳区建国门外大街1号',
      phone: '010-8888-9999',
      manager: '张经理'
    },
    {
      city: '上海',
      address: '上海市浦东新区陆家嘴环路1000号',
      phone: '021-8888-9999',
      manager: '李经理'
    },
    {
      city: '广州',
      address: '广州市天河区珠江新城花城大道85号',
      phone: '020-8888-9999',
      manager: '王经理'
    },
    {
      city: '深圳',
      address: '深圳市福田区深南大道7088号',
      phone: '0755-8888-9999',
      manager: '陈经理'
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
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.borderColor = 'var(--accent-gold)';
                  e.currentTarget.style.boxShadow = '0 20px 60px rgba(0, 0, 0, 0.3), 0 0 40px rgba(201, 169, 110, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
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

        {/* 分公司信息 */}
        <section className="office-locations" style={{ padding: '4rem 0' }}>
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
              全国服务网点
            </h2>
            <p style={{
              fontSize: '1.2rem',
              color: 'var(--accent-light-gold)',
              opacity: '0.8',
              lineHeight: '1.8',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              遍布全国的服务网点，为您提供就近的专业服务
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
            marginBottom: '4rem'
          }}>
            {offices.map((office, index) => (
              <div
                key={index}
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '15px',
                  padding: '2rem',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                  e.currentTarget.style.borderColor = 'var(--accent-gold)';
                  e.currentTarget.style.transform = 'translateY(-5px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  color: 'var(--accent-gold)',
                  marginBottom: '1rem',
                  textAlign: 'center'
                }}>
                  {office.city}分公司
                </h3>

                <div style={{ marginBottom: '1rem' }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.5rem',
                    marginBottom: '0.8rem'
                  }}>
                    <span style={{ color: 'var(--accent-gold)', fontSize: '0.9rem' }}>
                      <Icon type="location" size="16px" color="var(--accent-gold)" />
                    </span>
                    <span style={{
                      color: 'var(--accent-light-gold)',
                      fontSize: '0.9rem',
                      lineHeight: '1.4'
                    }}>
                      {office.address}
                    </span>
                  </div>

                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    marginBottom: '0.8rem'
                  }}>
                    <span style={{ color: 'var(--accent-gold)', fontSize: '0.9rem' }}>
                      <Icon type="phone" size="16px" color="var(--accent-gold)" />
                    </span>
                    <span style={{
                      color: 'var(--accent-light-gold)',
                      fontSize: '0.9rem',
                      fontFamily: 'monospace'
                    }}>
                      {office.phone}
                    </span>
                  </div>

                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}>
                    <Icon type="business" size="16px" color="var(--accent-gold)" />
                    <span style={{
                      color: 'var(--accent-light-gold)',
                      fontSize: '0.9rem'
                    }}>
                      负责人：{office.manager}
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
