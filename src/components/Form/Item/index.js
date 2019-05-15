/**
 * @Component Form.Item
 * @Type 表单项组件
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2019-05-03 17:12
 */
import _ from 'lodash';
import React, {PureComponent} from 'react';
import classNames from 'classnames';
import * as PropTypes from 'prop-types';
import {classPrefix} from 'variables';
import uuidv1 from 'uuid/v1';
import {VALIDATION_MSG} from 'validations';

import './style/index.scss';

/** 合法子元素类型名称 */
const LEGAL_CHILDREN_TYPE = ['Input'];

class Item extends PureComponent {
  constructor() {
    super();

    this.onValidate = this.onValidate.bind(this);
    this._onValidateResult = this._onValidateResult.bind(this);
    this._onForceValidate = this._onForceValidate.bind(this);
  }

  state = {
    checkResult: undefined,
    feedBack: undefined,
    validResult: true,
  };

  onValidate(result) {
    const {refs, context} = this;
    const {errorMsg, rules} = refs.formElement.props;
    const _validationMsg = _.merge({}, VALIDATION_MSG, errorMsg);
    const validResult = _.isBoolean(result) && result;
    const renderMsg = () => {
      const msgHandler = _validationMsg[result];
      return _.isFunction(msgHandler) ? msgHandler(rules[result]) : msgHandler;
    };

    this.setState({
      checkResult: {error: context.errorState, success: context.successState ? 'success' : undefined},
      feedBack: validResult ? undefined : renderMsg(),
      validResult,
    });

  }

  _onForceValidate() {
    const {refs} = this;
    const {props: {name}, onValidate} = refs.formElement;
    if (!_.isUndefined(name)) {
      const result = onValidate(true);
      if (!_.isEqual(result, true)) this.onValidate(result[0]);
      return {[name]: result};
    }
    return true;
  }

  _onValidateResult(result) {
    this.onValidate(result);
  }

  render() {
    const {label, helper, className, attributes, children} = this.props;
    const {isValidate} = this.props;
    const {checkResult, feedBack, validResult} = this.state;
    const isLegalChild = React.isValidElement(children) && _.includes(LEGAL_CHILDREN_TYPE, children.type.name);
    const {id} = children.props;
    if (!isLegalChild) return null;

    // 生成标签ID：若当前设置了ID，则使用自定义，否则，使用 UUID 随机ID
    const htmlId = _.isUndefined(id) ? uuidv1() : id;
    const isValid = !_.isUndefined(checkResult);
    const state = _.isObject(checkResult) && (validResult ? checkResult.success : checkResult.error);

    /** 计算样式 */
    const classes = classNames(
      `${classPrefix}-form__group`,
      {
        [`has-${state}`]: isValid && _.isString(state),
      },
      className,
    );

    const feedBackClass = `${classPrefix}-form-control-feedback`;
    return (
      <div className={classes} {...attributes}>
        {!_.isUndefined(label) && <label htmlFor={htmlId}>{label}</label>}
        {React.cloneElement(children, {
          id: htmlId,
          ref: 'formElement',
          isValidate,
          _onValidateResult: this._onValidateResult,
        })}
        {isValid && feedBack && <div className={feedBackClass}>{feedBack}</div>}
        {!_.isUndefined(helper) && <span className="shine-form__help">{helper}</span>}
      </div>
    );
  }
}

Item.propTypes = {
  /** 表单项名称 */
  label: PropTypes.node,
  /** 帮助提示文字 */
  helper: PropTypes.node,
  /** 用户自定义修饰符 */
  className: PropTypes.string,
  /** 用户自定义属性 */
  attributes: PropTypes.object,
  children: PropTypes.element,
};

Item.defaultProps = {
  label: undefined,
  helper: undefined,
  className: '',
  attributes: {},
  children: undefined,
};

Item.contextTypes = {
  /** 校验失败提示状态颜色 */
  errorState: PropTypes.string,
  /** 校验通过提示状态颜色 */
  successState: PropTypes.bool,
  /** 配置错误提示文字，支持传入 {ruleName : message} 对默认提示文字进行覆盖 */
  errorMsg: PropTypes.object,
};

export default Item;
