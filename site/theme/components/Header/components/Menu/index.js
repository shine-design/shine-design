/**
 *
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2019-03-18 21:01
 */
import React, {PureComponent} from 'react';
import {NavLink} from 'react-router-dom'

export default class extends PureComponent {
  render() {
    return (
      <ul className="menu menu-dark sf-menu js-menu">
        <li>
          <NavLink to='/'>首页</NavLink>
        </li>
        <li>
          <NavLink to='/guide'>开发教程</NavLink>
        </li>
        <li>
          <NavLink to='/tutorial'>组件文档</NavLink>
        </li>
        <li>
          <NavLink to='/cli'>构建工具</NavLink>
        </li>
        <li>
          <NavLink to='/changelog'>更新日志</NavLink>
        </li>
        <li>
          <NavLink to='/contribute'>贡献指南</NavLink>
        </li>
      </ul>
    )
  }
}
