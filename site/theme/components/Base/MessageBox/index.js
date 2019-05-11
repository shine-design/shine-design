/**
 * 消息提示框
 * 用于在 MDX 页面上展示一个消息提醒
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2019-03-23 15:47
 */
import React, {Component} from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';


class MessageBox extends Component {

  render() {
    const {isOpen, messageType, isCloseable, closeAnimate, title, message, children} = this.props;

    const classes = classNames('alert', `alert-${messageType}`, {'alert-dismissible': isCloseable}, closeAnimate, {'show': isOpen});
    let icon = '';
    switch (messageType) {
      case 'success':
        icon = 'icon-check2';
        break;
      case 'danger':
        icon = 'icon-zap';
        break;
      case 'warning':
        icon = 'icon-alert-circle';
        break;
      case 'info':
        icon = 'icon-life-buoy2';
        break;
      default:
        icon = '';
    }

    return (
      <div className={classes} role="alert">
        <i className={icon}/>
        {
          isCloseable && (
            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
          )
        }
        <h4 className="fs-22">{title}</h4>
        <p>
          {message || children}
        </p>
      </div>
    );
  }
}

MessageBox.propTypes = {
  /** 消息类型 */
  messageType: PropTypes.oneOf(['info', 'warning', 'success', 'danger']),
  /** 是否默认显示 */
  isOpen: PropTypes.bool,
  /** 是否可关闭 */
  isCloseable: PropTypes.bool,
  /** 关闭动画类型 */
  closeAnimate: PropTypes.string,
  /** 消息标题 */
  title: PropTypes.node,
  /** 消息正文 */
  message: PropTypes.node,
};

MessageBox.defaultProps = {
  messageType: 'warning',
  closeAnimate: 'fade',
  isCloseable: true,
  isOpen: true,
  title: '小贴士',
  message: '',
};

export default MessageBox;
