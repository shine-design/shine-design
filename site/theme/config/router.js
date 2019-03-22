/**
 * 网站路由配置
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2019-03-17 17:21
 */
import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Layout from '../components/Layout';

export default (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Layout} />
    </Switch>
  </BrowserRouter>
)
