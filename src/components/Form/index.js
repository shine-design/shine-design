/**
 * @Component Form
 * @Type 表单项组件
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2019-05-03 18:00
 */
import _ from 'lodash';
import React, {PureComponent} from 'react';
import classNames from 'classnames';
import * as PropTypes from 'prop-types';
import {classPrefix} from 'variables';
import Item from './Item';
import Verifier from './Verifier';

const REFS = [];

class Form extends PureComponent {
  constructor() {
    super();

    this._onSubmit = this._onSubmit.bind(this);
  }

  _onSubmit(event) {
    event.preventDefault(); // 兼容标准浏览器
    const {refs, props} = this;
    const {onSubmit, onSuccess, onError} = props;
    const results = [];
    if (!_.isEmpty(REFS)) {
      _.forEach(REFS, refName => {
        results.push(refs[refName].onForceValidate());
      });
    }
    const _errorList = [];

    _.forEach(results, result => {
      _.forEach(result, res => {
        if (!_.isBoolean(res[_.keys(res)[0]])) {
          _errorList.push(res);
        }
      })
    });

    const isPassed = _.isEmpty(_errorList);
    // eslint-disable-next-line no-unused-expressions
    _.isFunction(onSubmit) && onSubmit(event, _errorList);
    // eslint-disable-next-line no-unused-expressions
    isPassed ? _.isFunction(onSuccess) && onSuccess(event) : _.isFunction(onError) && onError(event, _errorList);
  }

  render() {
    const {className, attributes, children} = this.props;
    let _children = [];
    /** 计算样式 */
    const classes = classNames(
      `${classPrefix}-form`,
      className,
    );

    if (!_.isUndefined(children)) {
      if (_.isArray(children)) {
        _children = _.map(children, (child, index) => {
          if (child.type.name === 'Verifier') {
            REFS.push(`verifierItem-${index}`);
            return React.cloneElement(child, {ref: `verifierItem-${index}`, key: index})
          }
          return child;
        });
      }
      else if (_.isEqual(children.type.name, 'Verifier')) {
        _children = React.cloneElement(children, {ref: `verifierItem`});
      }
      else {
        _children = children;
      }
    }

    return (
      <form
        className={classes}
        onSubmit={this._onSubmit}
        {...attributes}
      >
        {_children}
      </form>
    );
  }
}

Form.propTypes = {
  /** 表单提交回调函数，无论表单校验是否通过均会触发，第一个参数为提交事件，第二个参数为校验结果 */
  onSubmit: PropTypes.func,
  /** 表单校验通过回调函数，当表单提交且校验通过时触发该函数，第一个参数为提交事件 */
  onSuccess: PropTypes.func,
  /** 表单校验失败回调函数，当表单提交且校验失败时触发该函数，第一个参数为提交事件，第二个参数为校验结果 */
  onError: PropTypes.func,
  /** 用户自定义修饰符 */
  className: PropTypes.string,
  /** 用户自定义属性 */
  attributes: PropTypes.object,
};

Form.defaultProps = {
  onSubmit: undefined,
  onSuccess: undefined,
  onError: undefined,
  className: '',
  attributes: {},
};

/** 表单项组件 */
Form.Item = Item;
/** 表单校验组件 */
Form.Verifier = Verifier;

export default Form;
