/**
 * @Component Tabs.Item
 * @Type 选项卡子模块
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2020-04-03 22:34
 */
import _ from 'lodash';
import React, {PureComponent} from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';
import Dropdown from '../../Dropdown';
import Icon from '../../Icon';

class Tabs extends PureComponent {

  render() {
    const {label, disabled, active, type, iconName, iconProps, dropdownProps, onClick, className, attributes} = this.props;

    let renderer = null;

    switch (type) {
      case 'dropdown':
        renderer = (
          <Dropdown
            isFragment
            toggleProps={{className: classNames('nav-link', {active: !disabled && active})}}
            iconName={iconName}
            iconProps={iconProps}
            title={label}
            {...dropdownProps}
          />
        );
        break;

      default:
        renderer = (
          <a className={classNames('nav-link', {disabled, active: !disabled && active})}>
            {(iconName || !_.isEmpty(iconProps)) && <Icon iconName={iconName} {...iconProps} />}
            {label}
          </a>
        )
    }

    /** 计算样式 */
    const classes = classNames(
      'nav-item',
      {
        dropdown: _.isEqual(type, 'dropdown')
      },
      className,
    );

    return <li className={classes} {...attributes} onClick={!disabled ? onClick : undefined}>{renderer}</li>;
  }
}


Tabs.propTypes = {
  /** 选项文本内容 */
  label: PropTypes.any.isRequired,
  /** 是否禁用当前选项 */
  disabled: PropTypes.bool,
  /** 指定当前选项类型，支持 dropdown - 下拉菜单 / link - 链接 */
  type: PropTypes.oneOf(['dropdown', 'link']),
  /** 选项图标名称 */
  iconName: PropTypes.string,
  /** 选项其他图标属性 */
  iconProps: PropTypes.object,
  /** 用户自定义修饰符 */
  className: PropTypes.string,
  /** 用户自定义属性 */
  attributes: PropTypes.object,
};

Tabs.defaultProps = {
  type: 'link',
  disabled: false,
  iconName: undefined,
  iconProps: {},
  className: '',
  attributes: {},
};

export default Tabs
