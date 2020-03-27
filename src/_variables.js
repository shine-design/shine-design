module.exports = {

  /** 自定义 className 修饰符前缀 */
  classPrefix: 'shine',

  /* 默认字体集 */
  fontFamily: '"Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif',

  /* 主色调与状态颜色 */
  colors: {
    brand: {
      base: '#716ACA',
      inverse: '#FFFFFF',
    },
    grace: {
      base: '#00C5DC',
      inverse: '#FFFFFF',
    },
    light: {
      base: '#FFFFFF',
      inverse: '#282A3C',
    },
    metal: {
      base: '#C4C5D6',
      inverse: '#FFFFFF',
    },
    primary: {
      base: '#5867DD',
      inverse: '#FFFFFF',
    },
    success: {
      base: '#34BFA3',
      inverse: '#FFFFFF',
    },
    info: {
      base: '#36A3F7',
      inverse: '#FFFFFF',
    },
    warning: {
      base: '#FFB822',
      inverse: '#FFFFFF',
    },
    danger: {
      base: '#F4516C',
      inverse: '#FFFFFF',
    },
  },

  /** 媒体查询分界 */
  breakpoints: {
    /** 小屏幕或移动设备 */
    sm: '576px',
    /** 中等屏幕或平板设备 */
    md: '768px',
    /** 大屏幕或桌面设备 */
    lg: '992px',
    /** 大屏幕或桌面设备 */
    xl: '1200px',
    /** 大屏幕或宽屏设备 */
    xxl: '1400px',
    /** 大屏幕或宽屏设备 */
    xxxl: '1600px',
  },
};
