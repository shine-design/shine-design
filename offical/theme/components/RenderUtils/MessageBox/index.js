/**
 * 消息提示框
 * 用于在 MDX 页面上展示一个消息提醒
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2019-03-23 15:47
 */
import React, {Component} from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';
import './style.less';


class MessageBox extends Component {

  render() {
    const {messageType, title, message, children} = this.props;
    let icon = '';

    switch (messageType) {
      case 'success':
        icon = 'green';
        break;
      case 'danger':
        icon = 'red';
        break;
      case 'info':
        icon = 'blue-light';
        break;
      default:
        icon = '';
    }
    const classes = classNames('note', 'js-note', icon);

    return (
      <div className={classes}>
        <h4 className="note-title"> {title} </h4>
        <p className="note-description">  {message || children} </p>
      </div>
    );
  }
}

MessageBox.propTypes = {
  /** 消息类型 */
  messageType: PropTypes.oneOf(['info', 'warning', 'success', 'danger']),
  /** 消息标题 */
  title: PropTypes.node,
  /** 消息正文 */
  message: PropTypes.node,
};

MessageBox.defaultProps = {
  messageType: 'warning',
  title: '小贴士',
  message: '',
};

export default MessageBox;
