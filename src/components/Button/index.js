/**
 * @Component Button
 * @Type 按钮
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2019/5/12 09:35
 */
import _ from 'lodash';
import React, {PureComponent} from 'react';
import classNames from 'classnames';
import * as PropTypes from 'prop-types';
import {classPrefix} from 'variables';
import './style/index.scss';

class Button extends PureComponent {
  render() {
    const {label, type, bgColor, className, attributes, children} = this.props;

    /** 计算样式 */
    const classes = classNames(
      `${classPrefix}-btn`,
      {
        [`${classPrefix}-btn-${bgColor}`]: _.isString(bgColor),
      },
      className,
    );

    return (
      // eslint-disable-next-line react/button-has-type
      <button
        type={type}
        className={classes}
        {...attributes}
      >
        {label || children}
      </button>
    );
  }
}

Button.propTypes = {
  /** 按钮提示文案 */
  label: PropTypes.node,
  /** 按钮类型，支持普通按钮:button，提交按钮:submit，重置按钮:reset */
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  /** 按钮背景颜色 */
  bgColor: PropTypes.string,
  /** 按钮轮廓颜色 */
  outlineColor: PropTypes.string,
  /** 按钮渐变色，支持设置两个属性：from：起始颜色，to：终止颜色 */
  gradient: PropTypes.shape({
    from: PropTypes.string,
    to: PropTypes.string,
  }),
  /** 按钮类型尺寸，支持 default：默认尺寸 / small：小尺寸 / large：大尺寸 */
  size: PropTypes.oneOf(['default', 'small', 'large']),
  /** 按钮是否被激活 */
  isActive: PropTypes.bool,
  /** 按钮是否被禁用 */
  isDisabled: PropTypes.bool,
  /** 用户自定义修饰符 */
  className: PropTypes.string,
  /** 用户自定义属性 */
  attributes: PropTypes.object,
};

Button.defaultProps = {
  label: 'Button',
  type: 'button',
  bgColor: 'primary',
  outlineColor: undefined,
  gradient: undefined,
  size: 'default',
  isActive: false,
  isDisabled: false,
  className: '',
  attributes: {},
};

export default Button;
