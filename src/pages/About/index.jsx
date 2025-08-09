import React from 'react';
import PageHeader from '../../components/PageHeader';
import Button from '../../components/Button';
import Icon from '../../components/Icon';

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
        {/* 公司简介区域 */}
        <section className="company-intro" style={{ padding: '4rem 0 3rem' }}>
          <div className="intro-content" style={{ 
            background: 'rgba(255, 255, 255, 0.03)',
            borderRadius: '20px',
            padding: '3rem',
            border: '1px solid rgba(201, 169, 110, 0.2)',
            backdropFilter: 'blur(10px)',
            marginBottom: '4rem'
          }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <h2 style={{
                fontSize: '2.2rem',
                fontWeight: '600',
                color: 'var(--text-light)',
                marginBottom: '1rem',
                background: 'linear-gradient(135deg, var(--accent-gold) 0%, var(--text-light) 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                <Icon type="business" size="20px" color="var(--accent-gold)" /> 公司简介
              </h2>
            </div>

            <div style={{
              fontSize: '1.1rem',
              color: 'var(--text-light)',
              opacity: '0.9',
              lineHeight: '1.8',
              letterSpacing: '0.3px',
              textAlign: 'justify'
            }}>
              <p style={{ marginBottom: '1.5rem' }}>
                安徽智锐汽车有限公司（简称"智锐汽车"）成立于2016年，总部位于安徽省合肥市。合肥作为"大湖名城·创新高地"，
                不仅是世界科技城市联盟会员城市、国家科技创新型试点城市，更是长三角城市群副中心、综合性国家科学中心，
                以及"一带一路"和长江经济带战略双节点城市。依托合肥优越的营商环境、发达的交通枢纽和雄厚的科教资源，
                智锐汽车在技术研发、人才储备和产业协同方面具备显著优势，为企业高质量发展提供了强劲支撑。
              </p>
              <p style={{ marginBottom: '1.5rem' }}>
                智锐汽车总占地面积66,000平方米，并于2017年12月获得国家工信部专用车改装资质，同时通过国家强制性产品认证（3C）、
                ISO9001质量管理体系认证，严格遵循行业高标准，确保产品品质与安全。
              </p>
              <p style={{ marginBottom: '1.5rem' }}>
                公司专注于高端商务车改装及特种车辆研发制造，逐步构建了涵盖产品设计、智能制造、营销服务于一体的全产业链体系，
                致力于为客户提供个性化、高品质的汽车改装解决方案。目前，智锐汽车旗下拥有"欧尔法"和"德雷斯顿"两大核心品牌，
                产品以精湛工艺、豪华配置和卓越性能深受市场认可。
              </p>
              <p>
                未来，智锐汽车将持续深化技术创新，推动中国高端改装车行业向专业化、智能化方向发展，
                致力于成为国际一流的专业改装车制造企业。
              </p>
            </div>
          </div>
        </section>

        {/* 品牌介绍区域 */}
        <section className="brand-introduction" style={{ padding: '4rem 0' }}>
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
              <Icon type="crown" size="24px" color="var(--accent-gold)" /> 品牌介绍
            </h2>
            <p style={{
              fontSize: '1.4rem',
              color: 'var(--accent-gold)',
              fontWeight: '500',
              marginBottom: '2rem'
            }}>
              以匠心，定义中国豪华定制新标准
            </p>
          </div>

          {/* 品牌故事内容 */}
          <div style={{
            display: 'grid',
            gap: '3rem',
            marginBottom: '4rem'
          }}>
            {/* 德国工艺传承 */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.03)',
              borderRadius: '20px',
              padding: '3rem',
              border: '1px solid rgba(201, 169, 110, 0.2)',
              backdropFilter: 'blur(10px)'
            }}>
              <h3 style={{
                fontSize: '1.8rem',
                color: 'var(--accent-gold)',
                marginBottom: '1.5rem',
                fontWeight: '600'
              }}>德国工艺传承</h3>
              <p style={{
                fontSize: '1.1rem',
                color: 'var(--text-light)',
                opacity: '0.9',
                lineHeight: '1.8',
                letterSpacing: '0.3px',
                textAlign: 'justify'
              }}>
                在德国慕尼黑工业大学访问期间，智锐精英团队被德国百年改装厂Isdera的工艺震撼。回国后，聘请了德国及意大利的资深工程师，
                在企业专业化设计车间里，用从斯图加特带回的奔驰改装手册为蓝本，打造出首台符合德标TUV认证的改装车。
                这台内部代号"智锐一号"的样车，其门缝精度达到惊人的±0.3mm，比当时行业标准精确5倍。
              </p>
            </div>

            {/* 创业历程 */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.03)',
              borderRadius: '20px',
              padding: '3rem',
              border: '1px solid rgba(201, 169, 110, 0.2)',
              backdropFilter: 'blur(10px)'
            }}>
              <h3 style={{
                fontSize: '1.8rem',
                color: 'var(--accent-gold)',
                marginBottom: '1.5rem',
                fontWeight: '600'
              }}>创业维艰：从一张图纸到首台样车</h3>
              <p style={{
                fontSize: '1.1rem',
                color: 'var(--text-light)',
                opacity: '0.9',
                lineHeight: '1.8',
                letterSpacing: '0.3px',
                textAlign: 'justify'
              }}>
                创始团队用从德国引进的改装标准手册，对一台进口商务车进行了1800多项数据测绘。经过328个日夜的攻坚，首台样车下线。
                当这台融合德系工艺与中国智造的商务车在行业展会上亮相时，其精湛的包覆工艺和智能化座舱系统引发轰动。
              </p>
            </div>

            {/* 匠心工艺 */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.03)',
              borderRadius: '20px',
              padding: '3rem',
              border: '1px solid rgba(201, 169, 110, 0.2)',
              backdropFilter: 'blur(10px)'
            }}>
              <h3 style={{
                fontSize: '1.8rem',
                color: 'var(--accent-gold)',
                marginBottom: '1.5rem',
                fontWeight: '600'
              }}>匠心智造：0.1毫米的极致追求</h3>
              <p style={{
                fontSize: '1.1rem',
                color: 'var(--text-light)',
                opacity: '0.9',
                lineHeight: '1.8',
                letterSpacing: '0.3px',
                textAlign: 'justify'
              }}>
                在智锐的车间里流传着"一张名片的故事"：为确保内饰木纹饰板的拼接精度，老师傅们反复试验，
                最终实现缝隙控制在0.1毫米以内——恰好是一张标准名片的厚度。这种追求极致的"名片标准"，如今已应用于全系车型。
              </p>
            </div>

            {/* 创新模式 */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.03)',
              borderRadius: '20px',
              padding: '3rem',
              border: '1px solid rgba(201, 169, 110, 0.2)',
              backdropFilter: 'blur(10px)'
            }}>
              <h3 style={{
                fontSize: '1.8rem',
                color: 'var(--accent-gold)',
                marginBottom: '1.5rem',
                fontWeight: '600'
              }}>突破创新：改写行业标准的"智锐模式"</h3>
              <p style={{
                fontSize: '1.1rem',
                color: 'var(--text-light)',
                opacity: '0.9',
                lineHeight: '1.8',
                letterSpacing: '0.3px',
                textAlign: 'justify',
                marginBottom: '1.5rem'
              }}>
                2018年，智锐创造性地提出"三阶定制体系"：
              </p>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '1.5rem'
              }}>
                <div style={{
                  padding: '1.5rem',
                  background: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '12px',
                  border: '1px solid rgba(201, 169, 110, 0.1)'
                }}>
                  <h4 style={{
                    color: 'var(--accent-gold)',
                    fontSize: '1.2rem',
                    marginBottom: '0.5rem',
                    fontWeight: '600'
                  }}>基础级</h4>
                  <p style={{
                    color: 'var(--text-light)',
                    opacity: '0.8',
                    fontSize: '1rem',
                    lineHeight: '1.6'
                  }}>满足商务接待的豪华升级</p>
                </div>
                <div style={{
                  padding: '1.5rem',
                  background: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '12px',
                  border: '1px solid rgba(201, 169, 110, 0.1)'
                }}>
                  <h4 style={{
                    color: 'var(--accent-gold)',
                    fontSize: '1.2rem',
                    marginBottom: '0.5rem',
                    fontWeight: '600'
                  }}>专业级</h4>
                  <p style={{
                    color: 'var(--text-light)',
                    opacity: '0.8',
                    fontSize: '1rem',
                    lineHeight: '1.6'
                  }}>针对医疗、警务等特殊需求的改装方案</p>
                </div>
                <div style={{
                  padding: '1.5rem',
                  background: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '12px',
                  border: '1px solid rgba(201, 169, 110, 0.1)'
                }}>
                  <h4 style={{
                    color: 'var(--accent-gold)',
                    fontSize: '1.2rem',
                    marginBottom: '0.5rem',
                    fontWeight: '600'
                  }}>尊享级</h4>
                  <p style={{
                    color: 'var(--text-light)',
                    opacity: '0.8',
                    fontSize: '1rem',
                    lineHeight: '1.6'
                  }}>完全个性化的私人定制服务</p>
                </div>
              </div>
            </div>

            {/* 未来展望 */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(201, 169, 110, 0.1) 0%, rgba(255, 255, 255, 0.03) 100%)',
              borderRadius: '20px',
              padding: '3rem',
              border: '1px solid rgba(201, 169, 110, 0.3)',
              backdropFilter: 'blur(10px)',
              textAlign: 'center'
            }}>
              <h3 style={{
                fontSize: '1.8rem',
                color: 'var(--accent-gold)',
                marginBottom: '1.5rem',
                fontWeight: '600'
              }}>超越：重新定义豪华边界</h3>
              <p style={{
                fontSize: '1.2rem',
                color: 'var(--text-light)',
                opacity: '0.9',
                lineHeight: '1.8',
                letterSpacing: '0.3px'
              }}>
                2025年，智锐全新系列"欧尔法"（EUROFIA）和"德雷斯顿"（DRESDEN）发布在即，
                一场关于豪华出行的革命性变革即将拉开帷幕。
              </p>
            </div>
          </div>

          {/* Logo释义 */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.03)',
            borderRadius: '20px',
            padding: '3rem',
            border: '1px solid rgba(201, 169, 110, 0.2)',
            backdropFilter: 'blur(10px)',
            marginBottom: '3rem'
          }}>
            <h3 style={{
              fontSize: '1.8rem',
              color: 'var(--accent-gold)',
              marginBottom: '1.5rem',
              fontWeight: '600',
              textAlign: 'center'
            }}>Logo释义</h3>
            <p style={{
              fontSize: '1.1rem',
              color: 'var(--text-light)',
              opacity: '0.9',
              lineHeight: '1.8',
              letterSpacing: '0.3px',
              textAlign: 'center',
              marginBottom: '2rem'
            }}>
              ZealRay（智锐）不仅是品牌名称，更是对"智慧"与"锐意进取"的全球化表达：
            </p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem'
            }}>
              <div style={{
                padding: '2rem',
                background: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '15px',
                border: '1px solid rgba(201, 169, 110, 0.1)',
                textAlign: 'center'
              }}>
                <h4 style={{
                  fontSize: '1.4rem',
                  color: 'var(--accent-gold)',
                  marginBottom: '1rem',
                  fontWeight: '600'
                }}>Zeal（智）</h4>
                <p style={{
                  color: 'var(--text-light)',
                  opacity: '0.8',
                  lineHeight: '1.6'
                }}>
                  源自"Zeal"（热忱），象征智锐对汽车工艺的极致追求与对用户的诚挚热忱
                </p>
              </div>
              <div style={{
                padding: '2rem',
                background: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '15px',
                border: '1px solid rgba(201, 169, 110, 0.1)',
                textAlign: 'center'
              }}>
                <h4 style={{
                  fontSize: '1.4rem',
                  color: 'var(--accent-gold)',
                  marginBottom: '1rem',
                  fontWeight: '600'
                }}>Ray（锐）</h4>
                <p style={{
                  color: 'var(--text-light)',
                  opacity: '0.8',
                  lineHeight: '1.6'
                }}>
                  意为"光芒"，代表智锐以科技为笔，勾勒未来出行的璀璨射线
                </p>
              </div>
            </div>
          </div>

          {/* 旗下品牌 */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.03)',
            borderRadius: '20px',
            padding: '3rem',
            border: '1px solid rgba(201, 169, 110, 0.2)',
            backdropFilter: 'blur(10px)'
          }}>
            <h3 style={{
              fontSize: '1.8rem',
              color: 'var(--accent-gold)',
              marginBottom: '1.5rem',
              fontWeight: '600',
              textAlign: 'center'
            }}>旗下品牌</h3>
            <p style={{
              fontSize: '1.1rem',
              color: 'var(--text-light)',
              opacity: '0.9',
              lineHeight: '1.8',
              textAlign: 'center',
              marginBottom: '2rem'
            }}>
              智锐汽车旗下包含欧尔法（EUROFIA）、德雷斯顿（DRESDEN）和OBBIN三个系列。（OBBIN已停产）
            </p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
              gap: '2rem'
            }}>
              <div style={{
                padding: '2.5rem',
                background: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '15px',
                border: '1px solid rgba(201, 169, 110, 0.2)'
              }}>
                <h4 style={{
                  fontSize: '1.5rem',
                  color: 'var(--accent-gold)',
                  marginBottom: '1rem',
                  fontWeight: '600'
                }}>欧尔法 EUROFIA</h4>
                <p style={{
                  color: 'var(--text-light)',
                  opacity: '0.9',
                  lineHeight: '1.7',
                  letterSpacing: '0.3px'
                }}>
                  "欧尔法"源自智锐曾经经典的"OBBIN"系列，代表着智锐对品质的坚守与创新的追求。
                  朝着丰田埃尔法（Toyota Alphard）为商务车的标杆，智锐在这个系列中延续了可靠、实用的基因，
                  同时注入了智锐独有的豪华与智能。
                </p>
              </div>
              <div style={{
                padding: '2.5rem',
                background: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '15px',
                border: '1px solid rgba(201, 169, 110, 0.2)'
              }}>
                <h4 style={{
                  fontSize: '1.5rem',
                  color: 'var(--accent-gold)',
                  marginBottom: '1rem',
                  fontWeight: '600'
                }}>德雷斯顿 DRESDEN</h4>
                <p style={{
                  color: 'var(--text-light)',
                  opacity: '0.9',
                  lineHeight: '1.7',
                  letterSpacing: '0.3px'
                }}>
                  德雷斯顿系列源于德国"易北河上的佛罗伦萨"——德累斯顿。这座将机械精密与巴洛克艺术完美融合的城市，
                  给了智锐打造这个系列的灵感。德累斯顿的工匠们300年前就能手工打造误差不超过0.1毫米的机械钟表，
                  这种追求极致的"德味"精神，让改装后的车辆不仅保留德系原厂的机械品质，更增添了东方匠人的温度与巧思。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 品牌历程区域 */}
        <section className="brand-history" style={{ padding: '3rem 0' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{
              fontSize: '2.2rem',
              fontWeight: '600',
              color: 'var(--text-light)',
              marginBottom: '1rem',
              background: 'linear-gradient(135deg, var(--accent-gold) 0%, var(--text-light) 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              <Icon type="crown" size="20px" color="var(--accent-gold)" /> 品牌历程
            </h2>
            <p style={{
              fontSize: '1.1rem',
              color: 'var(--text-light)',
              opacity: '0.8'
            }}>
              见证智锐汽车的发展足迹
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem',
            marginBottom: '4rem'
          }}>
            <div style={{
              padding: '2.5rem',
              background: 'rgba(255, 255, 255, 0.03)',
              borderRadius: '15px',
              border: '1px solid rgba(201, 169, 110, 0.2)',
              transition: 'all 0.3s ease',
              textAlign: 'center'
            }}>
              <div style={{
                fontSize: '2.5rem',
                fontWeight: '700',
                color: 'var(--accent-gold)',
                marginBottom: '1rem'
              }}>2016</div>
              <h4 style={{
                fontSize: '1.3rem',
                color: 'var(--text-light)',
                marginBottom: '1rem',
                fontWeight: '600'
              }}>公司成立</h4>
              <p style={{
                color: 'var(--text-light)',
                opacity: '0.8',
                lineHeight: '1.6'
              }}>智锐汽车在合肥正式成立，开启高端商务车改装之路</p>
            </div>

            <div style={{
              padding: '2.5rem',
              background: 'rgba(255, 255, 255, 0.03)',
              borderRadius: '15px',
              border: '1px solid rgba(201, 169, 110, 0.2)',
              transition: 'all 0.3s ease',
              textAlign: 'center'
            }}>
              <div style={{
                fontSize: '2.5rem',
                fontWeight: '700',
                color: 'var(--accent-gold)',
                marginBottom: '1rem'
              }}>2017</div>
              <h4 style={{
                fontSize: '1.3rem',
                color: 'var(--text-light)',
                marginBottom: '1rem',
                fontWeight: '600'
              }}>资质认证</h4>
              <p style={{
                color: 'var(--text-light)',
                opacity: '0.8',
                lineHeight: '1.6'
              }}>获得工信部专用车改装资质，通过3C认证和ISO9001认证</p>
            </div>

            <div style={{
              padding: '2.5rem',
              background: 'rgba(255, 255, 255, 0.03)',
              borderRadius: '15px',
              border: '1px solid rgba(201, 169, 110, 0.2)',
              transition: 'all 0.3s ease',
              textAlign: 'center'
            }}>
              <div style={{
                fontSize: '2.5rem',
                fontWeight: '700',
                color: 'var(--accent-gold)',
                marginBottom: '1rem'
              }}>2019</div>
              <h4 style={{
                fontSize: '1.3rem',
                color: 'var(--text-light)',
                marginBottom: '1rem',
                fontWeight: '600'
              }}>品牌发布</h4>
              <p style={{
                color: 'var(--text-light)',
                opacity: '0.8',
                lineHeight: '1.6'
              }}>"欧尔法"品牌正式发布，开启高端商务车新篇章</p>
            </div>

            <div style={{
              padding: '2.5rem',
              background: 'rgba(255, 255, 255, 0.03)',
              borderRadius: '15px',
              border: '1px solid rgba(201, 169, 110, 0.2)',
              transition: 'all 0.3s ease',
              textAlign: 'center'
            }}>
              <div style={{
                fontSize: '2.5rem',
                fontWeight: '700',
                color: 'var(--accent-gold)',
                marginBottom: '1rem'
              }}>2022</div>
              <h4 style={{
                fontSize: '1.3rem',
                color: 'var(--text-light)',
                marginBottom: '1rem',
                fontWeight: '600'
              }}>双品牌战略</h4>
              <p style={{
                color: 'var(--text-light)',
                opacity: '0.8',
                lineHeight: '1.6'
              }}>"德雷斯顿"品牌推出，形成双品牌发展格局</p>
            </div>
          </div>
        </section>

        {/* 荣誉资质区域 */}
        <section className="honors-certificates" style={{ padding: '3rem 0 4rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{
              fontSize: '2.2rem',
              fontWeight: '600',
              color: 'var(--text-light)',
              marginBottom: '1rem',
              background: 'linear-gradient(135deg, var(--accent-gold) 0%, var(--text-light) 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              <Icon type="diamond" size="20px" color="var(--accent-gold)" /> 荣誉资质
            </h2>
            <p style={{
              fontSize: '1.1rem',
              color: 'var(--text-light)',
              opacity: '0.8'
            }}>
              专业认证，品质保障
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            marginBottom: '3rem'
          }}>
            <div style={{
              padding: '2.5rem',
              background: 'rgba(255, 255, 255, 0.05)',
              borderRadius: '15px',
              border: '1px solid rgba(201, 169, 110, 0.2)',
              transition: 'all 0.3s ease'
            }}>
              <h3 style={{
                color: 'var(--accent-gold)',
                fontSize: '1.4rem',
                marginBottom: '1rem',
                fontWeight: '600'
              }}>
                <Icon type="check" size="16px" color="var(--accent-gold)" /> 国家资质认证
              </h3>
              <ul style={{ 
                listStyle: 'none',
                color: 'var(--text-light)',
                opacity: '0.9',
                lineHeight: '1.8'
              }}>
                <li style={{ marginBottom: '0.5rem' }}>• 工信部专用车改装资质</li>
                <li style={{ marginBottom: '0.5rem' }}>• 国家强制性产品认证（3C）</li>
                <li style={{ marginBottom: '0.5rem' }}>• ISO9001质量管理体系认证</li>
                <li>• 环保部门排放标准认证</li>
              </ul>
            </div>

            <div style={{
              padding: '2.5rem',
              background: 'rgba(255, 255, 255, 0.05)',
              borderRadius: '15px',
              border: '1px solid rgba(201, 169, 110, 0.2)',
              transition: 'all 0.3s ease'
            }}>
              <h3 style={{
                color: 'var(--accent-gold)',
                fontSize: '1.4rem',
                marginBottom: '1rem',
                fontWeight: '600'
              }}>
                <Icon type="crown" size="16px" color="var(--accent-gold)" /> 行业荣誉
              </h3>
              <ul style={{ 
                listStyle: 'none',
                color: 'var(--text-light)',
                opacity: '0.9',
                lineHeight: '1.8'
              }}>
                <li style={{ marginBottom: '0.5rem' }}>• 中国汽车工业协会会员单位</li>
                <li style={{ marginBottom: '0.5rem' }}>• 安徽省专精特新企业</li>
                <li style={{ marginBottom: '0.5rem' }}>• 合肥市重点工业企业</li>
                <li>• 高新技术企业认定</li>
              </ul>
            </div>

            <div style={{
              padding: '2.5rem',
              background: 'rgba(255, 255, 255, 0.05)',
              borderRadius: '15px',
              border: '1px solid rgba(201, 169, 110, 0.2)',
              transition: 'all 0.3s ease'
            }}>
              <h3 style={{
                color: 'var(--accent-gold)',
                fontSize: '1.4rem',
                marginBottom: '1rem',
                fontWeight: '600'
              }}>
                <Icon type="tech" size="16px" color="var(--accent-gold)" /> 生产规模
              </h3>
              <ul style={{ 
                listStyle: 'none',
                color: 'var(--text-light)',
                opacity: '0.9',
                lineHeight: '1.8'
              }}>
                <li style={{ marginBottom: '0.5rem' }}>• 总占地面积 66,000 平方米</li>
                <li style={{ marginBottom: '0.5rem' }}>• 专业化设计车间</li>
                <li style={{ marginBottom: '0.5rem' }}>• 德标TUV认证改装车</li>
                <li>• 全产业链制造体系</li>
              </ul>
            </div>
          </div>

          {/* 资质证书展示 */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.03)',
            borderRadius: '20px',
            padding: '3rem',
            border: '1px solid rgba(201, 169, 110, 0.2)',
            backdropFilter: 'blur(10px)'
          }}>
            <h3 style={{
              fontSize: '1.6rem',
              color: 'var(--accent-gold)',
              marginBottom: '2rem',
              fontWeight: '600',
              textAlign: 'center'
            }}>资质证书展示</h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
              gap: '2rem'
            }}>
              <div style={{
                background: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '15px',
                padding: '1.5rem',
                border: '1px solid rgba(201, 169, 110, 0.2)',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }} 
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-5px)';
                e.target.style.borderColor = 'rgba(201, 169, 110, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.borderColor = 'rgba(201, 169, 110, 0.2)';
              }}>
                <img 
                  src="/src/pages/Contact/assets/1.jpg"
                  alt="荣誉资质证书1"
                  style={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: '10px',
                    objectFit: 'cover',
                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)'
                  }}
                />
              </div>
              
              <div style={{
                background: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '15px',
                padding: '1.5rem',
                border: '1px solid rgba(201, 169, 110, 0.2)',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-5px)';
                e.target.style.borderColor = 'rgba(201, 169, 110, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.borderColor = 'rgba(201, 169, 110, 0.2)';
              }}>
                <img 
                  src="/src/pages/Contact/assets/2.jpg"
                  alt="荣誉资质证书2"
                  style={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: '10px',
                    objectFit: 'cover',
                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)'
                  }}
                />
              </div>
            </div>
            
            <p style={{
              textAlign: 'center',
              marginTop: '1.5rem',
              color: 'var(--text-light)',
              opacity: '0.7',
              fontSize: '0.9rem',
              fontStyle: 'italic'
            }}>
              * 点击图片可查看详细信息
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
