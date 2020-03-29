/**
 * @Component TextArea
 * @Type 文本域组件
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2019-05-02 21:55
 */
import _ from 'lodash';
import React, {PureComponent} from 'react';
import classNames from 'classnames';
import * as PropTypes from 'prop-types';
import {classPrefix} from 'variables';

class TextArea extends PureComponent {

  render() {
    const {defaultValue, isDisabled, isReadOnly, id, value, name, placeholder} = this.props;
    const {size, height} = this.props;
    const {onChange, onBlur, onClick} = this.props;
    const {className, attributes} = this.props;

    /** 计算样式 */
    const classes = classNames(
      `form-control`,
      `${classPrefix}-form-control`,
      {
        [`${classPrefix}-form-control-${size}`]: _.includes(['sm', 'lg'], size)
      },
      className,
    );

    // 回调函数
    const callbacks = {onChange, onBlur, onClick};

    // 计算样式
    const style = {
      ...height ? {height} : {},
      ...attributes.style || {},
    };

    // 文本域属性配置
    const props = {
      defaultValue,
      value,
      placeholder,
      name,
      id,
      style,
      disabled: isDisabled,
      readOnly: isReadOnly,
      className: classes,
      ...callbacks,
      ...attributes,
    };


    return <textarea {...props} />;
  }
}

TextArea.propTypes = {
  /** 默认值，仅展示时生效 */
  defaultValue: PropTypes.node,
  /** 文本域值 */
  value: PropTypes.node,
  /** 文本域名称 */
  name: PropTypes.node,
  /** 文本域占位符，当文本域无内容时展示 */
  placeholder: PropTypes.node,
  /** 文本域ID */
  id: PropTypes.node,
  /** 设置是否禁用文本域 */
  isDisabled: PropTypes.bool,
  /** 设置是否只读文本域 */
  isReadOnly: PropTypes.bool,
  /** 设置文本域尺寸，支持 sm：小尺寸 / lg：大尺寸 */
  size: PropTypes.oneOf(['sm', 'lg']),
  /** 文本框高度 */
  height: PropTypes.string,
  /** 文本域内容发生改变时触发 */
  onChange: PropTypes.func,
  /** 文本域失去焦点时触发 */
  onBlur: PropTypes.func,
  /** 文本域被点击时触发 */
  onClick: PropTypes.func,
  /** 用户自定义修饰符 */
  className: PropTypes.string,
  /** 用户自定义属性 */
  attributes: PropTypes.object,
};

TextArea.defaultProps = {
  defaultValue: undefined,
  value: undefined,
  placeholder: undefined,
  name: undefined,
  id: undefined,
  isDisabled: false,
  isReadOnly: false,
  size: 'default',
  height: '100px',
  onChange: undefined,
  onBlur: undefined,
  onClick: undefined,
  className: '',
  attributes: {},
};

export default TextArea;
