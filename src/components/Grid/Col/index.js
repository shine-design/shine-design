/**
 * @Component Col
 * @Type 布局组件
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2019-03-24 12:43
 */
import React, {PureComponent} from 'react';
import _ from 'lodash';
import classNames from 'classnames';
import * as PropTypes from 'prop-types';
import {classPrefix} from 'variables';

class Col extends PureComponent {
  constructor(props) {
    super(props);

    this.onColClasses = this.onColClasses.bind(this);
  }

  /**
   * 若 param 属性为数字类型，则直接生成 param-xxx 修饰符，如 col-3,offset-3，order-3
   * 若 param 属性为对象，则生成 param-key-value 修饰符，如 col-md-3,offset-md-3,order-md-3
   * 特殊的，如果 key 为 default ，则依然生成 param-xxx 修饰符，如 col-3,offset-3，order-3
   * @return Array Col 修饰符
   */
  onColClasses(param) {
    const data = this.props[param];

    if (_.isNumber(data) || _.isString(data)) {
      return [`${classPrefix}-${param}-${data}`];
    }

    const colClasses = [];
    if (_.isObject(data)) {
      _.forIn(data, (value, key) => {
        colClasses.push(_.isEqual(key, 'default') ? `${classPrefix}-${param}-${value}` : `${classPrefix}-${param}-${key}-${value}`);
      });
    }

    return colClasses;
  }


  render() {
    const {className, attributes, children} = this.props;
    const special = ['col', 'offset', 'order'];
    /** 计算样式 */
    const classes = classNames(
      _.flatten(_.map(special, item => this.onColClasses(item))),
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

Col.propTypes = {
  /** 定义列格块数 */
  col: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.object,
  ]),
  /** 定义列格块偏移量 */
  offset: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.object,
  ]),
  /** 定义列格块排列顺序 */
  order: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.object,
  ]),
  /** 用户自定义修饰符 */
  className: PropTypes.string,
  /** 用户自定义属性 */
  attributes: PropTypes.object,
};

Col.defaultProps = {
  col: 'auto',
  offset: undefined,
  order: undefined,
  className: '',
  attributes: {},
};

export default Col;
