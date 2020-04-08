/**
 * @Component Portlet.Header
 * @Type 容器
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2020-04-07 13:46
 */
import _ from 'lodash';
import React, {Fragment, PureComponent} from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';
import {classPrefix} from 'variables';
import Icon from '../Icon';
import Button from "../Button";

class Header extends PureComponent {

  render() {

    const {title, subTitle, iconName, iconProps, headerRenderer, hasToolbar, actions, toolbarRenderer, className, attributes} = this.props;

    /** 计算样式 */
    const classes = classNames(
      `${classPrefix}-portlet__head`, className,
    );

    return (
      <div className={classes} {...attributes}>
        {
          _.isFunction(headerRenderer)
            ? headerRenderer()
            : (
              <Fragment>
                <div className={classNames(`${classPrefix}-portlet__head-label`)}>
                  {
                    (_.isString(iconName) || !_.isEmpty(iconProps)) && (
                      <div className={classNames(`${classPrefix}-portlet__head-icon`)}>
                        <Icon iconName={iconName} {...iconProps} />
                      </div>
                    )
                  }
                  <h3 className={classNames(`${classPrefix}-portlet__head-title`)}>
                    {title}
                    {subTitle && <small>{subTitle}</small>}
                  </h3>
                </div>
                {
                  hasToolbar && (
                    <div className={classNames(`${classPrefix}-portlet__head-toolbar`)}>
                      {
                        !_.isUndefined(toolbarRenderer)
                          ? (_.isFunction(toolbarRenderer) ? toolbarRenderer() : toolbarRenderer)
                          : (
                            _.isArray(actions) && !_.isEmpty(actions) && (
                              <div className={classNames(`${classPrefix}-portlet__head-actions`)}>
                                {
                                  _.map(actions, (item, index) => (
                                    <Button {...item} key={index} className={classNames(`${classPrefix}-margin-r-5`, item.className)} />
                                  ))
                                }
                              </div>
                            )
                          )
                      }
                    </div>
                  )
                }
              </Fragment>
            )
        }
      </div>
    );
  }
}

Header.propTypes = {
  /** 容器标题 */
  title: PropTypes.any,
  /** 容器副标题 */
  subTitle: PropTypes.any,
  /** 指定容器标题的大小 */
  size: PropTypes.oneOf(['sm', 'lg', 'xl']),
  /** 图标名称 */
  iconName: PropTypes.string,
  /** 图标配置项，参考 Icon 组件相关配置 */
  iconProps: PropTypes.object,
  /** 标题渲染函数 */
  headerRenderer: PropTypes.func,
  /** 是否展示工具栏 */
  hasToolbar: PropTypes.bool,
  /** 工具栏操作按钮列表，参考 按钮 配置 */
  actions: PropTypes.array,
  /** 用户自定义修饰符 */
  className: PropTypes.string,
  /** 用户自定义属性 */
  attributes: PropTypes.object,
};

Header.defaultProps = {
  title: undefined,
  subTitle: undefined,
  size: undefined,
  iconName: undefined,
  iconProps: undefined,
  headerRenderer: undefined,
  hasToolbar: false,
  actions: [],
  className: '',
  attributes: {},
};

export default Header;
