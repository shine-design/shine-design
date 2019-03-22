/**
 * 页面顶部组件
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2019-03-20 14:17
 */
import _ from 'lodash';
import React, {Component} from 'react';
import {ThemeConfig} from "docz";

export default class extends Component {

  render() {

    return (
      <ThemeConfig>
        {
          ({themeConfig: {logo = '', logoLink = '', topBar: {center = [], right = []}}}) => (
            <header className="header header-fixed header-minimal-light">
              <div className="container">
                <div className="row">
                  <nav className="navbar navbar-expand-lg navbar-light">
                    <a href={logoLink} className="navbar-brand">
                      <img src={logo} alt="Logo"/>
                    </a>
                    <button
                      className="navbar-toggler"
                      type="button"
                      data-toggle="collapse"
                      data-target="#navbarSupportedContent"
                      aria-controls="navbarSupportedContent"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      <span className="navbar-toggler-icon"/>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul className="navbar-nav mr-auto">
                        {
                          _.isArray(center) && _.map(center, (item, index) => (
                            <li className="nav-item" key={index}>
                              <a className="nav-link" href={item.link}>{item.label}</a>
                            </li>
                          ))
                        }
                      </ul>

                      <ul className="navbar-nav">
                        {
                          _.isArray(right) && _.map(right, (item, index) => (
                            <li className="nav-item" key={index}>
                              <a className="nav-link" href={item.link}>{item.label}</a>
                            </li>
                          ))
                        }
                      </ul>
                    </div>
                  </nav>
                </div>
              </div>
            </header>
          )
        }
      </ThemeConfig>
    )
  }
}
