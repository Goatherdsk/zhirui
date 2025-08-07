import { makeAutoObservable } from 'mobx';

class AppStore {
  // 当前选中的语言
  currentLanguage = 'zh';
  
  // 移动端菜单是否打开
  isMobileMenuOpen = false;
  
  // 当前页面
  currentPage = 'home';
  
  // 加载状态
  isLoading = false;

  constructor() {
    makeAutoObservable(this);
  }

  // 设置当前语言
  setLanguage(language) {
    this.currentLanguage = language;
  }

  // 切换移动端菜单
  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  // 关闭移动端菜单
  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }

  // 设置当前页面
  setCurrentPage(page) {
    this.currentPage = page;
    this.closeMobileMenu(); // 切换页面时关闭移动端菜单
  }

  // 设置加载状态
  setLoading(isLoading) {
    this.isLoading = isLoading;
  }
}

// 创建store实例
const appStore = new AppStore();

export default appStore;
