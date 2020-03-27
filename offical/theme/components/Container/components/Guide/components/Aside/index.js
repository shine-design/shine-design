/**
 * 组件文档 - 侧边栏导航
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2019-08-16 17:37
 */
import _ from 'lodash';
import React, {Component} from 'react';
import classNames from 'classnames';
import {NavLink} from "react-router-dom";
import {ThemeConfig} from "docz";

export default class extends Component {
  state = {
    searchKey: '',
  };

  onFilter(menu, searchKey) {
    const _result = [];

    _.forEach(menu, item => {
      if (_.isUndefined(item.children)) {
        if (_.isEqual(searchKey, '') || item.label.indexOf(searchKey) !== -1) {
          _result.push(item);
        }
      } else if (_.isEqual(searchKey, '')) {
        _result.push(item);
      } else {
        const temp = _.filter(item.children, child => {
          return child.label.indexOf(searchKey) !== -1;
        });
        if (!_.isEmpty(temp)) {
          _result.push({
            ...item,
            children: temp,
          });
        }
      }
    });

    return _result;
  }

  render() {
    const {location} = this.props;

    return (
      <ThemeConfig>
        {
          ({themeConfig: {menu}}) => (
            <div className="sidebar js-sidebar-fixed">
              <div className="widget">
                <div className="search">
                  <form action="#">
                    <input
                      type="text"
                      className="search-input form-control"
                      placeholder="search"
                      onChange={e => this.setState({searchKey: e.target.value})}
                    />
                    <i className="fa fa-search search-icon" />
                  </form>
                </div>
              </div>
              <nav className="menu-vertical-wrapper">
                <ul className="menu-vertical  js-menu-vertical" data-prepend-to=".js-layout" data-select="Menu">
                  {
                    _.map(this.onFilter(menu, this.state.searchKey), (item, index) => {
                        const {children} = item;
                        if (_.isUndefined(children)) {
                          const {label, link} = item;
                          return (
                            <li key={index}>
                              <NavLink className={classNames({'active': _.isEqual(location.pathname, link)})} to={link}>
                                {label}
                              </NavLink>
                            </li>
                          );
                        }

                        return (
                          <li key={index}>
                            <a className='selected bolder'>{item.label}</a>
                            <ul>
                              {
                                _.map(children, (child, childIndex) => (
                                    <li key={childIndex}>
                                      <NavLink
                                        className={classNames({'active': _.isEqual(location.pathname, child.link)})}
                                        to={child.link}
                                      >
                                        {child.label}
                                      </NavLink>
                                    </li>
                                  ),
                                )
                              }

                            </ul>

                          </li>
                        )
                      },
                    )
                  }
                </ul>
              </nav>
            </div>
          )
        }
      </ThemeConfig>
    );
  }
}
