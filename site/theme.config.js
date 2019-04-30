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
      name: 'about-shine-design',
      label: 'Shine Design',
    }, {
      name: 'install',
      label: '安装',
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
      name: 'faq',
      label: '常见问题',
    },
    {
      name: 'components',
      label: '组件',
      children: [{
        name: 'common',
        label: '通用',
      }, {
        name: 'data',
        label: '数据展示',
      }, {
        name: 'form',
        label: '表单控制',
      }, {
        name: 'response',
        label: '反馈',
      }],
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
