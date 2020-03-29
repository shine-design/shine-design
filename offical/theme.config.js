/**
 * 主题配置文件
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2019-03-19 20:13
 */
import _ from 'lodash';

const bulidMenu = (menu, docs) => {
  const {name, children} = menu;
  const menuParams = _.pick(menu, ['label', 'name']);

  const articles = _.filter(docs, doc => {
    return _.isEqual(doc.menu, name);
  });

  if (_.isUndefined(children)) {

    return _.isEmpty(articles)
      ? _.noop()
      : {
        ...menu,
        articles: _.map(articles, article => ({...article, parents: [menuParams]})),
      };
  }

  const childMenus = [];

  if (_.isArray(children)) {
    _.forEach(children, child => {
      const childResult = bulidMenu(child, docs);
      if (!_.isUndefined(childResult)) {
        childMenus.push(childResult);
      }
    });
  }

  return _.isEmpty(childMenus)
    ? _.noop()
    : {
      ...menu,
      children: _.map(childMenus, child => {

        const articleArr = _.map(child.articles, art => {
          let {parents} = art;
          if (_.isUndefined(parents)) {
            parents = [menuParams];
          } else {
            parents.push(menuParams);
          }
          return {
            ...art,
            parents,
          };
        });

        return {
          ...child,
          articles: articleArr,
        };
      }),
    };
};

export default {
  /** 网站 LOGO */
  /* eslint-disable global-require */
  logo: require('./theme/assets/images/logos/logo.png'),
  /** 网站 LOGO 跳转链接 */
  logoLink: '/',
  /** 项目名称 */
  brand: 'Shine Design',
  /** 描述语 */
  slogan: '为开发者、设计师和产品经理准备的 UI 设计语言',
  screenAction: [
    {
      label: '开始使用',
      link: '/tutorial',
    },
    {
      label: 'Github',
      link: '//github.com/shine-design/shine-design',
      isBlank: true,
      isStroke: true,
    }],
  /** 支持语言 */
  language: [
    {
      label: '简体中文',
      link: '',
    },
    {
      label: 'English',
      link: '',
    },
  ],
  /** 页面顶部导航 */
  topBar: [
    {label: '首页', link: '/'},
    {label: '快速上手', link: '/tutorial'},
    {label: '组件文档', link: '/guide'},
    {label: '构建工具', link: '/tools'},
    // {label: '更新日志', link: '/changelog'},
    {label: '贡献指南', link: '/contribute'},
  ],
  /** 页面侧边栏导航 */
  menu: [
    {label: 'Shine Design', link: '/guide'},
    {label: '安装', link: '/guide/install'},
    {label: '定制主题', link: '/guide/customize'},
    {label: '更新日志', link: '/guide/changelog'},
    {label: '常见问题', link: '/guide/faq'},
    {
      label: '基础组件',
      children: [
        {label: 'Grid 栅格系统', link: '/guide/grid'},
        {label: 'Color 色彩', link: '/guide/color'},
        {label: 'Typography 排版', link: '/guide/typography'},
        {label: 'Button 按钮', link: '/guide/button'},
        {label: 'Icon 图标', link: '/guide/icon'},
      ],
    },
    {
      label: '表单控制',
      children: [
        {label: 'Form 表单控件', link: '/guide/form'},
        {label: 'Item 表单项', link: '/guide/form-item'},
        {label: 'Verifier 表单校验', link: '/guide/form-verifier'},
        {label: 'Input 输入框', link: '/guide/input'},
        {label: 'Switch 开关', link: '/guide/switch'},
        {label: 'Radio 单选框', link: '/guide/radio'},
        {label: 'Checkbox 复选框', link: '/guide/checkbox'},
        // {label: 'Select 选择框', link: '/guide/select'},
        {label: 'TextArea 文本域', link: '/guide/textArea'},
      ],
    },
    {
      label: '数据展示',
      children: [
        {label: 'Badge 徽章', link: '/guide/badge'},
        {label: 'Progress 进度条', link: '/guide/progressBar'},
      ],
    },
    {
      label: '消息通知',
      children: [
        {label: 'Alert 警告提示', link: '/guide/alert'},
        {label: 'Modal 模态框', link: '/guide/modal'},
      ],
    },
    {
      label: '其他',
      children: [
        {label: 'Tooltip 文字提示', link: '/guide/tooltip'},
        {label: 'Divider 分隔线', link: '/guide/divider'},
      ],
    },
  ],
  footerBar: [
    {
      title: '关于',
      children: [
        {label: '开发手记', link: ''},
        {label: '更新日志', link: ''},
        {label: '联系我们', link: ''},
      ],
    },
    {
      title: '下载',
      children: [
        {label: '发布版本', link: ''},
        {label: '源代码', link: ''},
        {label: 'License', link: ''},
        {label: 'NPM', link: ''},
      ],
    },
    {
      title: '文档',
      children: [
        {label: '开发教程', link: ''},
        {label: '组件文档', link: ''},
        {label: 'FAQ', link: ''},
      ],
    },
    {
      title: '社区支持',
      children: [
        {label: '反馈建议', link: ''},
        {label: '贡献指南', link: ''},
        {label: 'Wiki', link: ''},
      ],
    },
  ],
  version: [
    require('./version/0.2.7').default,
    require('./version/0.2.6').default,
    require('./version/0.2.5').default,
    require('./version/0.2.4').default,
    require('./version/0.2.3').default,
    require('./version/0.2.2').default,
    require('./version/0.2.1').default,
    require('./version/0.2.0').default,
    require('./version/0.1.2').default,
    require('./version/0.1.1').default,
    require('./version/0.1.0').default,
  ],
  /** 页面正文盒模块配置 */
  boxConfig: [{
    label: 'Preview',
    isChecked: true,
  }, {
    label: 'Code',
  }],
  /**
   * // 解析目录渲染树规则
   * @param menus 菜单项
   * @param docs 当前文档信息
   * @returns {Array} 菜单与文档形成的渲染树
   */
  initMenuMap(menus, docs) {
    const material = [];

    _.each(menus, (menu) => {
      const menuResult = bulidMenu(menu, docs);
      if (!_.isUndefined(menuResult)) {
        material.push(menuResult);
      }
    });

    return material;
  },
};
