/**
 * H1 标题
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2019-03-20 22:25
 */
import React, {Component} from 'react';

export default class extends Component {
  render() {
    const {id, children} = this.props;

    return (
      <div
        id={id}
        className="section-title h2 font-weight-light"
      >
        {children}
      </div>
    );
  }
}
