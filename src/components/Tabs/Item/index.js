/**
 * @Component Tabs.Item
 * @Type 选项卡子模块
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2020-04-03 22:34
 */

import React, {PureComponent} from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';

// import {classPrefix} from 'variables';

class Tabs extends PureComponent {

  render() {
    const {label, disabled, type, className, attributes} = this.props;

    let renderer = null;

    switch (type) {
      case 'dropdown':
        break;

      default:
        renderer = <a className={classNames('nav-link', {disabled})}>{label}</a>
    }

    /** 计算样式 */
    const classes = classNames(
      'nav-item',
      className,
    );

    return (
      <li className={classes} {...attributes}>
        {renderer}
      </li>
    );
  }
}


Tabs.propTypes = {
  /** 用户自定义修饰符 */
  className: PropTypes.string,
  /** 用户自定义属性 */
  attributes: PropTypes.object,
};

Tabs.defaultProps = {
  className: '',
  attributes: {},
};

export default Tabs
