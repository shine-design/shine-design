/**
 * @Component Form.Verifier
 * @Type 表单项组件
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2019-05-04 18:03
 */
import _ from 'lodash';
import React, {PureComponent} from 'react';
import classNames from 'classnames';
import * as PropTypes from 'prop-types';
import {classPrefix} from 'variables';

const REFS = [];

class Verifier extends PureComponent {

  getChildContext = () => _.pick(this.props, ['errorState', 'successState', 'errorMsg']);

  /** 强制获取表单校验结果 */
  onForceValidate = () => _.isEmpty(REFS) || _.map(REFS, refName => this.refs[refName]._onForceValidate());

  render() {
    const {isHighlight, isValidate, children} = this.props;
    let _children = null;

    /** 计算样式 */
    const classes = classNames({[`${classPrefix}-form--state`]: isHighlight});

    if (!_.isUndefined(children)) {
      if (_.isArray(children)) {
        // 数组类型 Children：针对多元素 DOM
        _children = _.map(children, (child, index) => {
          if (React.isValidElement(child) && child.props.isFormItem) {
            REFS.push(`formItem-${index}`);
            return React.cloneElement(child, {isValidate, key: index, ref: `formItem-${index}`});
          }
          return child;
        });
      } else {
        // 单个元素
        REFS.push('formItem');
        _children = React.cloneElement(children, {isValidate, ref: 'formItem'});
      }
    }

    return isHighlight ? <div className={classes}>{_children}</div> : _children;
  }
}

/* eslint-disable react/no-unused-prop-types */
Verifier.propTypes = {
  /** 校验失败提示状态颜色，目前支持 danger 和 warning */
  errorState: PropTypes.string,
  /** 是否展示表单通过状态 */
  successState: PropTypes.bool,
  /** 全局配置，配置错误提示文字，支持传入对象对默认提示文字进行覆盖 */
  errorMsg: PropTypes.object,
  /** 表单元素是否高亮显示错误提示 */
  isHighlight: PropTypes.bool,
  /** 是否开启自动表单校验 */
  isValidate: PropTypes.bool,
};

Verifier.defaultProps = {
  errorState: 'danger',
  successState: true,
  errorMsg: {},
  isHighlight: false,
  isValidate: true,
};

Verifier.childContextTypes = {
  /** 校验失败提示状态颜色 */
  errorState: PropTypes.string,
  /** 校验通过提示状态颜色 */
  successState: PropTypes.bool,
  /** 配置错误提示文字，支持传入 {ruleName : message} 对默认提示文字进行覆盖 */
  errorMsg: PropTypes.object,
};

export default Verifier;
