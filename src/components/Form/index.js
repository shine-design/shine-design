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

class Form extends PureComponent {

  render() {
    const {className, attributes, children} = this.props;


    /** 计算样式 */
    const classes = classNames(
      `${classPrefix}-form`,
      className,
    );
    return (
      <form
        className={classes}
        {...attributes}
      >
        {children}
      </form>
    );
  }
}

Form.propTypes = {
  /** 用户自定义修饰符 */
  className: PropTypes.string,
  /** 用户自定义属性 */
  attributes: PropTypes.object,
};

Form.defaultProps = {
  className: '',
  attributes: {},
};

/** 表单项组件 */
Form.Item = Item;
/** 表单校验组件 */
Form.Verifier = Verifier;

export default Form;
