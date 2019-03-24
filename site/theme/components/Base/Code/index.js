/**
 * 代码展示组件
 * 用于在 MDX 中定义一个 代码块 ，必须被包含在 模块组件 中。
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2019-03-20 23:52
 */
import React, {Component} from 'react';

export default class Code extends Component {

  componentDidMount() {
    /* eslint-disable no-undef */
    Prism.highlightAll();
  }

  render() {
    const {language = 'jsx', className, children} = this.props;
    return (
      <div className="mdx-code">
        <pre>
          <code className={className || 'language-' + language}>
            {children}
          </code>
        </pre>
      </div>
    );
  }
}
