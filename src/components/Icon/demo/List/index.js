/**
 *
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2019-08-19 19:35
 */
import _ from 'lodash';
import React, {Component} from 'react';
import {Icon} from 'shineDev';
import dictionary from '!!raw-loader!../../../../style/icon/dictionary.scss';
import './style.scss';

// 图标字典
const DICTIONARY_LIST = _.map(dictionary.split('\n'), item => item.split(':')[0].replace('$fa-var-', ''));
// Chunks
const DICTIONARY_CHUNKS = _.chunk(DICTIONARY_LIST, 30);

export default class extends Component {
  state = {
    step: 1,
  };

  render() {

    return (
      <div>
        <ul className="shine-icon-list">
          {
            _.map(_.flatten(_.take(DICTIONARY_CHUNKS, this.state.step)), (item, index) => (
              <li key={index}>
                <span>
                  <Icon iconName={item} size="3x" />
                  <span className="icon-name">{item}</span>
                </span>
              </li>
            ))
          }
        </ul>
        <span className="more-icon" onClick={() => {this.setState(preState => ({step: preState.step + 1}))}}>
          加载更多...
        </span>
      </div>
    );
  }
};
