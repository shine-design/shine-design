/**
 * @Component Switch
 * @Type 开关组件
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2019-08-20 20:50
 */
import _ from 'lodash';
import React, {PureComponent} from 'react';
import classNames from 'classnames';
import * as PropTypes from 'prop-types';
import {classPrefix} from 'variables';
import {buildDefaultRules, runRegExp, VALIDATION_RULES} from "validations";

const DEFAULT_RULE = _.keys(VALIDATION_RULES);

class Switch extends PureComponent {

  onValidate = isFullResult => {
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
  };

  _onChange = event => {
    const {onChange, _onValidateResult} = this.props;
    if (event.reactComposition.composition === false) {
      if (_.isFunction(_onValidateResult)) _onValidateResult(this.onValidate());
      if (_.isFunction(onChange)) onChange(event);
    }
  };

  render() {
    const {isChecked, name, id, isDisabled, isControlled, isShowIcon} = this.props;
    const {bgColor, outlineColor, size} = this.props;
    const {onChange} = this.props;
    const {isValidate, rules} = this.props;
    const {className, attributes} = this.props;

    /** 计算样式 */
    const classes = classNames(
      `${classPrefix}-switch`,
      {
        [`${classPrefix}-switch--icon`]: isShowIcon,
        [`${classPrefix}-switch--${bgColor || outlineColor}`]: _.isString(bgColor) || _.isString(outlineColor),
        [`${classPrefix}-switch--outline`]: _.isString(outlineColor),
        [`${classPrefix}-switch--${size}`]: _.isString(size),
      },
      className,
    );

    // 开关属性配置
    const props = {
      type: 'checkbox',
      ...isControlled ? {checked: isChecked} : {defaultChecked: isChecked},
      name,
      id,
      disabled: isDisabled,
      ...attributes,
    };

    // 回调函数
    const callbacks = {
      onChange: (isValidate && !_.isUndefined(rules)) ? this._onChange : onChange,
    };

    return (
      <span className={classes}>
        <label>
          <input {...props} {...callbacks} />
          <span />
        </label>
      </span>
    );
  }
}

Switch.propTypes = {
  /** 开关表单名称 */
  name: PropTypes.node,
  /** 开关表单ID */
  id: PropTypes.node,
  /** 是否打开开关 */
  isChecked: PropTypes.bool,
  /** 设置是否禁用开关 */
  isDisabled: PropTypes.bool,
  /** 是否显示开关图标 */
  isShowIcon: PropTypes.bool,
  /** 是否将组件设置为受控组件 */
  isControlled: PropTypes.bool,
  /** 设置开关尺寸，支持 sm：小尺寸 / lg：大尺寸 */
  size: PropTypes.oneOf(['sm', 'lg']),
  /** 表单校验规则 */
  rules: PropTypes.object,
  /** 表单校验失败提示文字 */
  errorMsg: PropTypes.object,
  /** 输入框内容发生改变时触发 */
  onChange: PropTypes.func,
  /** 用户自定义修饰符 */
  className: PropTypes.string,
  /** 用户自定义属性 */
  attributes: PropTypes.object,
  /** 定位表单元素 */
  isFormElement: PropTypes.bool
};

Switch.defaultProps = {
  name: undefined,
  id: undefined,
  isChecked: false,
  isDisabled: false,
  isControlled: false,
  isShowIcon: false,
  size: 'default',
  rules: undefined,
  errorMsg: undefined,
  onChange: undefined,
  className: '',
  attributes: {},
  isFormElement: true
};

export default Switch;
