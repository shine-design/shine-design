/**
 * Dropdown
 * 下拉菜单
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2020-03-30 11:58
 */
import React, {PureComponent} from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';
import uuid from 'uuid/v1';
import {classPrefix} from 'variables';
import Button from '../Button';
import Options from './Options';
import 'bootstrap/js/src/dropdown';

class Dropdown extends PureComponent {

  render() {
    const {options, toggleProps, splitProps, direction, menuAlign, isSplit, isInline, isHideToggle, title, bgColor} = this.props;
    const {className, attributes} = this.props;
    const directionClass = 'drop' + direction;
    /** 计算样式 */
    const classes = classNames(
      isSplit && 'btn-group',
      directionClass,
      `${classPrefix}-dropdown`,
      {'dropdown-inline': isInline},
      className,
    );

    const mergedClassNames = classNames({
      'dropdown-toggle': !isHideToggle,
      'dropdown-toggle-split': isSplit
    }, toggleProps.className || '');

    const mergedToggleProps = {
      ...toggleProps,
      label: isSplit ? null : toggleProps.label || title,
      bgColor: toggleProps.bgColor || bgColor,
      className: mergedClassNames,
      attributes: {
        ...toggleProps.attributes,
        'data-toggle': "dropdown",
        'aria-haspopup': "true",
        'aria-expanded': "false"
      }
    };

    const mergedSplitProps = {
      ...splitProps,
      label: splitProps.label || title,
      bgColor: splitProps.bgColor || toggleProps.bgColor || bgColor,
      size: splitProps.size || toggleProps.size || undefined,
    };

    const id = uuid();

    return (
      <div className={classes} {...attributes} id={id}>
        {
          isSplit && <Button {...mergedSplitProps} />
        }
        <Button {...mergedToggleProps} />
        <div
          className={classNames('dropdown-menu', {[`dropdown-menu-${menuAlign}`]: menuAlign})}
          aria-labelledby={id}
        >
          {_.isArray(options) && _.map(options, (item, index) => <Options {...item} key={index}/>)}
        </div>
      </div>
    );
  }
}


Dropdown.propTypes = {
  /** 下拉菜单操作列表，参考 Options 组件 */
  options: PropTypes.array,
  /** 下拉按钮名称 */
  title: PropTypes.string,
  /** 下拉按钮背景颜色 */
  bgColor: PropTypes.string,
  /** 是否分拆下拉按钮 */
  isSplit: PropTypes.bool,
  /** 是否以 inline 方式展现下拉菜单 */
  isInline: PropTypes.bool,
  /** 是否隐藏下拉箭头 */
  isHideToggle: PropTypes.bool,
  /** 触发按钮配置项，参考按钮组件的Props */
  toggleProps: PropTypes.object,
  /** 指定下拉菜单弹出方向 */
  direction: PropTypes.oneOf(['up', 'down', 'left', 'right']),
  /** 指定下拉菜单与按钮的对齐方式 */
  menuAlign: PropTypes.oneOf(['left', 'right']),
  /** 当设置了 isSplit 时生效，触发按钮配置项，参考按钮组件的Props */
  splitProps: PropTypes.object,
  /** 用户自定义修饰符 */
  className: PropTypes.string,
  /** 用户自定义属性 */
  attributes: PropTypes.object,
};

Dropdown.defaultProps = {
  options: [],
  title: '',
  bgColor: 'secondary',
  isSplit: false,
  isInline: true,
  isHideToggle: false,
  direction: 'down',
  toggleProps: {},
  splitProps: {},
  className: '',
  attributes: {},
};

export default Dropdown
