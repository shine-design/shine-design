/**
 * @Component Badge
 * @Type 徽标组件
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
    const {bgColor, isDot, isWide, dotSize, borderType, onClick, className, attributes, children} = this.props;

    /** 计算样式 */
    const classes = classNames(
      `${classPrefix}-badge`,
      className,
    );

    return (
      <span
        className={classes}
        {...attributes}
      >
        {children}
      </span>
    );
  }
}

Badge.propTypes = {
  /** 徽标背景颜色，支持基础色和反色 */
  bgColor: PropTypes.string,
  /** 不展示数字，仅展示一个点 */
  isDot: PropTypes.bool,
  /** 是否增加边框，以较宽尺寸显示，当 isDot 为 true 时无效 */
  isWide: PropTypes.bool,
  /** 点类型尺寸，支持 default：默认尺寸和 small：小尺寸 ，仅 isDot 为 true 时生效 */
  dotSize: PropTypes.oneOf(['default', 'small']),
  /** 边框类型，支持 square：矩形 和 rounded：圆角矩形，该属性对 dot 类型徽标无效 */
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
  isDot: false,
  isWide: false,
  borderType: 'rounded',
  dotSize: 'default',
  className: '',
  attributes: {},
  onClick: _.noop(),
};

export default Badge;
