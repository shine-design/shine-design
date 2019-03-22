/**
 * 卡片容器
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2019-03-20 23:19
 */
import React, {Component} from 'react';

export default class extends Component {
  render() {
    const {children} = this.props;

    return (
      <div className="card card-component">
        {children}
      </div>
    );
  }
}
