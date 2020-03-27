/**
 * 更新日志 - 列表项
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2019-08-15 21:03
 */
import _ from 'lodash';
import React, {Component, Fragment} from 'react';
import {ThemeConfig} from "docz";


export default class Items extends Component {
  render() {
    // const {items = []} = this.props;
    return (
      <ThemeConfig>
        {
          ({themeConfig: {version}}) => (
            <div className="changelog-items">
              {_.map(version, (item, index) => <Item key={index} {...item} />)}
            </div>
          )
        }
      </ThemeConfig>
    )
  }
}


class Item extends Component {
  render() {
    const {id, header = {}, description = [], files = []} = this.props;
    const {version, updateData} = header;
    return (
      <Fragment>
        <div id={id} className="changelog-item js-changelog-item">
          <header className="changelog-header">
            <h3 className="changelog-version">
              <a
                target='_blank'
                href={'//github.com/shine-design/shine-design/releases/tag/' + version}
              >{version}
              </a>
            </h3>
            <p className="changelog-date">{updateData}</p>
          </header>
          <div className="changelog-update-descriptions">
            {
              description.map((item, index) => <Description key={index} {...item} />)
            }
          </div>
          <div className="changelog-link" />
        </div>
      </Fragment>
    );
  }
}

class Description extends Component {
  render() {
    const {type, value} = this.props;
    const tagName = type === 0 ? '新特性' : (type === 1 ? '修复更新' : '移除');
    const typeName = type === 0 ? 'feature' : (type === 1 ? 'improvement' : 'bug-fix');
    const _render = (
      <Fragment>
        <div
          className={'changelog-update-description js-changelog-update-description changelog-' + typeName}
          data-instafilta-category={typeName}
        >
          <span className="changelog-type">{tagName}</span>
          {value}
        </div>
      </Fragment>
    );
    return (
      <Fragment>
        {_render}
      </Fragment>
    );
  }
}

class File extends Component {
  render() {
    const {type, fileName} = this.props;
    const typeName = type === 0 ? 'new' : (type === 1 ? 'updated' : 'removed');
    return (
      <Fragment>
        <div
          className={'changelog-file-changed js-changelog-file changelog-file-' + typeName}
          data-instafilta-category={typeName}
        > {fileName}
        </div>
      </Fragment>
    );
  }
}
