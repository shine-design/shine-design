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
import './style/badge.scss';

class Badge extends PureComponent {

  render() {
    const {bgColor, isInverse, isDot, isWide, dotSize, borderType, onClick, className, attributes, children} = this.props;
    const isDefaultDot = isDot && _.isEqual(dotSize, 'default');
    /** 计算样式 */
    const classes = classNames(
      `${classPrefix}-badge`,
      {
        [`${classPrefix}-badge--bordered`]: !isDot && borderType,
        [`${classPrefix}-badge--wide`]: isWide && !isDot,
        [`${classPrefix}-badge--dot`]: isDefaultDot,
        [`${classPrefix}-badge--dot-${dotSize}`]: !isDefaultDot,
        [`${classPrefix}-badge--${borderType}`]: !isDot && borderType,
        [`${classPrefix}-badge--${bgColor}`]: bgColor && !isInverse,
        [`${classPrefix}-badge-inverse--${bgColor}`]: bgColor && isInverse,
        [`${classPrefix}-badge-bordered--${bgColor}`]: bgColor,
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
  /** 是否以反色显示 */
  isInverse: PropTypes.bool,
  /** 不展示数字，仅展示一个点 */
  isDot: PropTypes.bool,
  /** 是否增加边框，以较宽尺寸显示，当 isDot 为 true 时无效 */
  isWide: PropTypes.bool,
  /** 点类型尺寸，支持 default：默认尺寸 / small：小尺寸 / large：大尺寸，仅 isDot 为 true 时生效 */
  dotSize: PropTypes.oneOf(['default', 'small', 'large']),
  /** 边框类型，支持 default：圆形 / square：直角矩形 和 rounded：圆角矩形，该属性对 dot 类型徽标无效 */
  borderType: PropTypes.oneOf(['default', 'square', 'rounded']),
  /** 用户自定义修饰符 */
  className: PropTypes.string,
  /** 用户自定义属性 */
  attributes: PropTypes.object,
  /** 用户点击徽标触发行为 */
  onClick: PropTypes.func,
};

Badge.defaultProps = {
  bgColor: undefined,
  isInverse: false,
  isDot: false,
  isWide: false,
  borderType: 'default',
  dotSize: 'default',
  className: '',
  attributes: {},
  onClick: _.noop(),
};

export default Badge;
