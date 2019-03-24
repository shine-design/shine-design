/**
 * 卡片组件
 * 主要用于对 Changelog 渲染
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2019-03-23 19:27
 */
import React, {Component} from 'react';

class Card extends Component {
  render() {
    console.log('render Card');
    return (
      <div className="card card-component ">
        <div className="card-header">
          <div className="card-title">1.2.0</div>
        </div>
        <div className="card-body">
          THis is a body
        </div>

      </div>
    );
  }
}

export default Card;
