/**
 *
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2019-03-22 08:37
 */
import React, {Component} from 'react';

export default class extends Component {
  render() {
    const {children} = this.props;

    return (
      <div
        className="tab-pane fade show active"
        id="component-1-1"
        role="tabpanel"
        aria-labelledby="component-1-1"
      >
        <div className="boxed p-3">
          <div className="row">
            <div className="col-11">
              {children}
            </div>
            <div className="col-1 text-right">
              <i className="icon-chevron-right2 icon-boxed icon-boxed-sm"></i>
            </div>
          </div>
        </div>
      </div>
    );

  }
}
