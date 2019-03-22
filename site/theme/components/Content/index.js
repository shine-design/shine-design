/**
 * 内容容器组件
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2019-03-20 14:21
 */
import _ from "lodash";
import React, {Component} from 'react';
import {DocPreview} from "docz";
import Aside from './components/Aside';
import Article from './components/Article';
import {H1, H2, Ul, Code, Table} from '../Base';

export default class extends Component {

  componentDidMount() {
    /* eslint-disable no-undef */
    $(document.body).headroom();
  }

  onQueryTitle() {
    // 检索内容区根节点
    const docContent = document.querySelector('.doc-content');
    return _.isNull(docContent)
      ? []
      : _.map(
        docContent.querySelectorAll('.doc-title'),
        title => ({id: title.id, name: title.innerText})
      );
  }

  render() {
    const {location} = this.props;
    return (
      <section className="section-container" style={{minHeight: '100vh'}}>
        <div className="container-fluid">
          <div className="row justify-content-between">
            <Aside location={location} />
            <DocPreview
              components={{
                h1: H1,
                h2: H2,
                ul: Ul,
                code: Code,
                table: Table,
                page: Article,
              }}
            />
          </div>
        </div>
      </section>
    );
  }
}
