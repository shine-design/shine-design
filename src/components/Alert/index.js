/**
 * @Component Alert
 * @Type 警告提示
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2019-03-26 22:11
 */
import _ from 'lodash';
import React, {Fragment, PureComponent} from 'react';
import classNames from 'classnames';
import * as PropTypes from 'prop-types';
import {classPrefix} from 'variables';
import Icon from '../Icon';
import 'bootstrap/js/src/alert';

class Alert extends PureComponent {

  render() {
    // 基础配置
    const {title, message, messageRenderer, bgColor, iconProps, iconName, onClose} = this.props;
    // 布尔值
    const {isOutline, isSolid, isBold, isElevate, isCloseable, isOpen} = this.props;
    // 通用配置
    const {className, attributes, children} = this.props;

    /** 计算样式 */
    const classes = classNames(
      'alert', `${classPrefix}-alert`, 'fade',
      {
        [`alert-${isOutline ? 'outline-' : ''}${isSolid ? 'solid-' : ''}${bgColor}`]: _.isString(bgColor),
        'alert-elevate': isElevate,
        'alert-bold': isBold || isSolid,
      },
      isOpen ? 'show' : 'hide',
      // 'show',
      className,
    );

    const closeBtnRender = (
      <Fragment>
        {
          isCloseable
          && (
            <div className="alert-close">
              <button
                type="button"
                className='close'
                data-dismiss="alert"
                aria-label="Close"
                onClick={_.isFunction(onClose) ? onClose : _.noop}
              >
                <span aria-hidden="true"><Icon source="line-awesome" iconName="close"/></span>
              </button>
            </div>
          )
        }
      </Fragment>
    );


    return (
      <div
        className={classes}
        {...attributes}
      >
        {
          (!_.isUndefined(iconProps) || _.isString(iconName))
          && <div className="alert-icon"><Icon iconName={iconName} {...iconProps} /></div>
        }
        <div className="alert-text">
          {title && <h4 className="alert-heading">{title}</h4>}
          {message || children}
          {messageRenderer && messageRenderer(message)}
        </div>
        {closeBtnRender}
      </div>
    );
  }
}

Alert.propTypes = {
  /** 警告提示标题 */
  title: PropTypes.string,
  /** 警告提示正文 */
  message: PropTypes.string,
  /** 自定义正文渲染内容 */
  messageRenderer: PropTypes.func,
  /** 警告提示背景色 */
  bgColor: PropTypes.string,
  /** 是否以轮廓色显示警告提示，该属性与 isSolid 互斥 */
  isOutline: PropTypes.bool,
  /** 是否以实心色显示警告提示，该属性与 isOutline 互斥 */
  isSolid: PropTypes.bool,
  /** 是否显示立体感 */
  isElevate: PropTypes.bool,
  /** 是否字体加粗 */
  isBold: PropTypes.bool,
  /** 警告提示边框样式，圆角矩形:normal，直角矩形:square */
  alertStyle: PropTypes.oneOf(['normal', 'square']),
  /** 是否允许关闭警告提示 */
  isCloseable: PropTypes.bool,
  /** Icon 组件配置参数，相关配置参考 Icon 组件 */
  iconProps: PropTypes.object,
  /** Icon 名称 */
  iconName: PropTypes.string,
  /** 关闭警告提示触发事件 */
  onClose: PropTypes.func,
  /** 用户自定义修饰符 */
  className: PropTypes.string,
  /** 用户自定义属性 */
  attributes: PropTypes.object,
};

Alert.defaultProps = {
  title: undefined,
  message: undefined,
  messageRenderer: undefined,
  bgColor: undefined,
  isOutline: false,
  isSolid: false,
  isElevate: false,
  isBold: false,
  alertStyle: 'normal',
  isCloseable: false,
  iconProps: undefined,
  iconName: undefined,
  onClose: undefined,
  className: '',
  attributes: {},
};

export default Alert;
