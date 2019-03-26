/**
 * 滚动进度条示例
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2019-03-26 08:33
 */
import React, {Component} from 'react';
import {Progress, Bar} from 'shineDev';


class Scroll extends Component {
  state = {percent: 0, isIncrease: true};

  componentDidMount() {
    const me = this;
    // const {percent} = me.state;

    this.percentTimer = setInterval(() => {
      me.setState(prevState => {
        return {percent: prevState.percent + 1};
      })
    }, 100);
  }


  componentWillUnmount() {
    clearInterval(this.percentTimer);
  }

  render() {
    const {percent} = this.state;

    return (
      <Progress className="shine-progress-helper">
        <Bar percent={percent} className="shine--bg-success"/>
      </Progress>
    );
  }
}

export default Scroll;
