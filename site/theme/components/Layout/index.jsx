/**
 * @Component 页面入口组件
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2019-03-18 17:12
 */
import React, {Component, Fragment} from 'react';
import Header from '../Header';
import Content from '../Content';

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
        <Header/>
        <Content location={location} />
      </Fragment>
    );
  }
}
