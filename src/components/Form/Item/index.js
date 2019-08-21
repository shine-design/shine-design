/**
 * @Component Form.Item
 * @Type 表单项组件
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2019-05-03 17:12
 */
import _ from 'lodash';
import React, {Fragment, PureComponent} from 'react';
import classNames from 'classnames';
import * as PropTypes from 'prop-types';
import {classPrefix} from 'variables';
import uuidv1 from 'uuid/v1';
import {VALIDATION_MSG} from 'validations';
import {Col} from '../../Grid';

import './style/index.scss';

/** 合法子元素类型名称 */
const LEGAL_CHILDREN_TYPE = ['Input', 'Switch'];

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
    const {label, helper, isInline, labelCol, className, attributes, children} = this.props;
    const {isValidate} = this.props;
    const {checkResult, feedBack, validResult} = this.state;


    const isValid = !_.isUndefined(checkResult);
    const state = _.isObject(checkResult) && (validResult ? checkResult.success : checkResult.error);

    /** 计算样式 */
    const classes = classNames(
      `${classPrefix}-form__group`,
      'form-group',
      {
        [`has-${state}`]: isValid && _.isString(state),
        [`${classPrefix}-row`]: isInline,
      },

      className,
    );

    const labelClass = classNames(
      `${classPrefix}-form-control-label`,
      {
        [`${classPrefix}-col-${labelCol}`]: isInline,
        'col-form-label': isInline,
      },
    );

    const feedBackClass = `${classPrefix}-form-control-feedback`;
    return _.map(_.isArray(children) ? children : [children], (child, index) => {
      const isLegalChild = React.isValidElement(child) && _.includes(LEGAL_CHILDREN_TYPE, child.type.name);
      const {id} = isLegalChild && child.props;
      if (!isLegalChild) return null;
      // 生成标签ID：若当前设置了ID，则使用自定义，否则，使用 UUID 随机ID
      const htmlId = _.isUndefined(id) ? uuidv1() : id;

      const childRender = (
        <Fragment>
          {React.cloneElement(
            child,
            {
              id: htmlId,
              ref: 'formElement',
              isValidate,
              _onValidateResult: this._onValidateResult,
            },
          )}
          {isValid && feedBack && <div className={feedBackClass}>{feedBack}</div>}
          {!_.isUndefined(helper) && <span className="shine-form__help">{helper}</span>}
        </Fragment>
      );

      return (
        <div className={classes} {...attributes} key={index}>
          {!_.isUndefined(label) && <label htmlFor={htmlId} className={labelClass}>{label}</label>}
          {isInline ? <Col col={24 - labelCol}>{childRender}</Col> : childRender}
        </div>
      );
    });
  }
}

Item.propTypes = {
  /** 表单项名称 */
  label: PropTypes.node,
  /** 帮助提示文字 */
  helper: PropTypes.node,
  /** 是否以行间方式展示表单项 */
  isInline: PropTypes.bool,
  /** 分隔列格块数，当 isInline 为 true 时生效 */
  labelCol: PropTypes.number,
  /** 用户自定义修饰符 */
  className: PropTypes.string,
  /** 用户自定义属性 */
  attributes: PropTypes.object,
};

Item.defaultProps = {
  label: undefined,
  helper: undefined,
  isInline: false,
  labelCol: 3,
  className: '',
  attributes: {},
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
