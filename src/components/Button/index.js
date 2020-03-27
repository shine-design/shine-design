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
import Icon from '../Icon';

class Button extends PureComponent {
  render() {
    const {label, type, bgColor, outlineColor, outlineHoverColor, btnStyle, icon, size, disabled, active, wide, tall, shake, isOnlyIcon, onClick, className, attributes, children} = this.props;

    /** 计算样式 */
    const classes = classNames(
      `${classPrefix}-btn`, 'btn', 'sh-btn',
      {
        [`btn-outline-${outlineColor}`]: _.isString(outlineColor),
        [`btn-outline-hover-${outlineHoverColor}`]: _.isString(outlineHoverColor),
        [`btn-${bgColor}`]: _.isString(bgColor),
        [`btn-${btnStyle}`]: _.isString(btnStyle),
        [`btn-${size}`]: _.isString(size),
        'btn-elevate': shake,
        'btn-elevate-air': shake,
        'btn-wide': wide,
        'btn-tall': tall,
        'btn-icon': isOnlyIcon,
        disabled,
        active,
      },
      className,
    );

    return (
      /* eslint-disable-next-line react/button-has-type */
      <button
        type={type}
        className={classes}
        onClick={onClick}
        disabled={disabled}
        {...attributes}
      >
        {_.isString(icon) ? <Icon iconName={icon} /> : icon}
        {!isOnlyIcon && (label || children)}
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
  /** 按钮悬停时轮廓颜色 */
  outlineHoverColor: PropTypes.string,
  /** 按钮类型，圆角矩形:normal，直角矩形:square，椭圆形:pill */
  btnStyle: PropTypes.oneOf(['normal', 'square', 'pill']),
  /** 按钮类型尺寸，支持 normal：默认尺寸 / sm：小尺寸 / lg：大尺寸 */
  size: PropTypes.oneOf(['normal', 'sm', 'lg']),
  /** 按钮是否被激活 */
  active: PropTypes.bool,
  /** 按钮是否被禁用 */
  disabled: PropTypes.bool,
  /** 按钮以更宽的尺寸显示 */
  wide: PropTypes.bool,
  /** 按钮以更高的尺寸显示 */
  tall: PropTypes.bool,
  /** 按钮是否显示抖动状态 */
  shake: PropTypes.bool,
  /** 按钮图标，可以提供图标名称，或图标组件 */
  icon: PropTypes.any,
  /** 是否仅展示图标按钮 */
  isOnlyIcon: PropTypes.bool,
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
  outlineHoverColor: undefined,
  btnStyle: 'normal',
  size: 'normal',
  icon: undefined,
  isOnlyIcon: false,
  active: false,
  disabled: false,
  wide: false,
  tall: false,
  shake: false,
  onClick: undefined,
  className: '',
  attributes: {},
};

export default Button;
