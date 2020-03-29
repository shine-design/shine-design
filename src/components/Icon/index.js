/**
 * @Component Icon
 * @Type 图标组件
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2019-08-19 17:42
 */
import _ from 'lodash';
import React, {PureComponent} from 'react';
import classNames from 'classnames';
import {classPrefix} from 'variables';
import * as PropTypes from "prop-types";

class Icon extends PureComponent {

  render() {
    const {iconName, size, isSpin, isPulse, rotate, flip, source, className, attributes, children} = this.props;
    /** 计算样式 */
    const classes = classNames(
      {
        [`${classPrefix}-icon-${iconName}`]: _.isUndefined(source) || _.isEqual(source, 'shine'),
        [`la la-${iconName}`]: _.isEqual(source, 'line-awesome'),
        [iconName]: _.isUndefined(source) || _.isEqual(source, 'outside'),
        [`${classPrefix}-icon-${size}`]: _.isString(size),
        [`${classPrefix}-icon-spin`]: isSpin,
        [`${classPrefix}-icon-pulse`]: isPulse,
        [`${classPrefix}-icon-rotate-${rotate}`]: _.isNumber(rotate),
        [`${classPrefix}-icon-flip-${flip}`]: _.isString(flip),
      },
      className,
    );

    return (
      <i className={classes} {...attributes}>{children}</i>
    );
  }
}

Icon.propTypes = {
  /** 图标名称 */
  iconName: PropTypes.string,
  /** 图标尺寸，支持按倍数扩展 */
  size: PropTypes.oneOf(['lg', '2x', '3x', '4x', '5x']),
  /** 是否产生旋转动画 */
  isSpin: PropTypes.bool,
  /** 是否产生八个方位的旋转动画 */
  isPulse: PropTypes.bool,
  /** 旋转图标角度 */
  rotate: PropTypes.oneOf([90, 180, 270]),
  /** 翻转图标 */
  flip: PropTypes.oneOf(['horizontal', 'vertical']),
  /** 指定图标来源，shine：组件库图标 / line-awesome：LineAwesome 图标库 / outside：外部图标库 */
  source: PropTypes.oneOf(['shine', 'line-awesome', 'outside']),
  /** 用户自定义修饰符 */
  className: PropTypes.string,
  /** 用户自定义属性 */
  attributes: PropTypes.object,
};

Icon.defaultProps = {
  iconName: '',
  size: undefined,
  isSpin: false,
  isPulse: false,
  rotate: undefined,
  flip: undefined,
  source: undefined,
  className: '',
  attributes: {},
};

export default Icon;
