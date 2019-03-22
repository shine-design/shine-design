/**
 * 主题配置文件
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2019-03-19 20:13
 */

export default {
  /** 网站 LOGO */
  /* eslint-disable global-require */
  logo: require('./assets/logo/logo.png'),
  /** 网站 LOGO 跳转链接 */
  logoLink: '/',
  /** 支持语言，待上线 */
  language: [
    {
      label: '简体中文',
      default: true,
    },
    {
      label: 'English',
    },
  ],
  /** 页面顶部导航 */
  topBar: {
    center: [{
      label: '首页',
      link: '/',
    }, {
      label: '快速上手',
      link: '/',
    }, {
      label: '组件文档',
      link: '/',
    }, {
      label: '构建工具',
      link: '/',
    }, {
      label: '生态系统',
      link: '/',
    }],
    right: [{
      label: '贡献',
      link: '/',
    }, {
      label: '更新日志',
      link: '/',
    }],
  },
  /** 页面侧边栏导航 */
  menu: [
    {
      name: 'getting-started',
      label: '快速入门',
    },
    {
      name: 'practical',
      label: '项目实战',
    },
    {
      name: 'customize',
      label: '定制主题',
    },
    {
      name: 'changelog',
      label: '更新日志',
    },
    {
      name: 'components',
      label: '组件',
      isExpand: true,
    },
  ],
  /** 页面正文盒模块配置 */
  boxConfig: [{
    label: 'Preview',
    isChecked: true,
  }, {
    label: 'Code',
  }],
};
