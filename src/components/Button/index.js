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
    const {label, type, bgColor, outlineColor, btnStyle, size, gradientStart, gradientEnd, onClick, className, attributes, children} = this.props;

    /** 计算样式 */
    const classes = classNames(
      `${classPrefix}-btn`, 'btn', 'sh-btn',
      {
        [`btn-outline-${outlineColor}`]: _.isString(outlineColor),
        [`btn-${bgColor}`]: _.isString(bgColor),
        [`sh-btn--${btnStyle}`]: _.isString(btnStyle),
        [`btn-${size}`]: _.isString(size),
        [`sh-btn--gradient-from-${gradientStart}`]: _.isString(gradientStart) && _.isString(gradientEnd),
        [`sh-btn--gradient-to-${gradientEnd}`]: _.isString(gradientStart) && _.isString(gradientEnd),
      },
      className,
    );

    return (
      // eslint-disable-next-line react/button-has-type
      <button
        type={type}
        className={classes}
        onClick={onClick}
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
  /** 按钮类型，圆角矩形:normal，直角矩形:square，椭圆形:pill */
  btnStyle: PropTypes.oneOf(['normal', 'square', 'pill']),
  /** 按钮渐变色起始颜色，该属性与 gradientEnd 搭配使用 */
  gradientStart: PropTypes.string,
  /** 按钮渐变色结束颜色，该属性与 gradientStart 搭配使用 */
  gradientEnd: PropTypes.string,
  /** 按钮类型尺寸，支持 normal：默认尺寸 / sm：小尺寸 / lg：大尺寸 */
  size: PropTypes.oneOf(['normal', 'sm', 'lg']),
  /** 按钮是否被激活 */
  isActive: PropTypes.bool,
  /** 按钮是否被禁用 */
  isDisabled: PropTypes.bool,
  /** 按钮被点击触发事件 */
  onClick: PropTypes.func,
  /** 用户自定义修饰符 */
  className: PropTypes.string,
  /** 用户自定义属性 */
  attributes: PropTypes.object,
};

Button.defaultProps = {
  label: undefined,
  type: 'button',
  bgColor: 'light',
  outlineColor: undefined,
  btnStyle: 'normal',
  gradientStart: undefined,
  gradientEnd: undefined,
  size: 'normal',
  isActive: false,
  isDisabled: false,
  onClick: undefined,
  className: '',
  attributes: {},
};

export default Button;
