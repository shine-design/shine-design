/**
 * 代码展示
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2019-03-20 23:52
 */
import React, {Component} from 'react';


export default class extends Component {

  static defaultProps = {
    language: 'jsx',
  };

  componentDidMount() {
    /* eslint-disable no-undef */
    Prism.highlightAll();
  }

  render() {
    const {language, children} = this.props;
    return (
      <div className="tab-pane fade" id="component-1-2" role="tabpanel" aria-labelledby="component-1-2">
        <pre>
          <code className={'language-' + language}>
            {children}
          </code>
        </pre>
      </div>
    );
  }
}
