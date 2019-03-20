/**
 * 主题配置文件
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2019-03-19 20:13
 */
import _ from 'lodash';

export default {
  language: [
    {
      label: '简体中文',
      default: true,
    },
    {
      label: 'English',
    },
  ],
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
  // 渲染目录树 Handler
  initMenuMap(menus, docs) {

    const material = [];

    _.each(menus, (menu) => {
      const {name} = menu;

      const articles = _.filter(docs, doc => {
        return _.isEqual(doc.menu, name);
      });

      if (_.isEmpty(articles)) return;

      material.push({
        ...menu,
        articles,
      });
    });

    return material;
  },
};
