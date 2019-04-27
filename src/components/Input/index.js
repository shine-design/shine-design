/**
 * @Component Input
 * @Type 输入框组件
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2019-04-27 13:25
 */
import React, {PureComponent} from 'react';
import classNames from 'classnames';
import * as PropTypes from 'prop-types';
import './style/index.scss';

class Input extends PureComponent {

  render() {
    const {defaultValue, isDisabled, isReadOnly, id, type, value, name, placeholder} = this.props;
    // const {addonAfter, addonBefore, prefix, suffix, size} = this.props;
    // const {onChange, onBlur, onClick, onPressEnter} = this.props;
    const {className, attributes} = this.props;

    /** 计算样式 */
    const classes = classNames(
      className,
    );

    // Input 自身属性配置
    const commonProps = {
      defaultValue,
      value,
      placeholder,
      name,
      type,
      id,
      disabled: isDisabled,
      readOnly: isReadOnly,
    };


    return (
      <input
        {...commonProps}
        className={classes}
        {...attributes}
      />
    );
  }
}

Input.propTypes = {
  /** 默认值，仅展示时生效 */
  defaultValue: PropTypes.node,
  /** 输入框值 */
  value: PropTypes.node,
  /** 输入框名称 */
  name: PropTypes.node,
  /** 输入框占位符，当输入框无内容时展示 */
  placeholder: PropTypes.node,
  /** 输入框ID */
  id: PropTypes.node,
  /** 设置是否禁用输入框 */
  isDisabled: PropTypes.bool,
  /** 设置是否只读输入框 */
  isReadOnly: PropTypes.bool,
  /** 设置输入框类型，支持类型有text：文本 / password：密码 / email：邮箱 / url：网址 / color：颜色选择 / date：日期 */
  type: PropTypes.string.oneOf(['text', 'password', 'email', 'number', 'url', 'color', 'date']),
  /** 用户自定义修饰符 */
  className: PropTypes.string,
  /** 用户自定义属性 */
  attributes: PropTypes.object,
};

Input.defaultProps = {
  defaultValue: '',
  value: '',
  placeholder: undefined,
  name: undefined,
  id: undefined,
  isDisabled: false,
  isReadOnly: false,
  type: 'text',
  className: '',
  attributes: {},
};

export default Input;
