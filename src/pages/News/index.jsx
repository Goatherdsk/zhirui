import React from 'react';
import PageHeader from '../../components/PageHeader';
import Button from '../../components/Button';
import Icon from '../../components/Icon';

const News = () => {
  const newsStats = [
    { number: '100+', label: '新闻报道' },
    { number: '50+', label: '媒体关注' },
    { number: '20+', label: '行业奖项' }
  ];

  return (
    <div className="page">
      <PageHeader
        title="公司动态"
        englishTitle="Company News"
        subtitle="智睿商务车 - 最新资讯与发展动态"
        description={[
          "关注智睿汽车最新动态，了解行业前沿资讯",
          "见证企业发展历程，分享成长成果"
        ]}
        backgroundType="news"
        showStats={true}
        stats={newsStats}
        breadcrumbs={['首页', '公司动态']}
      />
      
      <div className="container">
        {/* 最新动态区域 */}
        <section className="latest-news" style={{ padding: '6rem 0 4rem' }}>
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
              <Icon type="tech" size="24px" color="var(--accent-gold)" /> 最新动态
            </h2>
            <p style={{
              fontSize: '1.1rem',
              color: 'var(--text-light)',
              opacity: '0.8'
            }}>
              掌握最新资讯，了解行业动向
            </p>
          </div>

          {/* 新闻内容将在这里添加 */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.03)',
            borderRadius: '20px',
            padding: '4rem',
            border: '1px solid rgba(201, 169, 110, 0.2)',
            backdropFilter: 'blur(10px)',
            textAlign: 'center'
          }}>
            <div style={{
              fontSize: '3rem',
              marginBottom: '2rem',
              display: 'flex',
              justifyContent: 'center'
            }}>
              <Icon type="crown" size="64px" color="var(--accent-gold)" />
            </div>
            
            <h3 style={{
              fontSize: '1.8rem',
              color: 'var(--accent-gold)',
              marginBottom: '1rem',
              fontWeight: '600'
            }}>
              内容正在准备中
            </h3>
            
            <p style={{
              fontSize: '1.1rem',
              color: 'var(--text-light)',
              opacity: '0.8',
              lineHeight: '1.6'
            }}>
              我们正在整理最新的公司动态和行业资讯，敬请期待精彩内容的发布。
            </p>
          </div>
        </section>

        {/* 媒体报道区域 */}
        <section className="media-coverage" style={{ padding: '4rem 0' }}>
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
              <Icon type="business" size="24px" color="var(--accent-gold)" /> 媒体报道
            </h2>
            <p style={{
              fontSize: '1.1rem',
              color: 'var(--text-light)',
              opacity: '0.8'
            }}>
              行业媒体关注与报道
            </p>
          </div>

          <div style={{
            background: 'rgba(255, 255, 255, 0.03)',
            borderRadius: '20px',
            padding: '4rem',
            border: '1px solid rgba(201, 169, 110, 0.2)',
            backdropFilter: 'blur(10px)',
            textAlign: 'center'
          }}>
            <p style={{
              fontSize: '1.1rem',
              color: 'var(--text-light)',
              opacity: '0.8',
              lineHeight: '1.6'
            }}>
              媒体报道内容即将更新...
            </p>
          </div>
        </section>

        {/* 行业资讯区域 */}
        <section className="industry-news" style={{ padding: '4rem 0 6rem' }}>
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
              <Icon type="diamond" size="24px" color="var(--accent-gold)" /> 行业资讯
            </h2>
            <p style={{
              fontSize: '1.1rem',
              color: 'var(--text-light)',
              opacity: '0.8'
            }}>
              汽车行业最新趋势与发展
            </p>
          </div>

          <div style={{
            background: 'rgba(255, 255, 255, 0.03)',
            borderRadius: '20px',
            padding: '4rem',
            border: '1px solid rgba(201, 169, 110, 0.2)',
            backdropFilter: 'blur(10px)',
            textAlign: 'center'
          }}>
            <p style={{
              fontSize: '1.1rem',
              color: 'var(--text-light)',
              opacity: '0.8',
              lineHeight: '1.6'
            }}>
              行业资讯内容即将更新...
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default News;
