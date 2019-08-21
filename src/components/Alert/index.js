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
import './style/index.scss';

class Alert extends PureComponent {

  render() {
    const {title, message, bgColor, outlineColor, alertStyle, iconProps, isCloseable, isAir, isDoubleOutline, onClose, className, attributes, children} = this.props;

    /** 计算样式 */
    const classes = classNames(
      'alert', `${classPrefix}-alert`, 'fade',
      {
        [`alert-${bgColor || outlineColor}`]: _.isString(bgColor) || _.isString(outlineColor),
        [`${classPrefix}-alert--outline`]: _.isString(outlineColor),
        [`${classPrefix}-alert--outline-2x`]: isDoubleOutline,
        [`${classPrefix}-alert--${alertStyle}`]: _.isString(alertStyle),
        [`${classPrefix}-alert--icon`]: !_.isUndefined(iconProps),
        'alert-dismissible': isCloseable,
        [`${classPrefix}-alert--air`]: isAir,
      },
      // isOpen ? 'show' : 'hide',
      'show',
      className,
    );

    const contentRender = (
      <Fragment>{!_.isUndefined(title) && <strong> {title} </strong>}{message || children}</Fragment>
    );

    const closeBtnRender = (
      <Fragment>
        {
          isCloseable
          && (
            <button
              type="button"
              className='close'
              data-dismiss="alert"
              aria-label="Close"
              onClick={_.isFunction(onClose) ? onClose : _.noop}
            />
          )
        }
      </Fragment>
    );


    return (
      <div
        className={classes}
        {...attributes}
      >
        {!_.isUndefined(iconProps) && <div className={`${classPrefix}-alert__icon`}><Icon {...iconProps} /></div>}
        {closeBtnRender}
        {!_.isUndefined(iconProps) ?
          <div className={`${classPrefix}-alert__text`}>{contentRender}</div> : contentRender}
      </div>
    );
  }
}

Alert.propTypes = {
  /** 警告提示标题 */
  title: PropTypes.string,
  /** 警告提示正文 */
  message: PropTypes.string,
  /** 警告提示背景色，该属性与 outlineColor 互斥 */
  bgColor: PropTypes.string,
  /** 警告提示前景色，该属性与 bgColor 互斥 */
  outlineColor: PropTypes.string,
  /** 警告提示边框样式，圆角矩形:normal，直角矩形:square */
  alertStyle: PropTypes.oneOf(['normal', 'square']),
  /** 是否允许关闭警告提示 */
  isCloseable: PropTypes.bool,
  /** 是否使用粗边框，当设置了 outlineColor 属性时生效 */
  isDoubleOutline: PropTypes.bool,
  /** Icon 组件配置参数，相关配置参考 Icon 组件 */
  iconProps: PropTypes.object,
  /** 关闭警告提示触发事件 */
  onClose: PropTypes.func,
  /** 用户自定义修饰符 */
  className: PropTypes.string,
  /** 用户自定义属性 */
  attributes: PropTypes.object,
};

Alert.defaultProps = {
  title: '',
  message: undefined,
  bgColor: undefined,
  outlineColor: undefined,
  alertStyle: 'normal',
  isCloseable: true,
  isDoubleOutline: false,
  iconProps: undefined,
  onClose: undefined,
  className: '',
  attributes: {},
};

export default Alert;
