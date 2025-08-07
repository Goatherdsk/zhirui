import React from 'react';
import PageHeader from '../components/PageHeader';

const About = () => {
  const aboutStats = [
    { number: '15+', label: '年专业经验' },
    { number: '500+', label: '企业客户' },
    { number: '50万+', label: '用户信赖' }
  ];

  return (
    <div className="page">
      <PageHeader
        title="关于我们"
        englishTitle="About Us"
        subtitle="智睿商务车 - 您的商务出行伙伴"
        description={[
          "自2008年成立以来，智睿商务车始终致力于为企业客户提供高品质的商务出行解决方案",
          "我们以匠心精神打造每一款产品，用专业服务赢得客户信赖"
        ]}
        backgroundType="about"
        showStats={true}
        stats={aboutStats}
        breadcrumbs={['首页', '关于我们']}
      />
      
      <div className="container">
        {/* 公司介绍区域 */}
        <section className="company-intro" style={{ padding: '6rem 0' }}>
          <div className="intro-content" style={{ 
            background: 'rgba(255, 255, 255, 0.03)',
            borderRadius: '20px',
            padding: '4rem',
            border: '1px solid rgba(201, 169, 110, 0.2)',
            backdropFilter: 'blur(10px)'
          }}>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <h2 style={{
                fontSize: '2.5rem',
                fontWeight: '600',
                color: 'var(--color-light)',
                marginBottom: '1rem',
                background: 'linear-gradient(135deg, var(--color-gold) 0%, var(--color-light) 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                企业愿景
              </h2>
              <p style={{
                fontSize: '1.2rem',
                color: 'var(--color-light)',
                opacity: '0.8',
                lineHeight: '1.8',
                maxWidth: '800px',
                margin: '0 auto'
              }}>
                成为中国领先的高端商务车制造商，为企业客户提供卓越的移动办公体验，
                让每一次商务出行都成为成功的开始。
              </p>
            </div>

            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
              gap: '2rem',
              marginTop: '4rem'
            }}>
              <div style={{
                padding: '2rem',
                background: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '15px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                transition: 'all 0.3s ease'
              }}>
                <h3 style={{ 
                  color: 'var(--color-gold)', 
                  fontSize: '1.5rem', 
                  marginBottom: '1rem',
                  fontWeight: '600'
                }}>
                  ✦ 品质承诺
                </h3>
                <p style={{ 
                  color: 'var(--color-light)', 
                  opacity: '0.8', 
                  lineHeight: '1.6' 
                }}>
                  严格的质量控制体系，确保每一辆车都达到最高标准。从设计到制造，
                  我们始终坚持精益求精的工匠精神。
                </p>
              </div>

              <div style={{
                padding: '2rem',
                background: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '15px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                transition: 'all 0.3s ease'
              }}>
                <h3 style={{ 
                  color: 'var(--color-gold)', 
                  fontSize: '1.5rem', 
                  marginBottom: '1rem',
                  fontWeight: '600'
                }}>
                  ✦ 创新驱动
                </h3>
                <p style={{ 
                  color: 'var(--color-light)', 
                  opacity: '0.8', 
                  lineHeight: '1.6' 
                }}>
                  持续投入研发，将最新的科技融入到产品中。智能化、电动化是我们
                  未来发展的重要方向。
                </p>
              </div>

              <div style={{
                padding: '2rem',
                background: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '15px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                transition: 'all 0.3s ease'
              }}>
                <h3 style={{ 
                  color: 'var(--color-gold)', 
                  fontSize: '1.5rem', 
                  marginBottom: '1rem',
                  fontWeight: '600'
                }}>
                  ✦ 客户至上
                </h3>
                <p style={{ 
                  color: 'var(--color-light)', 
                  opacity: '0.8', 
                  lineHeight: '1.6' 
                }}>
                  以客户需求为中心，提供个性化的定制服务和全方位的售后支持，
                  确保客户获得最佳的使用体验。
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
