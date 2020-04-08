/**
 * @Component Portlet.Footer
 * @Type 容器
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2020-04-07 13:46
 */
import _ from 'lodash';
import React, {PureComponent} from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';
import {classPrefix} from 'variables';
import Button from '../Button';
import {Col, Row} from '../Grid';

class Footer extends PureComponent {

  render() {

    const {actions, footerRenderer, size, className, attributes} = this.props;

    /** 计算样式 */
    const classes = classNames(
      `${classPrefix}-portlet__foot`,
      {
        [`${classPrefix}-portlet__foot--${size}`]: _.includes(['sm', 'lg', 'xl'], size),
      },
      className
    );

    return (
      <div className={classes} {...attributes}>
        {
          _.isFunction(footerRenderer)
            ? footerRenderer()
            : (
              <Row>
                <Col col={24}>
                  {_.isArray(actions) && _.map(actions, (item, index) => (
                    <Button key={index} {...item} className={classNames(`${classPrefix}-margin-r-10`, item.className)} />
                  ))}
                </Col>
              </Row>
            )
        }
      </div>
    );
  }
}

Footer.propTypes = {
  /** 底部按钮配置项，参考 按钮 组件 */
  actions: PropTypes.array,
  /** 底部渲染函数 */
  footerRenderer: PropTypes.func,
  /** 指定容器标题的大小 */
  size: PropTypes.oneOf(['sm', 'lg', 'xl']),
  /** 用户自定义修饰符 */
  className: PropTypes.string,
  /** 用户自定义属性 */
  attributes: PropTypes.object,
};

Footer.defaultProps = {
  actions: undefined,
  footerRenderer: undefined,
  size: undefined,
  className: '',
  attributes: {},
};

export default Footer;
