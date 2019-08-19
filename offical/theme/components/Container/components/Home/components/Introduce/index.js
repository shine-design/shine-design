/**
 * 首屏详细介绍入口
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2019-08-15 20:08
 */
import React, {Fragment} from 'react';
import Content from 'siteSrc/components/Common/Content';
import Feature from './components/Feature';
import Code from './components/Code';
import Tool from './components/Tool';
import Join from './components/Join';

export default () => (
  <Fragment>
    <Content>
      <Feature />
      <Code />
      <Tool />
      <Join />
    </Content>
  </Fragment>
);
