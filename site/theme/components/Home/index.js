/**
 * 首页
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2019-03-18 19:41
 */
import React, {Fragment, PureComponent} from 'react';
import Header from '../Header';
import Screen from './components/Screen';

export default class extends PureComponent {
  render() {
    return (
      <Fragment>
        <Header />
        <Screen />
      </Fragment>
    );
  }
}
