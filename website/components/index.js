/**
 * 主入口
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2019-03-17 17:20
 */
import React, {PureComponent} from 'react';
import {Route, Switch} from 'react-router-dom'

import Home from './Home';

export default class extends PureComponent {
  render() {
    return (
      <div className="page js-page">
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </div>
    );
  }
}
