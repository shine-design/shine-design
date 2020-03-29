/**
 * OptionsGroup
 * 选项组
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2020-03-29 20:33
 */

import _ from 'lodash';
import React, {PureComponent} from 'react';
import classNames from 'classnames';
import * as PropTypes from 'prop-types';
import {classPrefix} from 'variables';
import {buildDefaultRules, runRegExp, VALIDATION_RULES} from 'validations';
import uuid from 'uuid/v1';
import Checkbox from '../Checkbox';
import Radio from '../Radio';

const COMPONENT_MAP = {
  radio: Radio,
  checkbox: Checkbox,
};

const DEFAULT_RULE = _.keys(VALIDATION_RULES);

class OptionsGroup extends PureComponent {
  state = {
    selected: [],
  };

  onValidate = isFullResult => {
    const value = this.state.selected;
    const {rules} = this.props;
    const resultList = [];

    // 移除 rules 中为false 的规则
    _.omitBy(rules, item => _.isBoolean(item) && !item);
    // 依次校验家表单规则
    _.mapValues(rules, (rule, key) => {
      let _result = true;
      // 预设校验规则
      if (_.includes(DEFAULT_RULE, key)) {
        if (_.isEqual(key, 'required')) {
          _result = _.isEmpty(value);
        } else {
          const buildRules = buildDefaultRules(key, rule);

          if (_.isRegExp(buildRules)) {
            _result = runRegExp(buildRules, value);
          }

          if (_.isFunction(buildRules)) {
            _result = buildRules(value, rule);
          }
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

  _onChange = (checked, value) => {
    const {_onValidateResult} = this.props;
    if (_.isFunction(_onValidateResult)) _onValidateResult(this.onValidate());
    this.onCheckChange(checked, value);
  };

  onCheckChange = (checked, value) => {
    const {onChange} = this.props;
    const {selected} = this.state;
    let newSelected = _.cloneDeep(selected);

    if (checked) {
      newSelected.push(value);
    } else {
      newSelected = _.remove(newSelected, item => item !== value);
    }
    this.setState({selected: newSelected});
    _.isFunction(onChange) && onChange(newSelected);
  };

  render() {
    const {options, isInline, value, type, isControlled} = this.props;
    const {isValidate, rules} = this.props;
    const {className, attributes} = this.props;

    /** 计算样式 */
    const classes = classNames(
      `${classPrefix}-${type}-${isInline ? 'inline' : 'list'}`,
      className,
    );

    const Component = COMPONENT_MAP[type];
    const name = uuid();

    return (
      <div className={classes} {...attributes}>
        {
          _.isArray(options)
          && _.map(options, (opt, index) => (
            <Component
              key={index}
              isControlled={isControlled}
              {
                ...isControlled
                  ? {checked: _.includes(value, opt.value)}
                  : {defaultChecked: _.includes(value, opt.value)}
              }
              {...opt}
              name={opt.name || name}
              onChange={
                (isValidate && !_.isUndefined(rules))
                  ? e => this._onChange(e.target.checked, opt.value)
                  : e => this.onCheckChange(e.target.checked, opt.value)
              }
            />
          ))}
      </div>
    );
  }
}

OptionsGroup.propTypes = {
  /** 选框列表，参数见 Checkbox 或 Radio 组件 */
  options: PropTypes.array,
  /** 选框组是否以行内样式展示 */
  isInline: PropTypes.bool,
  /** 当前选框组选中值 */
  value: PropTypes.array,
  /** 是否将组件设置为受控组件 */
  isControlled: PropTypes.bool,
  /** 定位表单元素 */
  isFormElement: PropTypes.bool,
};

OptionsGroup.defaultProps = {
  options: [],
  isInline: false,
  value: [],
  isControlled: true,
  isFormElement: true,
};

export default OptionsGroup;
