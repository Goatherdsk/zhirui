import React from 'react';
import './index.css';

// 通用图标组件
const Icon = ({ type, size = '16px', color = 'currentColor', className = '' }) => {
  const iconStyles = {
    width: size,
    height: size,
    fill: color,
    display: 'inline-block',
    verticalAlign: 'middle'
  };

  const icons = {
    // 车辆相关
    car: (
      <svg style={iconStyles} viewBox="0 0 24 24" className={className}>
        <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.22.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
      </svg>
    ),

    // 商务相关
    business: (
      <svg style={iconStyles} viewBox="0 0 24 24" className={className}>
        <path d="M14,6V4H10V6H8V18H16V6H14M12,7A1,1 0 0,1 13,8A1,1 0 0,1 12,9A1,1 0 0,1 11,8A1,1 0 0,1 12,7M10,19H14V16H10V19Z"/>
      </svg>
    ),

    // 皇冠/高端
    crown: (
      <svg style={iconStyles} viewBox="0 0 24 24" className={className}>
        <path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm2.7-2h8.6l.9-5.4-2.1 1.4L12 8l-3.1 2l-2.1-1.4L6.7 14z"/>
      </svg>
    ),

    // 科技/智能
    tech: (
      <svg style={iconStyles} viewBox="0 0 24 24" className={className}>
        <path d="M9,2V8H7V10H9V16H7V18H9V24H11V18H13V16H11V10H13V8H11V2H9M15,8V10H17V8H15M15,16V18H17V16H15M19,12V14H21V12H19M15,12V14H17V12H15M3,12V14H5V12H3Z"/>
      </svg>
    ),

    // 检查/对勾
    check: (
      <svg style={iconStyles} viewBox="0 0 24 24" className={className}>
        <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/>
      </svg>
    ),

    // 箭头
    arrow: (
      <svg style={iconStyles} viewBox="0 0 24 24" className={className}>
        <path d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"/>
      </svg>
    ),

    // 星星/装饰
    star: (
      <svg style={iconStyles} viewBox="0 0 24 24" className={className}>
        <path d="M12,2L13.09,8.26L22,9L17.22,13.78L18.18,22L12,18.54L5.82,22L6.78,13.78L2,9L10.91,8.26L12,2Z"/>
      </svg>
    ),

    // 电话
    phone: (
      <svg style={iconStyles} viewBox="0 0 24 24" className={className}>
        <path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z"/>
      </svg>
    ),

    // 邮件
    email: (
      <svg style={iconStyles} viewBox="0 0 24 24" className={className}>
        <path d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z"/>
      </svg>
    ),

    // 位置
    location: (
      <svg style={iconStyles} viewBox="0 0 24 24" className={className}>
        <path d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z"/>
      </svg>
    ),

    // 设计/画笔
    design: (
      <svg style={iconStyles} viewBox="0 0 24 24" className={className}>
        <path d="M20.71,4.04C21.1,3.65 21.1,3 20.71,2.63L18.37,0.29C18,-0.1 17.35,-0.1 16.96,0.29L15.12,2.12L18.87,5.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z"/>
      </svg>
    ),

    // 工具/扳手
    tool: (
      <svg style={iconStyles} viewBox="0 0 24 24" className={className}>
        <path d="M22.7,19L13.6,9.9C14.5,7.6 14,4.9 12.1,3C10.1,1 7.1,0.6 4.7,1.7L9,6L6,9L1.6,4.7C0.4,7.1 0.9,10.1 2.9,12.1C4.8,14 7.5,14.5 9.8,13.6L18.9,22.7C19.3,23.1 19.9,23.1 20.3,22.7L22.6,20.4C23.1,20 23.1,19.3 22.7,19Z"/>
      </svg>
    ),

    // 钻石/宝石
    diamond: (
      <svg style={iconStyles} viewBox="0 0 24 24" className={className}>
        <path d="M6,2L2,8L12,22L22,8L18,2H6M6.5,4H8.5L7,7L6.5,4M9.5,4H11.5L12,7L9.5,4M12.5,4H14.5L14.5,7L12.5,4M15.5,4H17.5L17,7L15.5,4M7.5,9L12,18.5L16.5,9H7.5Z"/>
      </svg>
    ),

    // 菜单/汉堡包
    menu: (
      <svg style={iconStyles} viewBox="0 0 24 24" className={className}>
        <path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"/>
      </svg>
    ),

    // 关闭
    close: (
      <svg style={iconStyles} viewBox="0 0 24 24" className={className}>
        <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"/>
      </svg>
    ),

    // 聊天/对话
    chat: (
      <svg style={iconStyles} viewBox="0 0 24 24" className={className}>
        <path d="M12,3C6.5,3 2,6.58 2,11C2.05,13.15 3.06,15.17 4.75,16.5C4.75,17.1 4.33,18.67 2,21C4.37,20.89 6.64,20 8.47,18.5C9.61,18.83 10.81,19 12,19C17.5,19 22,15.42 22,11C22,6.58 17.5,3 12,3Z"/>
      </svg>
    ),

    // 手机
    mobile: (
      <svg style={iconStyles} viewBox="0 0 24 24" className={className}>
        <path d="M17,19H7V5H17M17,1H7C5.89,1 5,1.89 5,3V21C5,22.1 5.89,23 7,23H17C18.1,23 19,22.1 19,21V3C19,1.89 18.1,1 17,1Z"/>
      </svg>
    ),

    // 社交媒体通用
    social: (
      <svg style={iconStyles} viewBox="0 0 24 24" className={className}>
        <path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.58 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"/>
      </svg>
    )
  };

  return icons[type] || null;
};

export default Icon;
