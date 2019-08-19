/**
 * 行间代码块
 * 用于在 MDX 中定义一个 行内代码块。
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2019-03-23 17:36
 */
import React, {Component} from 'react';
import './style.less';

class InlineCode extends Component {

  render() {
    const {children} = this.props;

    return (
      <code className="inline-code">
        {children}
      </code>
    );
  }
}

export default InlineCode;
