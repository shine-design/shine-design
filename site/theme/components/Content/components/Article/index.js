/* eslint-disable */
/**
 *
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2019-03-20 15:07
 */
import React, {Component} from 'react';
import {DocPreview} from 'docz';
import H1 from '../../../Base/H1';
import H2 from '../../../Base/H2';
import Ul from '../../../Base/Ul';
import Code from '../../../Base/Code';

export default class extends Component {
  componentDidMount() {
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

  }

  render() {
    return (
      <article className="col-lg-9 col-xxl-10 doc-content">

        <div className="row justify-content-between doc-content-body">
          <article className="col-md-9 col-xxl-8">
            <DocPreview
              components={{
                h1: H1,
                h2: H2,
                ul: Ul,
                code: Code,
              }}
            />

          </article>


          <aside className="col-md-3 col-xxl-3 d-none d-md-block">
            <div className="sticky">
              <ul id="toc" className="nav flex-column toc">
                {/*<li className="nav-item">*/}
                  {/*<a data-scroll className="nav-link" href="#section-1">Typography</a>*/}
                {/*</li>*/}
              </ul>
            </div>
          </aside>


        </div>

      </article>
    );
  }
}
