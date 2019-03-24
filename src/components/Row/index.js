/**
 * @Component Row
 * @Type 布局组件
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2019-03-16 02:02
 */
import React, {PureComponent} from 'react';
import _ from 'lodash';
import classNames from 'classnames';
import * as PropTypes from 'prop-types';
import {classPrefix} from '../../_variables';
import './style/index.scss';

/** 支持布局类型 */
const TYPES = ['flex'];
/** 交叉轴对齐方式 */
const ALIGN = ['top', 'middle', 'bootom'];
/** 主轴对齐方式 */
const JUSTIFY = ['start', 'end', 'center', 'space-around', 'space-between'];

class Row extends PureComponent {

  render() {
    const {
      justify,
      align,
      className,
      attributes,
      children,
    } = this.props;

    /** 计算样式 */
    const classes = classNames(
      `${classPrefix}-row`,
      `${classPrefix}-row--root`,
      {
        [`${classPrefix}-row--justify-${justify}`]: !_.isUndefined(justify),
        [`${classPrefix}-row--align-${align}`]: !_.isUndefined(align),
      },
      className,
    );

    return (
      <div
        className={classes}
        {...attributes}
      >
        {children}
      </div>
    );
  }
}

Row.propTypes = {
  /** 布局类型，目前仅支持 flex */
  type: PropTypes.oneOf(TYPES),
  /** 水平对齐方式 */
  justify: PropTypes.oneOf(JUSTIFY),
  /** 垂直对齐方式 */
  align: PropTypes.oneOf(ALIGN),
  /** 用户自定义修饰符 */
  className: PropTypes.string,
  /** 用户自定义属性 */
  attributes: PropTypes.object,
};

Row.defaultProps = {
  type: 'flex',
  justify: 'start',
  align: 'top',
  className: '',
  attributes: {},
};

export default Row;


