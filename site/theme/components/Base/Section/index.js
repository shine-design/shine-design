/**
 *
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2019-03-20 22:45
 */
import React, {Component} from 'react';

export default class extends Component {

  render() {
    const {children} = this.props;

    return (
      <div className="component">
        <ul className="nav nav-pills lavalamp" id="component-1" role="tablist">
          <li className="nav-item">
            <a
              className="nav-link active"
              data-toggle="tab"
              href="#component-1-1"
              role="tab"
              aria-controls="component-1-1"
              aria-selected="true"
            >
              Preview
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              data-toggle="tab"
              href="#component-1-2"
              role="tab"
              aria-controls="component-1-2"
              aria-selected="false"
            >
              CODE
            </a>
          </li>
        </ul>
        <div className="tab-content" id="component-1-content">
          {children}
        </div>
      </div>
    );
  }
}
