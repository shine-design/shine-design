/**
 * @Component Modal
 * @Type 模态框
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2019-06-05 18:01
 */
import React, {PureComponent} from 'react';
// import _ from 'lodash';
import classNames from 'classnames';
import * as PropTypes from 'prop-types';
import './style/index.scss';
// import {classPrefix} from 'variables';

class Modal extends PureComponent {

  render() {
    const {className, attributes, children} = this.props;

    /** 计算样式 */
    const classes = classNames(
      className,
    );

    return (
      <div
        className={classes}
        {...attributes}
      >
        {children}
      </div>
    );
  }
}

Modal.propTypes = {
  /** 是否显示模态框 */
  isOpen: PropTypes.bool,
  /** 模态框尺寸 small - 小尺寸 / large - 大尺寸 / default - 默认尺寸 */
  size: PropTypes.oneOf(['small', 'large', 'default']),
  /** 模态框标题 */
  title: PropTypes.node,
  /** 模态框自定义底部行为，该属性会覆盖默认 确认 / 取消 按钮 */
  actions: PropTypes.array,
  /** 生命周期函数，打开模态框前触发 */
  onBeforeOpen: PropTypes.func,
  /** 生命周期函数，打开模态框后触发 */
  onOpened: PropTypes.func,
  /** 生命周期函数，关闭模态框前触发 */
  onBeforeClose: PropTypes.func,
  /** 生命周期函数，关闭模态框后触发 */
  onClosed: PropTypes.func,
  /** 用户自定义修饰符 */
  className: PropTypes.string,
  /** 用户自定义属性 */
  attributes: PropTypes.object,
};

Modal.defaultProps = {
  isOpen: false,
  size: 'default',
  title: '',
  actions: [],
  onBeforeOpen: undefined,
  onOpened: undefined,
  onBeforeClose: undefined,
  onClosed: undefined,
  className: '',
  attributes: {},
};

export default Modal
