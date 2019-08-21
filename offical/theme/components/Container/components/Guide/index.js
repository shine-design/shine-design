/**
 * 组件文档入口
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2019-08-15 19:12
 */
import React, {Component, Fragment} from 'react';
import {DocPreview} from "docz";
import {Code, H1, H2, H3, H4, H5, InlineCode, Loading, NotFound, Table} from 'siteSrc/components/RenderUtils';
import Background from 'siteSrc/components/Common/Background';
import Article from "siteSrc/components/Common/Article";
import Aside from './components/Aside';
import './style.less';

export default class extends Component {

  render() {
    return (
      <Fragment>
        <Background title="组件文档"/>
        <div id='content'>
          <div className="container">
            <div className="row">
              <div className="col-md-3 ">
                <Aside location={this.props.location} />
              </div>
              <div className="col-md-9">
                <div className="main-content">
                  <DocPreview
                    components={{
                      h1: H1,
                      h2: H2,
                      h3: H3,
                      h4: H4,
                      h5: H5,
                      // ul: Ul,
                      // a: Link,
                      code: Code,
                      inlineCode: InlineCode,
                      table: Table,
                      page: Article,
                      notFound: NotFound,
                      loading: Loading,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
