/**
 *
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2019-03-22 13:26
 */
import _ from 'lodash';
import React, {Component} from 'react';

export default class Container extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    titleList: [],
  };


  componentDidMount() {
    this.setState({
      titleList: this.onQueryTitle(),
    }, () => {
      new SmoothScroll('[data-scroll]');

      function make_sticky() {
        $(".sticky").stick_in_parent();
      }

      let realWidth = $(window).width();

      if (realWidth < 768) {
        $(".sticky").trigger("sticky_kit:detach");
      } else {
        make_sticky();
      }


      $(window).resize(function () {

        realWidth = $(window).width();

        if (realWidth < 768) {
          $(".sticky").trigger("sticky_kit:detach");
        } else {
          make_sticky();
        }

      });

      $('.nav-item .collapse').on('shown.bs.collapse hidden.bs.collapse', function () {
        $(".sticky").trigger("sticky_kit:recalc");
      });
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
    const {titleList} = this.state;

    return (

      <aside className="col-md-3 col-xxl-3 d-none d-md-block">
        <div className="sticky">
          <ul id="toc" className="nav flex-column toc">
            {
              _.map(titleList, (title, index) => (
                <li className="nav-item" key={index}>
                  <a data-scroll className="nav-link" href={'#' + title.id}>{title.name}</a>
                </li>
              ))
            }
          </ul>
        </div>
      </aside>
    );
  }
}
