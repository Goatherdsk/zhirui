// 产品数据加载器
let productsData = [];

// 动态加载产品数据
const loadProductsData = async () => {
  try {
    const response = await fetch('/data/products.json');
    if (response.ok) {
      productsData = await response.json();
    } else {
      console.warn('无法加载产品数据，使用默认数据');
      productsData = [];
    }
  } catch (error) {
    console.warn('加载产品数据失败:', error);
    productsData = [];
  }
  return productsData;
};

/**
 * 产品数据管理器
 * Product Data Manager
 */

class ProductDataManager {
  constructor() {
    this.products = [];
    this.categories = {
      'all': '全部车型',
      'executive': '标准版',
      'premium': '尊行版',
      'luxury': '奢华版'
    };
    this.badges = {
      'NEW': '新品',
      'HOT': '热销',
      'PREMIUM': '精选',
      'LUXURY': '奢华'
    };
    this.loaded = false;
  }

  /**
   * 加载产品数据
   */
  async loadData() {
    if (this.dataLoaded) {
      return this.products;
    }

    try {
      const response = await fetch('/data/products.json');
      if (response.ok) {
        this.products = await response.json();
        this.dataLoaded = true;
      } else {
        console.warn('无法加载产品数据，使用默认数据');
        this.products = this.getDefaultProducts();
      }
    } catch (error) {
      console.warn('加载产品数据失败:', error);
      this.products = this.getDefaultProducts();
    }
    return this.products;
  }

  /**
   * 获取默认产品数据（兜底）
   */
  getDefaultProducts() {
    return [
      {
        id: "default_1",
        name: "智锐·标准版",
        subtitle: "经典商务",
        category: "executive",
        series: "标准版",
        exteriorColor: "曜影黑",
        interiorColor: "标准内饰",
        price: "面议",
        originalPrice: "",
        description: "高端商务车型，集舒适、豪华、科技于一体，为您提供卓越的出行体验。",
        features: ["商务座椅", "智能系统", "安全配置", "舒适配置"],
        specs: {},
        highlights: ["经典款"],
        images: {
          exterior: [],
          interior: [],
          details: []
        },
        gradient: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)",
        badge: "NEW",
        availability: "available",
        launchDate: "2024-01-01",
        warranty: "3年或10万公里"
      }
    ];
  }

  /**
   * 获取所有产品
   */
  getAllProducts() {
    return this.products;
  }

  /**
   * 根据分类获取产品
   */
  getProductsByCategory(category) {
    if (category === 'all') {
      return this.products;
    }
    return this.products.filter(product => product.category === category);
  }

  /**
   * 根据系列获取产品
   */
  getProductsBySeries(series) {
    return this.products.filter(product => product.series === series);
  }

  /**
   * 根据颜色获取产品
   */
  getProductsByColors(exteriorColor, interiorColor) {
    return this.products.filter(product => {
      const matchExterior = !exteriorColor || product.exteriorColor === exteriorColor;
      const matchInterior = !interiorColor || product.interiorColor === interiorColor;
      return matchExterior && matchInterior;
    });
  }

  /**
   * 根据ID获取产品
   */
  getProductById(id) {
    return this.products.find(product => product.id === id);
  }

  /**
   * 获取产品统计信息
   */
  getProductStats() {
    const categories = {};
    const series = {};
    const exteriorColors = {};
    const interiorColors = {};

    this.products.forEach(product => {
      // 统计分类
      categories[product.category] = (categories[product.category] || 0) + 1;
      
      // 统计系列
      series[product.series] = (series[product.series] || 0) + 1;
      
      // 统计外观色
      exteriorColors[product.exteriorColor] = (exteriorColors[product.exteriorColor] || 0) + 1;
      
      // 统计内饰色
      interiorColors[product.interiorColor] = (interiorColors[product.interiorColor] || 0) + 1;
    });

    return {
      total: this.products.length,
      categories,
      series,
      exteriorColors,
      interiorColors
    };
  }

  /**
   * 获取推荐产品
   */
  getFeaturedProducts(limit = 4) {
    // 优先返回尊行版产品
    const featured = this.products
      .filter(product => product.series === '尊行版')
      .slice(0, limit);
    
    // 如果尊行版不够，用其他产品补充
    if (featured.length < limit) {
      const remaining = this.products
        .filter(product => product.series !== '尊行版')
        .slice(0, limit - featured.length);
      featured.push(...remaining);
    }

    return featured;
  }

  /**
   * 搜索产品
   */
  searchProducts(query) {
    const searchTerm = query.toLowerCase();
    return this.products.filter(product => {
      return (
        product.name.toLowerCase().includes(searchTerm) ||
        product.subtitle.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm) ||
        product.features.some(feature => feature.toLowerCase().includes(searchTerm)) ||
        product.exteriorColor.toLowerCase().includes(searchTerm) ||
        product.interiorColor.toLowerCase().includes(searchTerm)
      );
    });
  }

  /**
   * 获取产品的关键特性（用于产品列表显示）
   */
  getProductKeyFeatures(product) {
    if (!product || !product.configurations) return [];
    
    const keyFeatures = [];
    
    // 基础配置
    const basicConfig = product.configurations.find(config => 
      config.category === '基础配置' || config.category === '基本信息'
    );
    
    if (basicConfig && basicConfig.items) {
      const importantItems = ['长/宽/高', '轴距', '最大功率', '变速箱'];
      basicConfig.items.forEach(item => {
        if (importantItems.some(key => item.name.includes(key))) {
          keyFeatures.push(`${item.name}: ${item.value}`);
        }
      });
    }

    // 如果基础配置不够，从其他配置中提取
    if (keyFeatures.length < 4) {
      product.configurations.forEach(config => {
        if (keyFeatures.length >= 4) return;
        if (config.category !== '基础配置' && config.items) {
          config.items.forEach(item => {
            if (keyFeatures.length >= 4) return;
            if (item.name && item.value && !keyFeatures.some(f => f.includes(item.name))) {
              keyFeatures.push(`${item.name}: ${item.value}`);
            }
          });
        }
      });
    }

    return keyFeatures.slice(0, 4); // 只返回前4个特性
  }

  /**
   * 获取产品的图片分类
   */
  getProductImages(product) {
    if (!product || !product.images) return { exterior: [], interior: [], details: [] };

    const images = {
      exterior: [],
      interior: [],
      details: []
    };

    product.images.forEach(imagePath => {
      const fileName = imagePath.toLowerCase();
      if (fileName.includes('exterior') || fileName.includes('外观')) {
        images.exterior.push(imagePath);
      } else if (fileName.includes('interior') || fileName.includes('内饰')) {
        images.interior.push(imagePath);
      } else {
        images.details.push(imagePath);
      }
    });

    // 如果没有明确分类，按顺序分配
    if (images.exterior.length === 0 && images.interior.length === 0 && images.details.length > 0) {
      const totalImages = images.details.length;
      const exteriorCount = Math.ceil(totalImages * 0.4);
      const interiorCount = Math.ceil(totalImages * 0.3);
      
      images.exterior = images.details.slice(0, exteriorCount);
      images.interior = images.details.slice(exteriorCount, exteriorCount + interiorCount);
      images.details = images.details.slice(exteriorCount + interiorCount);
    }

    return images;
  }

  /**
   * 获取产品的主图
   */
  getProductMainImage(product) {
    if (!product || !product.images || product.images.length === 0) {
      return '/images/placeholder.jpg';
    }
    return product.images[0];
  }

  /**
   * 格式化价格显示
   */
  formatPrice(price) {
    if (!price || price === '待定' || price === 'TBD') {
      return '价格面议';
    }
    
    if (typeof price === 'string' && price.includes('万')) {
      return price;
    }
    
    if (typeof price === 'number') {
      return `${price}万元`;
    }
    
    return price;
  }
}

// 创建全局实例
export const productManager = new ProductDataManager();

// 导出分类配置
export const categoryConfig = [
  { 
    id: 'all', 
    name: '全部车型', 
    icon: 'car',
    description: '查看所有可用车型'
  },
  { 
    id: 'executive', 
    name: '行政商务', 
    icon: 'business',
    description: '专为商务人士打造'
  },
  { 
    id: 'premium', 
    name: '奢华尊享', 
    icon: 'crown',
    description: '顶级豪华配置'
  },
  { 
    id: 'tech', 
    name: '科技智能', 
    icon: 'tech',
    description: '前沿科技体验'
  }
];

// 导出徽章配置
export const badgeConfig = {
  'HOT': { color: '#ff4757', label: '热销' },
  'NEW': { color: '#2ed573', label: '新品' },
  'LUXURY': { color: '#ffa502', label: '奢华' },
  'PREMIUM': { color: '#c9a96e', label: '尊享' },
  'TECH': { color: '#3742fa', label: '科技' },
  'EXECUTIVE': { color: '#1e3799', label: '行政' },
  'EXCLUSIVE': { color: '#8b5a3c', label: '限量' }
};

export default productManager;
