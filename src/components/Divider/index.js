/**
 * @Component Divider
 * @Type 分隔线
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2019-08-20 15:50
 */
import _ from 'lodash';
import React, {PureComponent} from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';
import {classPrefix} from 'variables';

class Divider extends PureComponent {

  render() {
    const {message, className, attributes} = this.props;

    /** 计算样式 */
    const classes = classNames(
      `${classPrefix}-divider`, className,
    );

    return (
      <div className={classes} {...attributes}>
        <span />
        {!_.isUndefined(message) && <span>{message}</span>}
        <span />
      </div>
    );
  }
}


Divider.propTypes = {
  /** 分隔符提示文字 */
  message: PropTypes.string,
  /** 用户自定义修饰符 */
  className: PropTypes.string,
  /** 用户自定义属性 */
  attributes: PropTypes.object,
};

Divider.defaultProps = {
  message: undefined,
  className: '',
  attributes: {},
};

export default Divider
