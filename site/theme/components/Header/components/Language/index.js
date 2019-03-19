/**
 * 语言切换组件
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2019-03-18 20:01
 */
import _ from 'lodash';
import React, {PureComponent} from 'react';
import {ThemeConfig} from 'docz';

import './style.less';

export default class extends PureComponent {

  render() {
    return (
      <ThemeConfig>
        {({themeConfig}) => {
          // 语言列表
          const {language} = themeConfig;
          // 默认选中的值
          const defaultValue = _.find(language, item => item.default) || language[0];

          return (
            <div className="languages js-languages">
              <span className="language-active js-language-active">{defaultValue.label}
                <i className="fa fa-angle-down" />
              </span>
              <ul className="languages-list js-languages-list fadeIn fadeOut">
                {
                  _.map(language, (lan, index) => (
                    <li key={index}>
                      <a href="/">{lan.label}</a>
                    </li>
                  ))
                }
              </ul>
            </div>
          );
        }
        }
      </ThemeConfig>
    )
  }
}
