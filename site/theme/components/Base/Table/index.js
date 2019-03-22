/**
 * 表格组件
 * 用于在 MDX 中定义一个常规表格，常用于展示组件 Props 配置信息。
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2019-03-22 11:05
 */
import React, {Component} from 'react';
import './table.scss';

export default class extends Component {
  render() {
    const {children} = this.props;

    return (
      <table className="shine-site table table-striped boxed">
        {children}
      </table>
    );
  }
}
