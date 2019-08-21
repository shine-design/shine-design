/**
 * 网站语言切换
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2019-08-15 17:50
 */
import _ from 'lodash';
import React, {Component} from 'react';
import jQuery from 'jquery';
import {ThemeConfig} from "docz";
import {NavLink} from 'react-router-dom'
import './style.less';

export default class Language extends Component {
  componentDidMount() {
    this._initLanguage();
  }

  _initLanguage() {
    const language = jQuery('.js-languages');
    const list = language.find('.js-languages-list');
    language.mouseenter(() => {
      list.stop().fadeIn();
    }).mouseleave(() => {
      list.stop().fadeOut();
    });
  }

  render() {
    return (
      <ThemeConfig>
        {
          ({themeConfig: {language}}) => (
            <div className="languages js-languages">
							<span className="language-active js-language-active">简体中文
								<i className="fa fa-angle-down" />
							</span>
              <ul className="languages-list js-languages-list">
                {_.map(language, (item, index) => (
                  <li key={index}><NavLink to={item.link}>{item.label}</NavLink></li>))}
              </ul>
            </div>
          )
        }
      </ThemeConfig>
    )
  }
}
