/**
 * 三级标题组件
 * 用于在 MDX 中定义一个三级标题
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2019-03-23 16:47
 */
import React, {Component} from 'react';

export default class extends Component {

  render() {
    const {id, children} = this.props;

    return (
      <div id={id} className="doc-title section-title-3 font-weight-bold">
        {children}
      </div>
    );
  }
}
