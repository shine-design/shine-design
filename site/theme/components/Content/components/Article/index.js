/* eslint-disable */
/**
 *
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2019-03-20 15:07
 */
import React, {Component} from 'react';
import _ from "lodash";

export default class extends Component {

  constructor(props) {
    super(props);

    this.onQueryTitle = this.onQueryTitle.bind(this);
  }

  state = {
    titleList: [],
  };


  componentDidMount() {
    this.setState({
      titleList: this.onQueryTitle(),
    }, () => {
      new SmoothScroll('[data-scroll]');

      $("#toc_sticky").stick_in_parent();

      $(window).scroll(() => {
        console.log('chufal ');
        $("#toc_sticky").trigger("sticky_kit:recalc");
      })
    });
  }

  // 检索标题数组
  onQueryTitle() {
    // 检索内容区根节点
    const docContent = document.querySelector('.doc-content');
    return _.isNull(docContent)
      ? []
      : _.map(docContent.querySelectorAll('.doc-title'), title => ({id: title.id, name: title.innerText}));
  }

  render() {
    const {children} = this.props;
    const headings = children.props.doc.headings;
    return (
      <article className="col-lg-9 col-xxl-10 doc-content">
        <div className="row justify-content-between doc-content-body">
          <article className="col-md-9 col-xxl-8">
            {children}
          </article>
          <aside className="col-md-3 col-xxl-3 d-none d-md-block">
            <div id="toc_sticky">
              <ul id="toc" className="nav flex-column toc">
                {
                  _.map(headings, (heading, index) => (
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
