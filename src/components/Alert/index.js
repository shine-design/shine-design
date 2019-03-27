/**
 * @Component Alert
 * @Type 警告提示
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2019-03-26 22:11
 */
import React, {PureComponent} from 'react';
import _ from 'lodash';
import classNames from 'classnames';
import * as PropTypes from 'prop-types';
import {classPrefix} from 'variables';

class Alert extends PureComponent {

  render() {
    const {title, message, className, attributes, children} = this.props;

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

Alert.propTypes = {
  /** 警告提示标题 */
  title: PropTypes.string,
  /** 警告提示正文 */
  message: PropTypes.string,
  /** 用户自定义修饰符 */
  className: PropTypes.string,
  /** 用户自定义属性 */
  attributes: PropTypes.object,
};

Alert.defaultProps = {
  title: '',
  message: '',
  className: '',
  attributes: {},
};

export default Alert;
