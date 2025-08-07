// 从智锐官网提取的资源配置
export const downloadedResources = {
  // 公司Logo和品牌图片
  logos: [
    '/images/downloaded/1741935856619258.png', // 公司Logo
    '/images/downloaded/En.png', // 英文Logo
  ],
  
  // 产品展示图片 - 高端商务车
  productImages: [
    '/images/downloaded/1751077930430153.jpg', // 商务车外观1
    '/images/downloaded/1751092257777798.jpg', // 商务车外观2  
    '/images/downloaded/1751092160154273.jpg', // 商务车外观3
    '/images/downloaded/1751092097915753.jpg', // 商务车外观4
    '/images/downloaded/1751092012704653.jpg', // 商务车外观5
    '/images/downloaded/1751091958549000.jpg', // 商务车外观6
    '/images/downloaded/1751091861190051.jpg', // 商务车内饰1
    '/images/downloaded/1751091006934821.jpg', // 商务车内饰2
    '/images/downloaded/1751091077490282.jpg', // 商务车内饰3
    '/images/downloaded/1751091254225642.jpg', // 商务车内饰4
    '/images/downloaded/1751091300832611.jpg', // 商务车内饰5
    '/images/downloaded/1751091463261490.jpg', // 商务车内饰6
    '/images/downloaded/1751091505472390.jpg', // 商务车内饰7
    '/images/downloaded/1751091664876235.jpg', // 商务车内饰8
    '/images/downloaded/1751091737561361.jpg', // 商务车内饰9
  ],

  // 产品细节图片
  productDetails: [
    '/images/downloaded/1751098400544149.jpg', // 产品细节1
    '/images/downloaded/1751098467172146.jpg', // 产品细节2
    '/images/downloaded/1751098506311782.jpg', // 产品细节3
    '/images/downloaded/1751098593312478.jpg', // 产品细节4
    '/images/downloaded/1751098637298860.jpg', // 产品细节5
    '/images/downloaded/1751098685403870.jpg', // 产品细节6
  ],

  // 产品配色方案图片
  colorSchemes: [
    '/images/downloaded/1751100035162338.png', // 配色1
    '/images/downloaded/1751100035207265.png', // 配色2
    '/images/downloaded/1751100035253654.png', // 配色3
    '/images/downloaded/1751100035306651.png', // 配色4
    '/images/downloaded/1751100035388993.png', // 配色5
    '/images/downloaded/1751100035544555.png', // 配色6
    '/images/downloaded/1751100035597446.png', // 配色7
    '/images/downloaded/1751100035631674.png', // 配色8
    '/images/downloaded/1751100035910813.png', // 配色9
  ],

  // 服务相关图片
  serviceImages: [
    '/images/downloaded/1751100342271312.png', // 服务图标1
    '/images/downloaded/1751100342358578.png', // 服务图标2
    '/images/downloaded/1751100342754894.png', // 服务图标3
  ],

  // 奖项和认证图片
  awards: [
    '/images/downloaded/1751103100631517.png', // 奖项1
    '/images/downloaded/1751103117804373.png', // 奖项2
    '/images/downloaded/1751103127123474.png', // 奖项3
    '/images/downloaded/1751103138548005.png', // 奖项4
    '/images/downloaded/1751103152782541.png', // 奖项5
    '/images/downloaded/1751103175966834.png', // 奖项6
  ],

  // 联系方式图标
  contactIcons: [
    '/images/downloaded/phone_blcak.png', // 黑色电话图标
    '/images/downloaded/phone_white.png', // 白色电话图标
    '/images/downloaded/index_22.png', // 其他图标
  ],

  // 企业形象图片
  corporateImages: [
    '/images/downloaded/1751529997629453.jpg', // 企业形象图
  ],

  // 宣传视频
  videos: [
    '/videos/7.mp4', // 主要宣传视频
  ],

  // 提取的文案内容
  content: {
    companyName: '安徽智锐汽车有限公司',
    companyDescription: '专注于高端商务车改装及特种车辆研发制造，逐步构建了涵盖产品设计、智能制造、营销服务于一体的全产业链体系，致力于为客户提供个性化、高品质的汽车改装解决方案',
    keywords: ['安徽智锐汽车有限公司', '智锐汽车', '安徽智锐', '高端商务车', '改装', '特种车辆'],
    
    // 产品相关
    productCenter: '产品中心',
    brandSlogan: '服务创造价值、存在造就未来',
    
    // 公司新闻
    news: [
      '6月18日，安徽智锐新能源汽车智慧工厂在合肥经开区正式投产',
      '2025年6月，工业和信息化部正式公布第五批制造业单项冠军企业',
      '在德国埃森举行的2025红点设计奖颁奖礼上，智锐欧滨房车获奖',
      '5月20日，安徽智锐汽车与中国科学技术大学签署协议',
      '在第六届中国汽车企业社会责任峰会上，智锐汽车发布责任报告',
      '响应国家"新时代工匠"战略，智锐汽车于2025年7月正式启动工匠培养计划'
    ],

    // 产品系列
    productSeries: [
      '欧尔法R580配置',
      '智锐欧滨房车系列',
      '高端商务改装车系列',
      '新能源商务车系列'
    ]
  }
};

// 随机获取产品图片的工具函数
export const getRandomProductImage = () => {
  const images = downloadedResources.productImages;
  return images[Math.floor(Math.random() * images.length)];
};

// 获取产品展示图片轮播
export const getProductCarousel = () => {
  return downloadedResources.productImages.slice(0, 8); // 取前8张作为轮播
};

// 获取颜色配置图片
export const getColorSchemeImages = () => {
  return downloadedResources.colorSchemes;
};

// 获取企业Logo
export const getCompanyLogo = () => {
  return downloadedResources.logos[0];
};

// 获取主要宣传视频
export const getMainVideo = () => {
  return downloadedResources.videos[0];
};
