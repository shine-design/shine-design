/**
 * @Component Row
 * @Type 布局组件
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2019/3/16 02:02
 */
import React, {PureComponent} from 'react';
import _ from 'lodash';
import classNames from 'classnames';
import * as PropTypes from 'prop-types';
import {MEDIA, SCALE} from '../../configs/media';
import {classPrefix} from '../../_variables';
import './style/index.scss';

const TYPES = ['flex'];
const ALIGN = ['top', 'middle', 'bootom'];
const JUSTIFY = ['start', 'end', 'center', 'space-around', 'space-between'];

export default class extends PureComponent {

  static propTYpes = {
    /** 布局类型，目前仅支持 flex */
    type: PropTypes.oneOf(TYPES),
    /** 水平对齐方式 */
    justify: PropTypes.oneOf(JUSTIFY),
    /** 垂直对齐方式 */
    align: PropTypes.oneOf(ALIGN),
    /** 自定义栅格间隔 */
    gutter: PropTypes.oneOfType([
      /** 只指定数字表示通用 */
      PropTypes.number,
      /** 支持通过对象方式对不同媒体进行配置 */
      PropTypes.shape(_.map(MEDIA, media => ({[media]: PropTypes.oneOf(SCALE)}))),
    ]),
    /** 用户自定义修饰符 */
    className: PropTypes.string,
    /** 用户自定义属性 */
    attributes: PropTypes.object,
  };

  static defautProps = {
    type: 'flex',
    justify: 'start',
    align: 'top',
    gutter: 0,
    className: '',
  };

  render() {

    const {
      justify,
      align,
      className,
      attributes,
      children,
    } = this.props;

    const classes = classNames(
      `${classPrefix}-row`,
      `${classPrefix}-row--root`,
      {
        [`${classPrefix}-row--justify-${justify}`]: !_.isUndefined(justify),
        [`${classPrefix}-row--align-${align}`]: !_.isUndefined(align),
      },
      className
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
