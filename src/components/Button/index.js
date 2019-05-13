/**
 * @Component Button
 * @Type 按钮
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2019/5/12 09:35
 */
import React, {PureComponent} from 'react';
import classNames from 'classnames';
import * as PropTypes from 'prop-types';
import {classPrefix} from 'variables';

// import './style/index.scss';

class Button extends PureComponent {
  render() {
    const {type, className, attributes, children} = this.props;

    /** 计算样式 */
    const classes = classNames(
      `${classPrefix}-btn`,
      className,
    );

    return (
      // eslint-disable-next-line react/button-has-type
      <button
        type={type}
        className={classes}
        {...attributes}
      >
        {children}
      </button>
    );
  }
}

Button.propTypes = {
  /** 按钮类型，支持普通按钮:button，提交按钮:submit，重置按钮:reset */
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  /** 用户自定义修饰符 */
  className: PropTypes.string,
  /** 用户自定义属性 */
  attributes: PropTypes.object,
};

Button.defaultProps = {
  type: 'button',
  className: '',
  attributes: {},
};

export default Button;
