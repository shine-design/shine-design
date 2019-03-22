/**
 *
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2019-03-22 11:05
 */
import React, {Component} from 'react';
import './table.scss';

export default class extends Component {
  render() {
    const {children} = this.props;
    // console.log(this.props);

    return (
      <table className="shine-site table table-striped boxed">
        {children}
      </table>
    );
  }
}
