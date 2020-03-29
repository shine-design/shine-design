/**
 * @Component Checkbox.Group
 * @Type 单选组组件
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2020-03-29 15:33
 */
import _ from 'lodash';
import React, {PureComponent} from 'react';
import classNames from 'classnames';
import * as PropTypes from 'prop-types';
import {classPrefix} from 'variables';
import Checkbox from "../index";

class CheckboxGroup extends PureComponent {
  render() {
    const {options, isInline} = this.props;
    const {className, attributes} = this.props;

    /** 计算样式 */
    const classes = classNames(
      `${classPrefix}-checkbox-${isInline ? 'inline' : 'list'}`,
      className,
    );
    return (
      <div className={classes} {...attributes}>
        {_.isArray(options) && _.map(options, (opt, index) => <Checkbox key={index} {...opt} />)}
      </div>
    );
  }
}

CheckboxGroup.propTypes = {
  /** 复选框列表，参数见 Checkbox 组件 */
  options: PropTypes.array,
  /** 复选框组是否以行内样式展示 */
  isInline: PropTypes.bool,
  /** 当前复选框组选中值 */
  value: PropTypes.array,
  /** 是否将组件设置为受控组件 */
  isControlled: PropTypes.bool,
  /** 定位表单元素 */
  isFormElement: PropTypes.bool,
};

CheckboxGroup.defaultProps = {
  options: [],
  isInline: false,
  value: [],
  isControlled: false,
  isFormElement: true,
};

export default CheckboxGroup;
