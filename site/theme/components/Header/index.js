/**
 * 页头导航
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2019-03-18 20:01
 */

import React from 'react';
import logo from '../../../assets/logo/logo.png';
import Menu from './components/Menu';
import './style/index.less';

export default class extends React.Component {
  render() {
    return (
      <div className="header header-over large">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6 col-xs-5">
              <a href="/" className="logo-image logo-animated">
                <img src={logo} alt="logo"/>
              </a>
            </div>
            <div className="col-md-9 col-sm-6 col-xs-7">
              <nav className="right helper">
                <Menu />
              </nav>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
