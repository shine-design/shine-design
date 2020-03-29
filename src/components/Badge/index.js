/**
 * @Component Badge
 * @Type 徽章组件
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2019-03-27 08:16
 */
import React, {PureComponent} from 'react';
import _ from 'lodash';
import classNames from 'classnames';
import * as PropTypes from 'prop-types';
import {classPrefix} from 'variables';

class Badge extends PureComponent {

  render() {
    const {bgColor, isUnify, isInline, size, borderType, onClick, className, attributes, children} = this.props;
    const isDot = _.isUndefined(children) || (_.isArray(children) && children.length === 0);
    /** 计算样式 */
    const classes = classNames(
      `${classPrefix}-badge`,
      {
        [`${classPrefix}-badge--inline`]: isInline && !isDot,
        [`${classPrefix}-badge--dot`]: isDot,
        [`${classPrefix}-badge--${size}`]: size,
        [`${classPrefix}-badge--${borderType}`]: !isDot && borderType,
        [`${classPrefix}-badge--${bgColor}`]: bgColor && !isUnify,
        [`${classPrefix}-badge--unified-${bgColor}`]: bgColor && isUnify,
      },
      className,
    );

    return (
      <span
        className={classes}
        onClick={onClick}
        {...attributes}
      >
        {!isDot && children}
      </span>
    );
  }
}

Badge.propTypes = {
  /** 徽标背景颜色 */
  bgColor: PropTypes.string,
  /** 是否统一样式 */
  isUnify: PropTypes.bool,
  /** 针对较长的文本，以较宽尺寸显示，当 isDot 为 true 时无效 */
  isInline: PropTypes.bool,
  /** 点类型尺寸，支持 sm：小尺寸 / lg：大尺寸 / xl：更大尺寸，仅 isDot 为 true 时生效 */
  size: PropTypes.oneOf(['sm', 'lg', 'xl']),
  /** 边框类型，支持 square：直角矩形 和 rounded：圆角矩形，该属性对 dot 类型徽标无效 */
  borderType: PropTypes.oneOf(['square', 'rounded']),
  /** 用户自定义修饰符 */
  className: PropTypes.string,
  /** 用户自定义属性 */
  attributes: PropTypes.object,
  /** 用户点击徽标触发行为 */
  onClick: PropTypes.func,
};

Badge.defaultProps = {
  bgColor: undefined,
  isUnify: false,
  isInline: false,
  borderType: undefined,
  size: undefined,
  className: '',
  attributes: {},
  onClick: _.noop(),
};

export default Badge;
