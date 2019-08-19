import React, {Component, Fragment} from 'react';
import {NavLink} from 'react-router-dom'
import Pro from 'siteSrc/assets/images/tool/pro.png';
import Genius from 'siteSrc/assets/images/tool/genius.png';
import Tools from 'siteSrc/assets/images/tool/tool.png';
import './style.less';

export default class Tool extends Component {

  render() {
    return (
      <Fragment>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="promo-title-wrapper ">
                <h3 className="promo-title"> 工具和资源 </h3>
                <p className="promo-description"> Shine Design 吸引了众多开发者加入开源社区，你可以在此处获取 Shine 生态圈的其他产品，也可以获取技术支持。 </p>
              </div>
              <ul className="featured-boxes">
                <li className="featured-boxes-item">
                  <img src={Tools} className="featured-boxes-item-ico" alt="Shine Tool 构建工具"/>
                  <h5 className="featured-boxes-item-pretitle"> 构建工具</h5>
                  <h4 className="featured-boxes-item-title">Shine Tools</h4>
                  <p className="featured-boxes-item-description">官方出品，标准化构建工具，一键搭建开发环境，懒人必备。</p>
                  <a href="#" className="featured-boxes-item-button button blue-light rounded"> 了解详情 </a>
                </li>
                <li className="featured-boxes-item">
                  <img src={Pro} className="featured-boxes-item-ico" alt="Shine Design Pro 解决方案"/>
                  <h5 className="featured-boxes-item-pretitle">解决方案</h5>
                  <h4 className="featured-boxes-item-title">Shine Design Pro</h4>
                  <p className="featured-boxes-item-description">始于颜值，可以开箱即用的后台前端设计解决方案，美的不像实力派。</p>
                  <a href="#" className="featured-boxes-item-button button blue-light rounded"> 了解详情 </a>
                </li>
                <li className="featured-boxes-item">
                  <img src={Genius} className="featured-boxes-item-ico" alt="Genius Bar 帮助中心"/>
                  <h5 className="featured-boxes-item-pretitle">帮助中心</h5>
                  <h4 className="featured-boxes-item-title">Genius Bar</h4>
                  <p className="featured-boxes-item-description">此刻，与千万开发者一起，获取有关 Shine Design 的技术支持。</p>
                  <a href="#" className="featured-boxes-item-button button blue-light rounded"> 了解详情 </a>
                </li>
              </ul>
              <div className="helper center">
                <NavLink to="/more-tools" className="button stroke rounded blue-light">更多工具</NavLink>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}
