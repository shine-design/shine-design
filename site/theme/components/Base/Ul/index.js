/**
 * 无序列表组件
 * 用于在 MDX 中定义一个无序列表
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2019-03-20 23:03
 */
import _ from 'lodash';
import React, {Component} from 'react';

export default class extends Component {
  render() {
    const {children} = this.props;
    const listValues = _.map(_.isArray(children) ? children : [children], child => child.props);

    return (
      <ul className="markdown-ul">
        {
          _.map(listValues, (value, index) => (
            <li key={index}><p>{value.children}</p></li>
          ))
        }
      </ul>
    );
  }
}
