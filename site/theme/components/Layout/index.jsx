/**
 * @Component 入口组件
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2019/3/18 17:12
 */
import React, {PureComponent} from 'react';
import {Route, Switch} from "react-router-dom";
import Home from "../../../../website/components/Home";

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
