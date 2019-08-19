import _ from 'lodash';
import React, {Component} from 'react';
import {NavLink} from 'react-router-dom'
import {ThemeConfig} from "docz";
import jQuery from 'jquery';
import './style.less';

export default class Menu extends Component {

  componentDidMount() {
    this._initMenu();
  }

  _initMenu() {
    _.forEach(jQuery('.js-menu'), item => {
      const menu = jQuery(item);

      const config = {
        label: '',
        prependTo: menu.parent(),
        closedSymbol: '&#xf054',
        openedSymbol: '&#xf078',
        allowParentLinks: true,
      };

      jQuery.extend(true, config, menu.data('config'));
      menu.slicknav(config);
      menu.superfish({
        delay: 300,
        autoArrows: false,
        speed: 'fast',
        disableHI: true,
      });

      if (menu.hasClass('menu-light')) {
        jQuery('.slicknav_menu').addClass('menu-light');
      }

      jQuery('body').on('click', function () {
        if (jQuery('.slicknav_btn').hasClass('slicknav_open')) {
          menu.slicknav('close');
        }
      });

      jQuery('.slicknav_btn, .slicknav_nav').on('click', event => {
        event.stopPropagation()
      });
    });
  }

  render() {
    const pathName = this.props.location.pathname || '';
    return (
      <ThemeConfig>
        {
          ({themeConfig: {topBar}}) => (
            <ul className="menu menu-dark sf-menu js-menu">
              {_.map(topBar, (bar, index) => (
                <li key={index}>
                  <NavLink className={pathName === bar.link ? 'active' : ''} to={bar.link}>{bar.label}</NavLink>
                </li>
              ))}
            </ul>
          )
        }
      </ThemeConfig>
    )
  }
}
