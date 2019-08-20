/**
 * @Component Modal
 * @Type 模态框
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2019-06-05 18:01
 */
import React, {Fragment, PureComponent} from 'react';
import _ from 'lodash';
import {classPrefix} from 'variables';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';
import jQuery from 'jquery';
import Button from '../Button';
import 'bootstrap/js/src/modal';
import './style/index.scss';

class Modal extends PureComponent {

  componentDidMount() {
    this.triggerModal(this.props.isOpen);
  }

  componentWillReceiveProps(nextProps) {
    this.triggerModal(nextProps.isOpen);
  }

  triggerModal = isOpen => jQuery(this.modal).modal(isOpen ? 'show' : 'hide');

  onDefaultConfirm = () => {
    const {onConfirm} = this.props;
    if (_.isFunction(onConfirm)) {
      onConfirm();
      this.triggerModal(false);
    }
  };

  onDefaultClose = () => {
    const {onClose} = this.props;
    if (_.isFunction(onClose)) {
      onClose();
    }
    else {
      this.triggerModal(false);
    }
  };

  render() {
    const {title, size, confirmLabel, closeLabel, isCentered, isCloseable, actions, customSize, className, attributes, children} = this.props;

    /** 计算样式 */
    const classes = classNames(
      `${classPrefix}-modal`,
      'modal',
      'fade',
      className,
    );

    /** 弹出框样式 */
    const dialogClassNames = classNames(
      'modal-dialog',
      {
        [`modal-${size}`]: _.isString(size),
        'modal-dialog-centered': isCentered,
      },
    );

    const operations = _.isArray(actions) && actions.length
      ? actions
      : [
        <Button bgColor="primary" onClick={this.onDefaultConfirm}>{confirmLabel}</Button>,
        <Button bgColor="secondary" onClick={this.onDefaultClose}>{closeLabel}</Button>,
      ];

    return (
      <div
        ref={modal => {
          this.modal = modal
        }}
        className={classes}
        tabIndex="-1"
        role="dialog"
        aria-hidden="true"
        {...attributes}
      >
        <div className={dialogClassNames} role="document" style={{maxWidth: customSize}}>
          <div className="modal-content">
            {
              (!_.isUndefined(title) || isCloseable) && (
                <div className="modal-header">
                  {
                    !_.isUndefined(title) && <h5 className="modal-title">{title}</h5>
                  }
                  {
                    isCloseable && (
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    )
                  }
                </div>
              )
            }
            <div className="modal-body">
              {children}
            </div>
            {
              _.isArray(operations) && operations.length !== 0
              && (
                <div className="modal-footer">
                  {_.map(operations, (action, index) => <Fragment key={index}>{action}</Fragment>)}
                </div>
              )
            }
          </div>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  /** 是否显示模态框 */
  isOpen: PropTypes.bool,
  /** 模态框尺寸 小尺寸:sm，大尺寸:lg，默认:normal */
  size: PropTypes.oneOf(['normal', 'sm', 'lg']),
  /** 模态框标题 */
  title: PropTypes.node,
  /** 确认按钮文字提示 */
  confirmLabel: PropTypes.string,
  /** 取消按钮文字提示 */
  closeLabel: PropTypes.string,
  /** 是否居中显示模态框 */
  isCentered: PropTypes.bool,
  /** 是否支持关闭模态框 */
  isCloseable: PropTypes.bool,
  /** 模态框自定义底部行为，该属性会覆盖默认 确认 / 取消 按钮 */
  actions: PropTypes.array,
  /** 用户点击确认按钮时触发，当 action 属性不为空时失效 */
  onConfirm: PropTypes.func,
  /** 用户点击取消按钮时触发，当 action 属性不为空时失效 */
  onClose: PropTypes.func,
  /** 用户自定义修饰符 */
  className: PropTypes.string,
  /** 用户自定义属性 */
  attributes: PropTypes.object,
};

Modal.defaultProps = {
  isOpen: false,
  size: 'normal',
  title: '',
  confirmLabel: '确认',
  closeLabel: '取消',
  isCentered: false,
  isCloseable: true,
  actions: [],
  onConfirm: undefined,
  onClose: undefined,
  className: '',
  attributes: {},
};

export default Modal
