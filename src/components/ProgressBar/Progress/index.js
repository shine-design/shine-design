/**
 * @Component Progress
 * @Type 进度条组件
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2019-03-25 18:50
 */
import React, {PureComponent} from 'react';
// import _ from 'lodash';
import classNames from 'classnames';
import * as PropTypes from 'prop-types';
import {classPrefix} from 'variables';

class Progress extends PureComponent {

  render() {
    const {className, attributes} = this.props;

    /** 计算样式 */
    const classes = classNames(
      `${classPrefix}-progress`,
      className,
    );
    return (
      <div
        className={classes}
        {...attributes}
      >
        This is a demo
      </div>
    );
  }
}

Progress.propTypes = {
  /** 用户自定义修饰符 */
  className: PropTypes.string,
  /** 用户自定义属性 */
  attributes: PropTypes.object,
};

Progress.defaultProps = {
  className: '',
  attributes: {},
};

export default Progress;
