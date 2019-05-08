/**
 * @Component Input
 * @Type 输入框组件
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2019-04-27 13:25
 */
import _ from 'lodash';
import React, {PureComponent} from 'react';
import classNames from 'classnames';
import * as PropTypes from 'prop-types';
import {classPrefix} from 'variables';
import './style/index.scss';

const DEFAULT_RULE = ['required', 'minLen', 'maxLen'];

class Input extends PureComponent {
  constructor() {
    super();

    this.onValidate = this.onValidate.bind(this);
  }

  onValidate() {
    const {value} = this.textInput;
    const {rules, errorMsg} = this.props;
    
    _.isObject(rules) && _.mapValues(rules, (rule, key) => {
      // 预设校验规则
      if (_.includes(DEFAULT_RULE, key)) {
        // TODO: 预设校验
      }

      // Function：自定义校验规则,返回值不为 true 则校验不通过。
      if (_.isFunction(rule)) {
        // TODO：函数校验
        console.log(rule(value));
      }

      // RegExp：自定义校验规则，使用正则进行匹配，不符合则校验不通过
      if (_.isRegExp(rule)) {
        // TODO:正则校验
      }

    });
    return false;
  }

  render() {
    const {defaultValue, isDisabled, isReadOnly, id, type, value, name, placeholder} = this.props;
    const {size, inputStyle} = this.props;
    const {onChange, onBlur, onClick} = this.props;
    const {className, attributes} = this.props;

    /** 计算样式 */
    const classes = classNames(
      `${classPrefix}-form-control`,
      {
        [`${classPrefix}-form-control-${size}`]: _.includes(['small', 'large'], size),
        [`${classPrefix}-form-control--${inputStyle}`]: _.includes(['pill', 'square'], inputStyle),
      },
      className,
    );

    // 回调函数
    const callbacks = {onChange, onBlur, onClick};

    // 输入框属性配置
    const props = {
      defaultValue,
      value,
      placeholder,
      name,
      type,
      id,
      disabled: isDisabled,
      readOnly: isReadOnly,
      className: classes,
      ...callbacks,
      ...attributes,
    };

    return <input ref={(input) => {
      this.textInput = input;
    }} {...props} />;
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
  /** 设置输入框类型 */
  type: PropTypes.string,
  /** 设置输入框尺寸，支持 default：默认 / small：小尺寸 / large：大尺寸 */
  size: PropTypes.oneOf(['default', 'small', 'large']),
  /** 输入框样式，支持 default：圆角矩形 / pill：椭圆形矩形 / square：直角矩形 */
  inputStyle: PropTypes.oneOf(['default', 'pill', 'square']),
  /** 输入框内容发生改变时触发 */
  onChange: PropTypes.func,
  /** 输入框失去焦点时触发 */
  onBlur: PropTypes.func,
  /** 输入框被点击时触发 */
  onClick: PropTypes.func,
  /** 用户自定义修饰符 */
  className: PropTypes.string,
  /** 用户自定义属性 */
  attributes: PropTypes.object,
};

Input.defaultProps = {
  defaultValue: undefined,
  value: undefined,
  placeholder: undefined,
  name: undefined,
  id: undefined,
  isDisabled: false,
  isReadOnly: false,
  type: 'text',
  size: 'default',
  inputStyle: 'default',
  onChange: undefined,
  onBlur: undefined,
  onClick: undefined,
  className: '',
  attributes: {},
};

export default Input;
