/**
 * 菜单导航项组件
 * 侧边栏导航子组件，基于 MDX 解析的菜单渲染展示
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2019-03-20 16:21
 */
import _ from 'lodash';
import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import classNames from 'classnames';
import {Docs, ThemeConfig} from 'docz';

export default class extends Component {

  componentDidMount() {
    $('.sticky').sticky({topSpacing: 150});
  }

  render() {
    const {location} = this.props;
    return (
      <ThemeConfig>
        {
          ({themeConfig}) => (
            <Docs>
              {({docs}) => {

                const {menu, initMenuMap} = themeConfig;
                // 获取所有目录列表
                const material = initMenuMap(menu, docs);

                return (
                  <ul id="page-nav" className="nav flex-column nav-vertical-2">
                    {
                      _.map(material, (item, index) => (
                          <MenuItem key={index} index={index} parentId="page-nav" {...item} location={location} />
                        ),
                      )
                    }
                  </ul>
                )
              }}
            </Docs>
          )
        }
      </ThemeConfig>
    );
  }
}

class MenuItem extends Component {

  render() {
    const {articles, label, isExpand, location, index, parentId, isChild, children} = this.props;
    let childList = [];

    if (_.isArray(children)) {

      childList = _.map(children, (child, itemIndex) => (
        <MenuItem
          index={index + '-' + itemIndex}
          isChild={true}
          key={itemIndex}
          parentId={'page-nav-' + index}
          location={location}
          {...child}
        />
      ));

      return (
        <li className="nav-item">
          <a
            className="nav-link"
            data-toggle="collapse"
            href={`#menu-${index}`}
            role="button"
            aria-expanded={!!isExpand}
            aria-controls={`menu-${index}`}
          >
            {label}
          </a>
          <div
            className={classNames('collapse', {'show': isExpand})}
            id={`menu-${index}`}
            data-parent="#page-nav"
          >
            <div>
              <ul className="nav flex-column" id={parentId}>
                {childList}
              </ul>
            </div>
          </div>
        </li>
      );
    }

    return articles.length === 1
      ? (
        <li className="nav-item">
          <NavLink
            to={articles[0].route}
            activeClassName="active"
            className={
              classNames(
                'nav-link',
                {'active': _.isEqual(location.pathname, articles[0].route)},
              )
            }
            role="button"
          >
            {articles[0].name}
          </NavLink>
        </li>
      )
      : (
        <li className="nav-item">
          {
            isChild ? <span className="nav-link nav-span font-weight-bolder">{label}</span> : (
              <a
                className="nav-link"
                data-toggle="collapse"
                href={`#menu-${index}`}
                role="button"
                aria-expanded={!!isExpand}
                aria-controls={`menu-${index}`}
              >
                {label}
              </a>
            )
          }
          <div
            className={classNames('collapse', {'show': isExpand || isChild})}
            id={`menu-${index}`}
            data-parent={'#' + parentId}
          >
            <div>
              <ul className="nav flex-column">
                {
                  _.map(articles, (article, articleIndex) => (
                    <li className="nav-item" key={articleIndex}>
                      <NavLink
                        to={article.route}
                        activeClassName="active"
                        className={classNames('nav-link', {'active': _.isEqual(location.pathname, article.route)})}
                      >
                        {article.name}
                      </NavLink>
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>
        </li>
      );
  }
}
