/**
 * @Component Portlet
 * @Type 容器
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2020-04-07 13:46
 */
import React, {PureComponent} from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';
import {classPrefix} from 'variables';
import Header from './Header';
import Footer from './Footer';

class Portlet extends PureComponent {

  render() {
    const {title, subTitle, headerConfig, hasHeader, actions, hasFooter, footerConfig, isBordered, bgColor, className, attributes, children} = this.props;
    const {size} = headerConfig || {};

    /** 计算样式 */
    const classes = classNames(
      `${classPrefix}-portlet`,
      {
        [`${classPrefix}-portlet--bordered`]: isBordered,
        [`${classPrefix}-portlet--head-${size}`]: _.includes(['sm', 'lg', 'xl'], size),
        [`${classPrefix}-portlet--solid-${bgColor}`]: bgColor
      },
      className,
    );

    const mergedHeaderConfig = {
      title,
      subTitle,
      ...headerConfig
    };

    const mergedFooterConfig = {
      actions,
      ...footerConfig
    };

    return (
      <div className={classes} {...attributes}>
        {hasHeader && <Header {...mergedHeaderConfig} />}
        <div className={classNames(`${classPrefix}-portlet__body`)}>{children}</div>
        {hasFooter && <Footer {...mergedFooterConfig} />}
      </div>
    );
  }
}

Portlet.propTypes = {
  /** 是否显示标题 */
  hasHeader: PropTypes.bool,
  /** 容器标题 */
  title: PropTypes.any,
  /** 容器副标题 */
  subTitle: PropTypes.any,
  /** 其他标题配置项 */
  headerConfig: PropTypes.object,
  /** 是否显示边框 */
  isBordered: PropTypes.bool,
  /** 是否显示底部 */
  hasFooter: PropTypes.bool,
  /** 底部按钮配置项，参考 按钮 组件 */
  actions: PropTypes.array,
  /** 其他底部配置项 */
  footerConfig: PropTypes.object,
  /** 背景颜色 */
  bgColor: PropTypes.string,
  /** 用户自定义修饰符 */
  className: PropTypes.string,
  /** 用户自定义属性 */
  attributes: PropTypes.object,
};

Portlet.defaultProps = {
  hasHeader: false,
  title: undefined,
  subTitle: undefined,
  headerConfig: {},
  isBordered: false,
  hasFooter: false,
  actions: undefined,
  footerConfig: {},
  bgColor: undefined,
  className: '',
  attributes: {},
};

Portlet.Header = Header;

Portlet.Footer = Footer;

export default Portlet
