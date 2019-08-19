/**
 * 表格组件
 * 用于在 MDX 中定义一个常规表格，常用于展示组件 Props 配置信息。
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2019-03-22 11:05
 */
import _ from 'lodash';
import classNames from 'classnames';
import React, {Component} from 'react';
import './style.less';

const PROPS_THEAD = ['属性', '类型', '必需', '默认值', '描述'];

export default class extends Component {
  render() {
    const {className, children} = this.props;
    const propsTable = (_.isArray(children) && children[1]) || [];
    const isProps = _.isEqual(className, 'PropsTable');
    return (
      <table className={classNames({'props': isProps})}>
        {
          isProps && (
            <thead>
            <tr>
              {_.map(PROPS_THEAD, (prop, index) => <th key={index}>{prop}</th>)}
            </tr>
            </thead>
          )
        }
        {isProps ? propsTable : children}
      </table>
    );
  }
}
