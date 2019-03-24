/**
 * 文章内容组件
 * 根据 MDX 解析的文档渲染展示
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2019-03-20 15:07
 */
import _ from "lodash";
import React, {Component} from 'react';

export default class extends Component {

  constructor(props) {
    super(props);

    this.onQueryTitle = this.onQueryTitle.bind(this);
  }

  /* eslint-disable react/no-unused-state */
  state = {
    titleList: [],
  };

  componentDidMount() {
    this.setState({
      titleList: this.onQueryTitle(),
    }, () => {
      /* eslint-disable no-undef */
      $('#toc_sticky').sticky({topSpacing: 150})
    });
  }

  // 检索标题数组
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
                  _.map(headings.filter(heading => heading.depth < 3), (heading, index) => (
                    <li className="nav-item" key={index}>
                      <a data-scroll className="nav-link" href={'#' + heading.slug}>{heading.value}</a>
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
