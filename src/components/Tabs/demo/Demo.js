/**
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2020-04-03 22:34
 */

import React, {Component} from 'react';
import {Tabs} from 'shineDev';

export default class extends Component {
  state = {
    activeTab: 1
  };

  render() {
    const {activeTab} = this.state;

    return (
      <div className="helper mb20">
        <Tabs
          isControlled
          tabConfig={[
            {label: '标签一', value: 1},
            {label: '标签二', value: 2},
            {label: '标签三', value: 3}
          ]}
          activeTab={activeTab}
          onChange={tabIndex => this.setState({activeTab: tabIndex})}
        />
        <div>这是标签{activeTab}的内容。</div>
      </div>
    );
  }
}
