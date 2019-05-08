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

import './style/index.scss';

/** 合法子元素类型名称 */
const LEGAL_CHILDREN_TYPE = ['Input'];

class Item extends PureComponent {
  constructor() {
    super();

    this.onValidate = this.onValidate.bind(this);
  }

  state = {
    checkResult: undefined,
  };

  componentWillReceiveProps(nextProps) {
    if (!this.props._isValidate && nextProps._isValidate) {
      this.onValidate();
    }
    if (this.props._isValidate && !nextProps._isValidate) {
      // TODO:取消表单校验
    }
  }

  onValidate() {
    const {_isValidate} = this.props;
    const result =  this.refs.formElement.onValidate();
    console.log(result);
    this.setState({checkResult: this.context.errorState});

  }

  render() {
    const {label, helper, className, attributes, children} = this.props;
    const {checkResult} = this.state;
    const isLegalChild = React.isValidElement(children) && _.includes(LEGAL_CHILDREN_TYPE, children.type.name);
    const {id} = children.props;
    if (!isLegalChild) return null;

    // 生成标签ID：若当前设置了ID，则使用自定义，否则，使用 UUID 随机ID
    const htmlId = _.isUndefined(id) ? uuidv1() : id;
    const isValid = !_.isUndefined(checkResult);
    /** 计算样式 */
    const classes = classNames(
      `${classPrefix}-form__group`,
      {
        [`has-${checkResult}`]: isValid,
      },
      className,
    );

    const feedBackClass = `${classPrefix}-form-control-feedback`;

    return (
      <div className={classes} {...attributes}>
        {!_.isUndefined(label) && <label htmlFor={htmlId}>{label}</label>}
        {React.cloneElement(children, {id: htmlId, ref: 'formElement'})}
        {isValid && <div className={feedBackClass}>aaaa</div>}
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
  successState: PropTypes.string,
  /** 配置错误提示文字，支持传入 {ruleName : message} 对默认提示文字进行覆盖 */
  errorMsg: PropTypes.object,
};

export default Item;
