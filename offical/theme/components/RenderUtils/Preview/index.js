/**
 * 代码效果组件
 * 用于在 MDX 中定义一个 代码效果 ，必须被包含在 模块组件 中。
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2019-03-22 08:37
 */
import React, {Component} from 'react';

export default class extends Component {
  render() {
    const {children} = this.props;

    return (
      <div className="tab-pane fade show active">
        <div className="boxed p-3">
          {children}
        </div>
      </div>
    );

  }
}
