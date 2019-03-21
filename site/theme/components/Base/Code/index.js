/**
 * 代码展示
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2019-03-20 23:52
 */
import React, {Component} from 'react';

export default class extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="code-toolbar">
        <pre>
          <code>

          </code>
        </pre>
      </div>
    );
  }

}
