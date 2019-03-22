/**
 * 卡片展示
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2019-03-20 23:21
 */
import React, {Component} from 'react';

export default class extends Component {
  render() {
    const {children} = this.props;
    console.log(children)
    return (
      <div className="card-body">
        {children}
      </div>
    );
  }
}
