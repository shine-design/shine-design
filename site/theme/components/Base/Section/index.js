/**
 * 模块组件
 * 用于在 MDX 中定义一个功能展示模块，包含 代码效果 和 代码块 。
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2019-03-20 22:45
 */
import _ from 'lodash';
import classNames from 'classnames';
import React, {Component} from 'react';
import {ThemeConfig} from "docz";

export default class extends Component {

  /* eslint-disable react/no-unused-state */
  state = {
    selected: 0,
  };

  componentDidMount() {
    /* eslint-disable no-undef */
    $('.lavalamp').lavalamp({
      setOnClick: true,
      enableHover: false,
      margins: false,
      autoUpdate: true,
      duration: 200,
    });
  }

  render() {
    const me = this;
    const {children} = me.props;
    const {selected} = me.state;

    return (
      <ThemeConfig>
        {
          ({themeConfig: {boxConfig}}) => (
            <div className="component">
              <ul className="nav nav-pills lavalamp" role="tablist">
                {
                  _.isArray(boxConfig) && _.map(boxConfig, (box, index) => (
                    <li className="nav-item" key={index}>
                      <a
                        className={classNames('nav-link', {active: box.isChecked})}
                        onClick={() => {
                          me.setState({
                            selected: index,
                          })
                        }}
                      >
                        {box.label}
                      </a>
                    </li>
                  ))
                }
              </ul>
              <div className="tab-content">
                {children[selected]}
              </div>
            </div>
          )
        }
      </ThemeConfig>
    );
  }
}
