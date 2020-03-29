/**
 * @Component Checkbox
 * @Type 复选框组件
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2020-03-22 11:47
 */
import _ from 'lodash';
import React, {PureComponent} from 'react';
import classNames from 'classnames';
import * as PropTypes from 'prop-types';
import {classPrefix} from 'variables';
import {buildDefaultRules, runRegExp, VALIDATION_RULES} from "validations";

const DEFAULT_RULE = _.keys(VALIDATION_RULES);

class Checkbox extends PureComponent {

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
    const {label, checked, defaultChecked, name, id, disabled, isControlled, isBold, isSolid, bgColor, isValidate, rules, onChange} = this.props;
    const {className, attributes, children} = this.props;
    /** 计算样式 */
    const classes = classNames(
      `${classPrefix}-checkbox`,
      {
        [`${classPrefix}-checkbox--${bgColor}`]: _.isString(bgColor),
        [`${classPrefix}-checkbox--disabled`]: disabled,
        [`${classPrefix}-checkbox--bold`]: isBold,
        [`${classPrefix}-checkbox--solid`]: isSolid,
      },
      className,
    );

    // 开关属性配置
    const props = {
      type: 'checkbox',
      ...isControlled ? {checked} : {defaultChecked},
      name,
      id,
      disabled,
      ...attributes,
    };

    // 回调函数
    const callbacks = {
      onChange: (isValidate && !_.isUndefined(rules)) ? this._onChange : onChange,
    };

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

Checkbox.propTypes = {
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
  isFormElement: PropTypes.bool,
};

Checkbox.defaultProps = {
  label: undefined,
  name: undefined,
  id: undefined,
  checked: false,
  defaultChecked: false,
  disabled: false,
  isControlled: false,
  isBold: false,
  isSolid: false,
  rules: undefined,
  errorMsg: undefined,
  onChange: undefined,
  className: '',
  attributes: {},
  isFormElement: true,
};

export default Checkbox;

