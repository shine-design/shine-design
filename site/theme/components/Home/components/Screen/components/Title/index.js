/**
 *
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2019-03-18 23:31
 */
import React, {Component, Fragment} from 'react';
import {NavLink} from "react-router-dom";

import './style.less';

export default class extends Component {

  render() {
    return (
      <Fragment>
        <div className="page-info helper center">
          <h1 className="page-title">Shine Design</h1>
          <h2 className="page-description">为开发者、设计师和产品经理准备的 UI 设计语言</h2>
        </div>
        <div className="header-back-buttons helper center">
          <NavLink to='/guide' className="button no-border rounded large blue-light">开始使用</NavLink>
          <a href="//github.com/shine-design/shine-design" rel='noopener noreferrer' target='_blank'
             className="button stroke rounded large blue-light">Github</a>
        </div>
      </Fragment>
    )
  }
}
