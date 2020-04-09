/**
 * @Component Tooltip
 * @Type 文字提示组件
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2019-04-27 11:59
 */
import React, {PureComponent} from 'react';
import classNames from 'classnames';
import * as PropTypes from 'prop-types';
import jQuery from 'jquery';
import {classPrefix} from 'variables';
import 'bootstrap/js/src/tooltip';

class Tooltip extends PureComponent {

  componentDidMount() {
    this.onInitTooltip();
  }

  componentDidUpdate() {
    this.onInitTooltip();
  }

  onInitTooltip = () => {
    const {isAnimated, isHtmlRender, placement, bgColor} = this.props;
    if (this.tooltip) {
      const classes = classNames(
        'tooltip',
        {
          [`tooltip-${bgColor}`]: bgColor
        }
      );
      jQuery(this.tooltip).tooltip({
        placement,
        html: isHtmlRender,
        animation: isAnimated,
        template: '<div class="' + classes + '" role="tooltip">\
                <div class="arrow"></div>\
                <div class="tooltip-inner"></div>\
            </div>'
      });
    }
  };

  componentWillUnMount() {
    if (this.tooltip) {
      jQuery(this.tooltip).tooltip('destroy')
    }
  }

  render() {
    const {title, trigger, className, attributes, children} = this.props;

    /** 计算样式 */
    const classes = classNames(
      `${classPrefix}-block-inline`,
      className,
    );

    return (
      <div
        className={classes}
        ref={item => this.tooltip = item}
        title={title}
        data-trigger={trigger}
        {...attributes}
      >
        {children}
      </div>

    );
  }
}

Tooltip.propTypes = {
  /** 文字提示内容 */
  title: PropTypes.string.isRequired,
  /** 提示框背景颜色 */
  bgColor: PropTypes.string,
  /** 是否展示动画效果 */
  isAnimated: PropTypes.bool,
  /** 是否支持 HTML 字符串渲染（不建议，防止 XSS 漏洞） */
  isHtmlRender: PropTypes.bool,
  /** 指定文字提示弹出的位置，支持  top | bottom | left | right | auto */
  placement: PropTypes.string,
  /** 【本期不支持】文字提示触发方式，支持 click | hover | focus */
  trigger: PropTypes.string,
  /** 用户自定义修饰符 */
  className: PropTypes.string,
  /** 用户自定义属性 */
  attributes: PropTypes.object,
};

Tooltip.defaultProps = {
  title: undefined,
  bgColor: undefined,
  isAnimated: true,
  isHtmlRender: false,
  placement: 'auto',
  trigger: 'hover',
  className: '',
  attributes: {},
};

export default Tooltip;
