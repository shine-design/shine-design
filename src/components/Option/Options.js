/**
 * @Component Options
 * @Type 选框组件
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2020-03-22 11:47
 */
import _ from 'lodash';
import React, {PureComponent} from 'react';
import classNames from 'classnames';
import * as PropTypes from 'prop-types';
import {classPrefix} from 'variables';

class Options extends PureComponent {

  render() {
    const {label, type, checked, defaultChecked, name, id, disabled, isControlled, isBold, isSolid, bgColor, onClick, onChange} = this.props;
    const {className, attributes, children} = this.props;
    /** 计算样式 */
    const classes = classNames(
      `${classPrefix}-${type}`,
      {
        [`${classPrefix}-${type}--${bgColor}`]: _.isString(bgColor),
        [`${classPrefix}-${type}--disabled`]: disabled,
        [`${classPrefix}-${type}--bold`]: isBold,
        [`${classPrefix}-${type}--solid`]: isSolid,
      },
      className,
    );

    // 开关属性配置
    const props = {
      type,
      ...isControlled ? {checked} : {defaultChecked},
      name,
      id,
      disabled,
      ...attributes,
    };

    // 回调函数
    const callbacks = {onChange, onClick};

    return (
      <label className={classes}>
        <input
          {...props}
          {...callbacks}
        />
        {label || children}
        <span />
      </label>
    );
  }
}

Options.propTypes = {
  /** 选框文本 */
  label: PropTypes.string,
  /** 选框表单名称 */
  name: PropTypes.node,
  /** 选框表单ID */
  id: PropTypes.node,
  /** 受控状态下，是否勾选选框 */
  checked: PropTypes.bool,
  /** 非受控状态下，默认勾选状态 */
  defaultChecked: PropTypes.bool,
  /** 设置是否禁用选框 */
  disabled: PropTypes.bool,
  /** 是否以加粗样式显示 */
  isBold: PropTypes.bool,
  /** 是否以实心样式显示 */
  isSolid: PropTypes.bool,
  /** 是否将组件设置为受控组件 */
  isControlled: PropTypes.bool,
  /** 选中状态发生改变时触发 */
  onChange: PropTypes.func,
  /** 选框点击时触发 */
  onClick: PropTypes.func,
  /** 用户自定义修饰符 */
  className: PropTypes.string,
  /** 用户自定义属性 */
  attributes: PropTypes.object,
  /** 定位表单元素 */
  isFormElement: PropTypes.bool,
};

Options.defaultProps = {
  label: undefined,
  name: undefined,
  id: undefined,
  checked: false,
  defaultChecked: false,
  disabled: false,
  isControlled: false,
  isBold: false,
  isSolid: false,
  onChange: undefined,
  onClick: undefined,
  className: '',
  attributes: {},
  isFormElement: false,
};

export default Options;

