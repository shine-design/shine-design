/**
 * 网站内容主体
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2019-03-20 14:21
 */
import React, {Component} from 'react';
import Aside from './components/Aside';
import Article from './components/Article';

export default class extends Component {

  componentDidMount() {
    $(document.body).headroom();
  }

  render() {
    const {location} = this.props;
    return (
      <section className="section-container" style={{minHeight: '100vh'}}>
        <div className="container-fluid">
          <div className="row justify-content-between">
            <Aside location={location} />
            <Article />
          </div>
        </div>
      </section>
    );
  }
}
