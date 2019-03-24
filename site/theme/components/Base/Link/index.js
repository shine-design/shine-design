/**
 * 超级链接组件
 * 用于在 MDX 中创建链接
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2019-03-23 17:45
 */
import React, {Component} from 'react';

class Link extends Component {

  render() {
    const {href, children} = this.props;
    return (
      <a href={href} className="external">
        {children}
      </a>
    );
  }
}

export default Link;
