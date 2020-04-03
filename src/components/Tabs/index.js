/**
 * @Component Tabs
 * @Type 选项卡
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2020-04-03 22:34
 */

import React, {PureComponent} from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';
import Item from './Item';
// import {classPrefix} from 'variables';

class Tabs extends PureComponent {

  render() {
    const {className, attributes} = this.props;

    /** 计算样式 */
    const classes = classNames(
      'nav',
      'nav-tabs',
      className,
    );

    return (
      <div className={classes} {...attributes}>

      </div>
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
