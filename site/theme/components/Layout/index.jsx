/**
 * @Component 页面入口组件
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2019-03-18 17:12
 */
import React, {Component, Fragment} from 'react';
import {Route, Switch} from 'react-router-dom'
import Header from '../Header';
import Content from '../Content';
import HomePage from '../HomePage';

export default class extends Component {

  componentDidMount() {
    /* eslint-disable no-undef */
    $(document.body).headroom({
      tolerance: 10,
    });
  }

  render() {
    const {location} = this.props;

    return (
      <Fragment>
        <Header location={location} />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/doc" component={Content} />
        </Switch>
      </Fragment>
    );
  }
}
