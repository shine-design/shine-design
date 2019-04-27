/**
 * @Component Tooltip
 * @Type 文字提示组件
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2019-04-27 11:59
 */
import React, {PureComponent} from 'react';
import classNames from 'classnames';
import * as PropTypes from 'prop-types';
import '../style/index.scss';

class Tooltip extends PureComponent {

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

Tooltip.propTypes = {
  /** 用户自定义修饰符 */
  className: PropTypes.string,
  /** 用户自定义属性 */
  attributes: PropTypes.object,
};

Tooltip.defaultProps = {
  className: '',
  attributes: {},
};

export default Tooltip;
