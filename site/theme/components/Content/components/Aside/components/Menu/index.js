/**
 * 菜单导航项¬
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2019-03-20 16:21
 */
import _ from 'lodash';
import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import classNames from 'classnames';
import {Docs, ThemeConfig} from 'docz'


export default class extends Component {
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
                      _.map(material, ({articles, label, isExpand}, index) => {

                        return articles.length === 1
                          ? (
                            <li className="nav-item" key={index}>
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
                                {label}
                              </NavLink>
                            </li>
                          )
                          : (
                            <li className="nav-item" key={index}>
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
                      })
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
