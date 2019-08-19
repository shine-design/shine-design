/**
 * 网站LOGO
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2019-08-15 17:50
 */
import React from 'react';
import {ThemeConfig} from "docz";
import './style.less';

export default () => (
  <ThemeConfig>
    {
      ({themeConfig: {logo, logoLink}}) => (
        <a href={logoLink} className="logo-image logo-animated"><img src={logo} alt="logo" /></a>)
    }
  </ThemeConfig>
);
