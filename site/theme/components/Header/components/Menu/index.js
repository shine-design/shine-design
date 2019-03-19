/**
 *
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2019-03-18 21:01
 */
import React, {PureComponent} from 'react';
import {NavLink} from 'react-router-dom'

export default class extends PureComponent {

  componentDidMount() {
    this.initMenu();

    this.initMenu = this.initMenu.bind(this);
  }

  initMenu() {
    const menus = $('.js-menu');
    menus.each(function () {
      const menu = $(this);
      const config = {
        label: '',
        prependTo: menu.parent(),
        closedSymbol: '&#xf054',
        openedSymbol: '&#xf078',
        allowParentLinks: true,
      };
      const userConfig = menu.data('config');
      $.extend(true, config, userConfig);
      menu.slicknav(config);
      menu.superfish({
        delay: 300,
        autoArrows: false,
        speed: 'fast',
        disableHI: true,
      });
      if (menu.hasClass('menu-light')) {
        $('.slicknav_menu').addClass('menu-light');
      }
      $('body').click(function () {
        if ($('.slicknav_btn').hasClass('slicknav_open')) {
          menu.slicknav('close');
        }
      });
      $('.slicknav_btn, .slicknav_nav').on('click', function (event) {
        event.stopPropagation();
      });
    });
  }

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
