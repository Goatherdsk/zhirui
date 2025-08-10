import React from 'react';
import { useNavigate } from 'react-router-dom';
import PageHeader from '../../components/PageHeader';
import Icon from '../../components/Icon';
import styles from './index.module.less';
const News = () => {
  const navigate = useNavigate();
  
  const newsStats = [
    { number: '100+', label: '新闻报道' },
    { number: '50+', label: '媒体关注' },
    { number: '20+', label: '行业奖项' }
  ];

  // 简化的新闻数据，详细内容在详情页显示
  const newsData = [
    {
      id: 1,
      title: "投资10亿新能源基地投产，智锐打造全球首个5G全连接改装车工厂",
      date: "2025-06-18",
      category: "企业动态",
      image: "/images/show/1751077930430153.jpg",
      summary: "安徽智锐新能源汽车智慧工厂在合肥经开区正式投产，这座占地386亩的\"黑灯工厂\"，标志着改装车行业进入智能化制造新时代。",
      highlights: ["32台库卡机器人", "10万台年产能", "50亿预计营收"]
    },
    {
      id: 2,
      title: "智锐汽车斩获\"国家级制造业单项冠军\"称号，冷藏车技术领跑行业",
      date: "2025-06-15",
      category: "荣誉奖项",
      image: "/images/show/1751098400544149.jpg",
      summary: "工业和信息化部正式公布第五批制造业单项冠军企业名单，智锐汽车凭借其在冷藏改装车领域的核心技术优势成功入选。",
      highlights: ["±0.5℃精准温控", "4,500台年销量", "18.7%市场占有率"]
    },
    {
      id: 3,
      title: "星海9系房车问鼎红点至尊奖，重新定义旅居科技",
      date: "2025-05-20",
      category: "产品荣誉",
      image: "/images/show/1751098506311782.jpg",
      summary: "智锐欧滨房车制造的星海9系从全球57国4218件作品中脱颖而出，斩获最高奖项\"Best of the Best\"，这是中国房车首次获此殊荣。",
      highlights: ["18.6kWh日发电量", "24㎡居住空间", "2,200台订单量"]
    },
    {
      id: 4,
      title: "智锐携手中科大共建智能网联实验室，攻关无人冷链技术",
      date: "2025-05-20",
      category: "合作发展",
      image: "/images/show/1751098637298860.jpg",
      summary: "安徽智锐汽车与中国科学技术大学签署协议，共同投资8,000万元建设\"智能网联特种车辆联合实验室\"。",
      highlights: ["3厘米定位精度", "8,000万投资", "50名硕博人才"]
    },
    {
      id: 5,
      title: "发布行业首份ESG报告，智锐汽车碳中和行动获国际认证",
      date: "2025-04-15",
      category: "社会责任",
      image: "/images/show/1751098685403870.jpg",
      summary: "智锐汽车发布《2025碳中和行动白皮书》，承诺于2035年实现全链零碳，成为特种车行业ESG实践标杆。",
      highlights: ["87家供应商覆盖", "92%电池利用率", "3,200吨CO₂减排"]
    },
    {
      id: 6,
      title: "\"匠星计划\"启动，智锐三年投入5,000万锻造大国工匠",
      date: "2025-07-01",
      category: "人才培养",
      image: "/images/show/1751103175966834.png",
      summary: "响应国家\"新时代工匠\"战略，智锐汽车启动匠星计划，构建覆盖\"选育用留\"全周期的高技能人才培养体系。",
      highlights: ["8,000㎡实训基地", "200万年度奖金", "40%效率提升"]
    }
  ];

  const handleNewsClick = (newsId) => {
    navigate(`/news/${newsId}`);
  };

  return (
    <div className={styles.page}>
      <PageHeader
        title="公司动态"
        englishTitle="Company News"
        subtitle="智锐商务车 - 最新资讯与发展动态"
        description={[
          "关注智锐汽车最新动态，了解行业前沿资讯",
          "见证企业发展历程，分享成长成果"
        ]}
        backgroundType="news"
        showStats={true}
        stats={newsStats}
        breadcrumbs={['首页', '公司动态']}
      />
      
      <div className="container">
        {/* 最新动态区域 */}
        <section className={styles.latestNews} style={{ padding: '6rem 0 4rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 className={styles.sectionTitle} style={{
              fontSize: '3rem',
              fontWeight: '700',
              color: 'var(--text-light)',
              marginBottom: '1rem',
              background: 'linear-gradient(135deg, var(--accent-gold) 0%, #ffffff 50%, var(--accent-gold) 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              <Icon type="tech" size="32px" color="var(--accent-gold)" style={{ marginRight: '1rem' }} />
              最新动态
            </h2>
            <p style={{
              fontSize: '1.2rem',
              color: 'var(--text-light)',
              opacity: '0.8',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: '1.6'
            }}>
              掌握最新资讯，了解行业动向，见证智锐汽车的创新发展历程
            </p>
          </div>

          {/* 新闻网格布局 */}
          <div className={styles.newsGrid}>
            {newsData.map((news) => (
              <article 
                key={news.id}
                className={styles.newsArticle}
                onClick={() => handleNewsClick(news.id)}
              >
                {/* 新闻图片区域 */}
                <div className={styles.newsImageContainer}>
                  <img 
                    src={news.image}
                    alt={news.title}
                    className={styles.newsImage}
                  />
                </div>
                
                {/* 新闻内容区域 */}
                <div className={styles.newsContent}>
                  {/* 元数据行 */}
                  <div className={styles.newsMetadata}>
                    <span className={styles.newsCategory}>
                      {news.category}
                    </span>
                    <span className={styles.newsDate}>
                      {news.date}
                    </span>
                  </div>
                  
                  {/* 标题 */}
                  <h3 className={styles.newsTitle}>
                    {news.title}
                  </h3>
                  
                  {/* 摘要 */}
                  <p className={styles.newsSummary}>
                    {news.summary}
                  </p>
                  
                  {/* 高亮标签 */}
                  <div className={styles.newsHighlights}>
                    {news.highlights.map((highlight, idx) => (
                      <span
                        key={idx}
                        className={styles.newsHighlight}
                      >
                        <span>{highlight}</span>
                      </span>
                    ))}
                  </div>
                  
                  {/* 操作按钮 */}
                  <div className={styles.newsActions}>
                    <button
                      className={styles.readMoreButton}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleNewsClick(news.id);
                      }}
                    >
                      <span>阅读全文</span>
                      <Icon type="arrow" size="16px" style={{ marginLeft: '0.5rem' }} />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default News;
