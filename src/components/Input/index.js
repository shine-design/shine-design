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
import reactComposition from 'react-composition';
import {classPrefix} from 'variables';
import {buildDefaultRules, runRegExp, VALIDATION_RULES} from 'validations';
import './style/index.scss';

const DEFAULT_RULE = _.keys(VALIDATION_RULES);

class Input extends PureComponent {
  constructor() {
    super();

    this.onValidate = this.onValidate.bind(this);
    this._onChange = this._onChange.bind(this);
  }

  onValidate(isFullResult) {
    const {value} = this.textInput;
    const {rules} = this.props;
    const resultList = [];
    // 移除 rules 中为false 的规则
    _.omitBy(rules, item => _.isBoolean(item) && !item);
    // 依次校验家表单规则
    _.mapValues(rules, (rule, key) => {
      let _result = true;
      // 预设校验规则
      if (_.includes(DEFAULT_RULE, key)) {
        const buildRules = buildDefaultRules(key, rule);

        if (_.isRegExp(buildRules)) {
          _result = runRegExp(buildRules, value);
        }

        if (_.isFunction(buildRules)) {
          _result = buildRules(value, rule);
        }
      }

      // Function：自定义校验规则,返回值不为 true 则校验不通过。
      if (_.isFunction(rule)) {
        _result = rule(value);
      }

      // RegExp：自定义校验规则，使用正则进行匹配，不符合则校验不通过
      if (_.isRegExp(rule)) {
        _result = runRegExp(rule, value);
      }

      if (!_result) resultList.push(key);
    });

    return _.isEmpty(resultList) || (isFullResult ? resultList : resultList[0]);
  }

  _onChange(event) {
    const {onChange, _onValidateResult} = this.props;
    if (event.reactComposition.composition === false) {
      if (_.isFunction(_onValidateResult)) _onValidateResult(this.onValidate());
      if (_.isFunction(onChange)) onChange(event);
    }
  }

  render() {
    const {defaultValue, isDisabled, isReadOnly, id, type, value, name, placeholder} = this.props;
    const {size, inputStyle, rules} = this.props;
    const {onChange, onBlur, onClick, onFocus, onInput} = this.props;
    const {className, attributes} = this.props;
    const {isValidate} = this.props;

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
    const callbacks = {
      onInput,
      onBlur,
      onClick,
      onFocus,
      onChange: (isValidate && !_.isUndefined(rules)) ? this._onChange : onChange,
    };

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
      ...attributes,
    };

    return (
      <input
        ref={(input) => {
          this.textInput = input;
        }}
        {...props}
        {...reactComposition(callbacks)}
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
  /** 设置输入框类型 */
  type: PropTypes.string,
  /** 设置输入框尺寸，支持 default：默认 / small：小尺寸 / large：大尺寸 */
  size: PropTypes.oneOf(['default', 'small', 'large']),
  /** 输入框样式，支持 default：圆角矩形 / pill：椭圆形矩形 / square：直角矩形 */
  inputStyle: PropTypes.oneOf(['default', 'pill', 'square']),
  /** 表单校验规则 */
  rules: PropTypes.object,
  /** 表单校验失败提示文字 */
  errorMsg: PropTypes.object,
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
  rules: undefined,
  errorMsg: undefined,
  onChange: undefined,
  onBlur: undefined,
  onClick: undefined,
  className: '',
  attributes: {},
};

export default Input;
