/**
 * 四级标题组件
 * 用于在 MDX 中定义一个四级标题
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2019-03-24 22:49
 */
import React, {Component} from 'react';

export default class extends Component {

  render() {
    const {id, children} = this.props;

    return (
      <div id={id} className="doc-title section-title-4 font-weight-bold">
        {children}
      </div>
    );
  }
}
