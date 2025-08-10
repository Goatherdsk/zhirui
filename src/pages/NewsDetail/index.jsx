import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PageHeader from '../../components/PageHeader';
import Button from '../../components/Button';
import Icon from '../../components/Icon';
import SvgIcon from '../../components/SvgIcon';
import styles from './index.module.less';

const NewsDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // 新闻数据
  const newsData = {
    1: {
      title: "投资10亿新能源基地投产，智锐打造全球首个5G全连接改装车工厂",
      date: "2025-06-18",
      category: "企业动态",
      categoryColor: "rgba(201, 169, 110, 0.8)",
      image: "/images/show/1751077930430153.jpg",
      summary: "安徽智锐新能源汽车智慧工厂在合肥经开区正式投产，这座占地386亩的'黑灯工厂'标志着改装车行业进入智能化制造新时代。",
      content: `6月18日，安徽智锐新能源汽车智慧工厂在合肥经开区正式投产。这座占地386亩的"黑灯工厂"，标志着改装车行业进入智能化制造新时代。

## 智造升级

### 全面自动化生产
工厂全线部署32台德国库卡机器人，实现焊缝自动化率100%。通过5G+AI质检系统，能够精准识别0.1mm装配误差，确保每一台车辆都达到最高品质标准。

### 数字孪生技术
引入数字孪生平台，实时监控2000+设备运行参数，通过大数据分析优化生产流程，提升整体效率35%。

## 技术突破

### 5G全连接
全球首个5G全连接改装车工厂，实现设备间毫秒级通信，为无人化生产奠定基础。

### 智能柔性产线
具备快速切换能力，可在30分钟内完成不同车型生产线转换，满足个性化定制需求。

## 产能规模

投产后预计年产能达10万台，创造就业岗位3000个，预计年营收50亿元，成为华东地区最大的新能源改装车生产基地。`,
      tags: ["新能源", "智能制造", "5G技术", "自动化生产"],
      stats: [
        { label: "投资金额", value: "10亿元", icon: "money-circle" },
        { label: "年产能", value: "10万台", icon: "thunderbolt" },
        { label: "创造就业", value: "3000个", icon: "employment" },
        { label: "预计营收", value: "50亿元", icon: "revenue" }
      ]
    },
    2: {
      title: "智锐汽车斩获'国家级制造业单项冠军'称号，冷藏车技术领跑行业",
      date: "2025-06-15",
      category: "荣誉奖项",
      categoryColor: "rgba(231, 76, 60, 0.8)",
      image: "/images/show/1751098400544149.jpg",
      summary: "工业和信息化部正式公布第五批制造业单项冠军企业名单，智锐汽车凭借其在冷藏改装车领域的核心技术优势成功入选。",
      content: `工业和信息化部正式公布第五批制造业单项冠军企业名单，智锐汽车凭借其在冷藏改装车领域的核心技术优势与市场领导地位成功入选，成为安徽省本年度唯一获此殊荣的改装车企业。

## 技术领先

### 超精准温控系统
自主研发的第三代智能温控系统，温控精度达±0.5℃，领先行业标准3倍，为生鲜冷链运输提供最可靠保障。

### 节能环保
采用变频压缩机技术，较传统冷藏车节能35%，年均减少碳排放2.8吨，响应国家双碳战略。

## 市场表现

### 销量领先
2024年冷藏车销量4,500台，市场占有率18.7%，连续三年位居行业第一。

### 客户认可
服务客户覆盖顺丰、京东物流、中粮集团等知名企业，客户满意度达98.5%。

## 发展战略

未来三年将投入研发资金12亿元，专注于氢燃料电池冷藏车、智能网联冷链等前沿技术，巩固行业领先地位。`,
      tags: ["制造业冠军", "冷藏技术", "节能环保", "市场领先"],
      stats: [
        { label: "温控精度", value: "±0.5℃", icon: "dashboard" },
        { label: "年销量", value: "4,500台", icon: "line-chart" },
        { label: "市场份额", value: "18.7%", icon: "trophy" },
        { label: "节能效果", value: "35%", icon: "battery" }
      ]
    },
    3: {
      title: "星海9系房车问鼎红点至尊奖，重新定义旅居科技",
      date: "2025-05-20",
      category: "产品荣誉",
      categoryColor: "rgba(142, 68, 173, 0.8)",
      image: "/images/show/1751098506311782.jpg",
      summary: "智锐欧滨房车制造的星海9系从全球57国4218件作品中脱颖而出，斩获最高奖项'Best of the Best'，这是中国房车首次获此殊荣。",
      content: `在德国埃森举行的2025红点设计奖颁奖礼上，智锐欧滨房车制造的星海9系从全球57国4218件作品中脱颖而出，斩获最高奖项"Best of the Best"，这是中国房车首次获此殊荣。

## 设计突破

### 空间魔法
采用可变式空间设计，24㎡车内空间通过模块化布局可实现12种不同功能配置，满足不同场景使用需求。

### 极简美学
外观设计融合北欧极简风格与东方禅意，线条流畅，比例协调，展现现代旅居生活的优雅品味。

## 科技创新

### 能源自由
配备18.6kWh太阳能发电系统，日均发电量可满足三天正常使用，实现真正的能源自由。

### 智能交互
搭载AI管家系统，语音控制、手势识别、情境感知，让旅居生活更加便捷舒适。

## 市场反响

### 订单火爆
产品发布后48小时内收获订单2,200台，订单金额突破15亿元，创造房车行业新纪录。

### 国际认可
已收到来自德国、澳大利亚、新西兰等12个国家的采购意向，中国房车正式走向世界。`,
      tags: ["红点奖", "工业设计", "旅居科技", "国际认可"],
      stats: [
        { label: "获奖等级", value: "Best of the Best", icon: "star" },
        { label: "空间利用", value: "24㎡", icon: "border" },
        { label: "日发电量", value: "18.6kWh", icon: "sun" },
        { label: "预订数量", value: "2,200台", icon: "file-text" }
      ]
    },
    4: {
      title: "智锐携手中科大共建智能网联实验室，攻关无人冷链技术",
      date: "2025-05-20",
      category: "合作发展",
      categoryColor: "rgba(52, 152, 219, 0.8)",
      image: "/images/show/1751098637298860.jpg",
      summary: "安徽智锐汽车与中国科学技术大学签署协议，共同投资8,000万元建设'智能网联特种车辆联合实验室'。",
      content: `5月20日，安徽智锐汽车与中国科学技术大学签署协议，共同投资8,000万元建设"智能网联特种车辆联合实验室"，聚焦L4级无人驾驶在特种场景的应用。

## 技术攻关

### 精准定位
基于北斗三号+5G融合定位技术，实现厘米级精准定位，为无人驾驶提供可靠导航基础。

### 环境感知
部署激光雷达+视觉融合感知系统，360度无死角监测，能够识别50米内所有动态障碍物。

## 应用场景

### 无人冷链配送
针对园区、港口、机场等封闭场景，开发L4级无人冷链配送车，提升物流效率降低人工成本。

### 智能调度
通过AI算法优化配送路径，相比传统配送效率提升40%，成本降低25%。

## 人才培养

### 产学研结合
每年培养硕博士50名，建立从基础研究到产业化的完整人才链条。

### 国际合作
与德国亚琛工业大学、美国斯坦福大学建立合作关系，共享全球前沿技术资源。`,
      tags: ["产学研合作", "无人驾驶", "智能网联", "技术创新"],
      stats: [
        { label: "投资金额", value: "8,000万", icon: "money-circle" },
        { label: "定位精度", value: "3厘米", icon: "aim" },
        { label: "人才培养", value: "50名/年", icon: "graduation-cap" },
        { label: "效率提升", value: "40%", icon: "arrow-up" }
      ]
    },
    5: {
      title: "发布行业首份ESG报告，智锐汽车碳中和行动获国际认证",
      date: "2025-04-15",
      category: "社会责任",
      categoryColor: "rgba(39, 174, 96, 0.8)",
      image: "/images/show/1751098685403870.jpg",
      summary: "智锐汽车发布《2025碳中和行动白皮书》，承诺于2035年实现全链零碳，成为特种车行业ESG实践标杆。",
      content: `在第六届中国汽车企业社会责任峰会上，智锐汽车发布《2025碳中和行动白皮书》，承诺于2035年实现全链零碳，成为特种车行业ESG实践标杆。

## 碳中和路径

### 绿色制造
生产环节100%使用清洁能源，推广无废工厂理念，废料回收利用率达95%以上。

### 产品减碳
新能源车型销量占比提升至75%，单车全生命周期碳排放较传统车型减少60%。

## 供应链协同

### 绿色供应商
建立绿色供应商评价体系，87家核心供应商承诺2030年前实现碳中和。

### 循环经济
推动动力电池回收利用，电池回收利用率达92%，建立闭环循环经济模式。

## 社会价值

### 就业创造
三年来累计创造就业岗位8,500个，其中技术岗位占比60%，平均薪资水平高于行业20%。

### 公益投入
设立1,000万元教育公益基金，支持贫困地区职业教育发展，已资助学生2,000余名。

## 国际认可

获得联合国全球契约组织认证，成为中国首家获得CDP（碳信息披露项目）A级评级的改装车企业。`,
      tags: ["ESG报告", "碳中和", "绿色制造", "社会责任"],
      stats: [
        { label: "减碳目标", value: "2035年", icon: "environment" },
        { label: "供应商", value: "87家", icon: "team" },
        { label: "电池回收", value: "92%", icon: "sync" },
        { label: "CO₂减排", value: "3,200吨", icon: "leaf" }
      ]
    },
    6: {
      title: "'匠星计划'启动，智锐三年投入5,000万锻造大国工匠",
      date: "2025-07-01",
      category: "人才培养",
      categoryColor: "rgba(243, 156, 18, 0.8)",
      image: "/images/show/1751103175966834.png",
      summary: "响应国家'新时代工匠'战略，智锐汽车启动匠星计划，构建覆盖'选育用留'全周期的高技能人才培养体系。",
      content: `响应国家"新时代工匠"战略，智锐汽车于2025年7月正式启动匠星计划，构建覆盖"选育用留"全周期的高技能人才培养体系。

## 培养体系

### 技能认证
建立7级技能认证体系，从学徒工到首席技师，为每个层级制定专业培养方案。

### 实训基地
投资建设8,000㎡现代化实训基地，配备先进数控设备120台套，模拟真实生产环境。

## 激励机制

### 薪酬体系
建立技能津贴制度，高级技师月薪可达2万元，与管理序列同等待遇。

### 发展通道
打通技能人才向管理岗位流动通道，30%的中层管理者来自技能人才队伍。

## 成果显著

### 技能提升
员工技能考核通过率从65%提升至95%，生产效率平均提升40%。

### 创新驱动
技能人才提出改进建议3,200条，创造经济效益8,500万元。

## 社会影响

### 行业示范
"匠星计划"被工信部列为制造业人才培养典型案例，已有20家企业前来学习借鉴。

### 技能竞赛
员工在各类技能竞赛中获奖126项，其中国家级奖项15项，展现智锐工匠风采。`,
      tags: ["人才培养", "技能认证", "工匠精神", "创新驱动"],
      stats: [
        { label: "投资金额", value: "5,000万", icon: "money-circle" },
        { label: "实训基地", value: "8,000㎡", icon: "build" },
        { label: "效率提升", value: "40%", icon: "arrow-up" },
        { label: "创新收益", value: "8,500万", icon: "bulb" }
      ]
    }
  };

  const currentNews = newsData[id];

  if (!currentNews) {
    return (
      <div className={styles.page}>
        <PageHeader
          title="新闻不存在"
          subtitle="抱歉，您访问的新闻内容不存在"
          breadcrumbs={['首页', '公司动态', '新闻详情']}
        />
        <div className="container" style={{ textAlign: 'center', padding: '4rem 0' }}>
          <Button onClick={() => navigate('/news')}>
            返回新闻列表
          </Button>
        </div>
      </div>
    );
  }

  // 格式化内容，将 Markdown 转换为 JSX
  const formatContent = (content) => {
    const lines = content.split('\n');
    const elements = [];
    let key = 0;

    lines.forEach((line) => {
      if (line.startsWith('## ')) {
        elements.push(
          <h2 key={key++}>
            {line.substring(3)}
          </h2>
        );
      } else if (line.startsWith('### ')) {
        elements.push(
          <h3 key={key++}>
            {line.substring(4)}
          </h3>
        );
      } else if (line.trim() !== '') {
        // 检查是否是首段（引言段落）
        const isFirstParagraph = elements.length === 0 || 
          (elements.length === 1 && elements[0].type === 'h2');
        
        elements.push(
          <p key={key++} className={isFirstParagraph ? styles.leadParagraph : ''}>
            {line}
          </p>
        );
      }
    });

    return elements;
  };

  return (
    <div className={styles.page}>
      <PageHeader
        title={currentNews.title}
        subtitle={`${currentNews.category} • ${currentNews.date}`}
        breadcrumbs={['首页', '公司动态', '新闻详情']}
        backgroundType="news"
      />
      
      <div className="container">
        <div className={styles.newsDetail}>
          {/* 新闻头部信息 */}
          <div className={styles.newsDetailHeader}>
            <div className={styles.metaInfo}>
              <span 
                className={styles.categoryBadge}
              >
                {currentNews.category}
              </span>
              <span className={styles.publishDate}>
                发布时间：{currentNews.date}
              </span>
            </div>
            
            <h1 className={styles.mainTitle}>
              {currentNews.title}
            </h1>
            
            <p className={styles.newsSummary}>
              {currentNews.summary}
            </p>

            {/* 标签 */}
            <div className={styles.tagsContainer}>
              {currentNews.tags.map((tag, index) => (
                <span
                  key={index}
                  className={styles.tag}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* 统计数据 */}
            <div className={styles.statsGrid}>
              {currentNews.stats.map((stat, index) => (
                <div
                  key={index}
                  className={styles.statCard}
                >
                  <div className={styles.statIcon}>
                    <SvgIcon 
                      type={stat.icon} 
                      size={32} 
                      className={`dark ${stat.icon}`} 
                    />
                  </div>
                  <div className={styles.statValue}>
                    {stat.value}
                  </div>
                  <div className={styles.statLabel}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 新闻主图 */}
          <div className={styles.newsImageContainer}>
            <img 
              src={currentNews.image}
              alt={currentNews.title}
            />
          </div>

          {/* 新闻内容 */}
          <div className={styles.newsContent}>
            {formatContent(currentNews.content)}
          </div>

          {/* 操作按钮 */}
          <div className={styles.actionArea}>
            <Button 
              className={styles.backButton}
              variant="outline"
              onClick={() => navigate('/news')}
            >
              <Icon type="arrow" size="16px" style={{ transform: 'rotate(180deg)' }} />
              返回新闻列表
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetail;
