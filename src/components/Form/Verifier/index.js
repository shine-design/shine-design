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
import Item from '../Item';

// import './style/index.scss';

const ERROR_RULE_MESSAGE = {
  required: '当前字段不存在',
};


class Verifier extends PureComponent {
  constructor(props) {
    super(props);

    this.onExecFormValid = this.onExecFormValid.bind(this);
    this.onCancelFormValid = this.onCancelFormValid.bind(this);
  }

  state = {
    isValidate: false,
  };

  getChildContext() {
    const {errorState, successState, errorMsg} = this.props;

    return {errorState, successState, errorMsg};
  }

  componentDidMount(){
    this.onExecFormValid();
  }

  onExecFormValid() {
    this.setState({isValidate: true});
  }

  onCancelFormValid() {
    this.setState({isValidate: false});
  }

  render() {
    const {isHighlight, children} = this.props;
    let childrens = null;

    /** 计算样式 */
    const classes = classNames(
      {
        [`${classPrefix}-form--state`]: isHighlight,
      }
    );

    if (_.isArray(children)) {
      childrens = _.map(children, (child, index) => {
        if (React.isValidElement(child) && _.isEqual(child.type.name, 'Item')) {
          return React.cloneElement(child, {_isValidate: this.state.isValidate, key: index});
        }
        return child;
      });
    } else {
      childrens = React.cloneElement(children, {_isValidate: this.state.isValidate});
    }

    return isHighlight ? (
      <div className={classes}>
        {childrens}
      </div>
    ) : children;
  }
}

Verifier.propTypes = {
  /** 校验失败提示状态颜色 */
  errorState: PropTypes.string,
  /** 校验通过提示状态颜色 */
  successState: PropTypes.string,
  /** 配置错误提示文字，支持传入 {ruleName : message} 对默认提示文字进行覆盖 */
  errorMsg: PropTypes.object,
  /** 表单元素是否高亮显示错误提示 */
  isHighlight: PropTypes.bool,
};

Verifier.defaultProps = {
  errorState: 'danger',
  successState: 'success',
  errorMsg: {},
  isHighlight: false,
};

Verifier.childContextTypes = {
  /** 校验失败提示状态颜色 */
  errorState: PropTypes.string,
  /** 校验通过提示状态颜色 */
  successState: PropTypes.string,
  /** 配置错误提示文字，支持传入 {ruleName : message} 对默认提示文字进行覆盖 */
  errorMsg: PropTypes.object,
};

export default Verifier;
