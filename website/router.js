/**
 *
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2019-03-17 17:21
 */
import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import App from './components';

export default (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} />
    </Switch>
  </BrowserRouter>
)
