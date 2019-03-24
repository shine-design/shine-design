/**
 * 空白组件
 * 用于在 MDX 中包裹一段代码
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2019-03-23 17:28
 */
import React, {Fragment, Component} from 'react';

class Empty extends Component {

  render() {
    const {children} = this.props;

    return (
      <Fragment>
        {children}
      </Fragment>
    );
  }
}

export default Empty;
