/**
 * @Component Bar
 * @Type 进度条组件
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2019-03-25 20:17
 */
import React, {PureComponent} from 'react';
import _ from 'lodash';
import classNames from 'classnames';
import * as PropTypes from 'prop-types';

class Bar extends PureComponent {
  render() {
    const {percent, format, showInfo, isStriped, isAnimated, className, attributes} = this.props;
    let checkedPercent = percent;

    const classes = classNames(
      `progress-bar`,
      {
        [`progress-bar-striped`]: isStriped || isAnimated,
        [`progress-bar-animated`]: isAnimated,
      },
      className,
    );

    if (percent < 0)
      checkedPercent = 0;
    else if (percent > 100)
      checkedPercent = 100;

    /** 进度条占比计算 */
    const percentStyle = {width: checkedPercent + '%'};

    return (
      <div
        className={classes}
        role="progressbar"
        style={percentStyle}
        aria-valuenow="25"
        aria-valuemin="0"
        aria-valuemax="100"
        {...attributes}
      >
        {!!showInfo && _.isFunction(format) && format.call(_.noop(), checkedPercent)}
      </div>
    );
  }
}

Bar.propTypes = {
  /** 当前比例，百分数，范围 0 ~ 100 */
  percent: PropTypes.number,
  /** 定义进度文本展示格式 */
  format: PropTypes.func,
  /** 定义是否显示当前进度 */
  showInfo: PropTypes.bool,
  /** 是否显示条纹 */
  isStriped: PropTypes.bool,
  /** 是否显示动画效果，该属性会默认设置 isStriped 为 true */
  isAnimated: PropTypes.bool,
  /** 用户自定义修饰符 */
  className: PropTypes.string,
  /** 用户自定义属性 */
  attributes: PropTypes.object,
};

Bar.defaultProps = {
  percent: 0,
  format: percent => percent + '%',
  showInfo: true,
  isStriped: false,
  isAnimated: false,
  className: '',
  attributes: {},
};

export default Bar;
