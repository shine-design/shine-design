/**
 * @Component Progress
 * @Type 进度条组件
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2019-03-25 18:50
 */
import React, {PureComponent} from 'react';
import _ from 'lodash';
import classNames from 'classnames';
import * as PropTypes from 'prop-types';

class Progress extends PureComponent {

  render() {
    const {height, className, attributes, children} = this.props;

    const isDefaultHeight = !_.isUndefined(height) && _.includes(['sm', 'lg'], height);

    /** 计算样式 */
    const classes = classNames(
      `progress`,
      {[`progress-${height}`]: isDefaultHeight},
      className,
    );

    const style = !isDefaultHeight ? {height} : {};

    return (
      <div
        className={classes}
        style={style}
        {...attributes}
      >
        {children}
      </div>
    );
  }
}

Progress.propTypes = {
  /** 设置进度条粗细，支持默认值：small，large，也可以自定义高度：100px，30% 等 */
  height: PropTypes.string,
  /** 用户自定义修饰符 */
  className: PropTypes.string,
  /** 用户自定义属性 */
  attributes: PropTypes.object,
};

Progress.defaultProps = {
  height: undefined,
  className: '',
  attributes: {},
};

export default Progress;
