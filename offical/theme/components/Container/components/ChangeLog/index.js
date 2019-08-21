/**
 * 更新日志入口
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2019-08-15 20:54
 */
import React, {Component, Fragment} from 'react';

import Background from 'siteSrc/components/Common/Background';
import Content from 'siteSrc/components/Common/Content';
import jQuery from 'jquery';
import Filter from './components/Filter';
import Items from './components/Items';
import './style.less';

export default class Changelog extends Component {

  render() {
    const description = (
      <p>
        Shine Design 更新参照
        <a href='https://semver.org/' target='_blank' rel="noopener noreferrer">Semantic Versioning 2.0.0 </a> 标准进行。
      </p>
    );

    return (
      <Fragment>
        <Background title="更新日志" description={description}/>
        <Content>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="changelog-wrapper js-changelog">
                  <Filter />
                  <Items />
                </div>
              </div>
            </div>
          </div>
        </Content>
      </Fragment>
    )
  }
}
