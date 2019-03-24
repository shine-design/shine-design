/**
 * 文章内容组件
 * 根据 MDX 解析的文档渲染展示
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2019-03-20 15:07
 */
import _ from "lodash";
import classNames from 'classnames';
import React, {Component} from 'react';

export default class extends Component {

  componentDidMount() {
    $('#toc_sticky').sticky({topSpacing: 150})
  }

  render() {
    const {children} = this.props;
    const {headings} = children.props.doc;

    return (
      <article className="col-lg-10 col-xxl-10 doc-content">
        <div className="row justify-content-between doc-content-body">
          <article className="col-md-9 col-xxl-8">{children}</article>
          <aside className="col-md-3 col-xxl-3 d-none d-md-block toc-aside">
            <div id="toc_sticky">
              <ul id="toc" className="nav flex-column toc">
                {
                  _.map(headings.filter(heading => _.includes([2, 3], heading.depth)), ({depth, slug, value}, index) => (
                    <li className={classNames('nav-item', 'depth-' + depth)} key={index}>
                      <a data-scroll className="nav-link" href={'#' + slug}>{value}</a>
                    </li>
                  ))
                }
              </ul>
            </div>
          </aside>
        </div>
      </article>
    );
  }
}
