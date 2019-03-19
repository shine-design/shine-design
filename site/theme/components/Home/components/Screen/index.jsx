/* eslint-disable */
import React, {Component, Fragment} from 'react';
import Title from './components/Title';

import './style/index.less';

export default class extends Component {
  componentDidMount() {
    this._initFullPage();
    this.scrollTo();
  }

  _initFullPage() {
    const elems = $('.js-full-page');
    let height = $(window).height();
    let doit;
    elems.outerHeight(height);

    function resizedw() {
      height = $(window).height();
      elems.outerHeight(height);
    }

    window.onresize = function () {
      clearTimeout(doit);
      doit = setTimeout(resizedw, 100);
    };
  }

  scrollTo() {
    const button = $('.js-scroll-to');
    const target = button.data('target');
    const speed = button.data('speed') ? button.data('speed') : 1000;
    if (typeof target !== 'undefined' && $(target).length) {
      button.click(function (event) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: $(target).first().offset().top - HeaderFixed.getOffset()
        }, speed);
      });
    }
    const HeaderFixed = (function () {
      let header = $('.js-header-fixed');
      let headerWrapper = $('<div class="header-fixed-wrapper">');
      let pub = {};

      // Public functions
      pub.isPresent = function () {
        return header.length;
      };
      pub.isOver = function () {
        return header.hasClass('header-over');
      };
      pub.getHeight = function () {
        return header.outerHeight();
      };
      pub.getOffset = function () {
        return pub.isPresent() ? pub.getHeight() : 0;
      };

      // Private functions
      let updateHeader = function (helper) {
        if ($(window).scrollTop() === 0) {
          header.removeClass('header-fixed').addClass(helper);
        } else {
          header.addClass('header-fixed').removeClass(helper);
        }
      };

      let init = function () {
        if (!pub.isOver()) {
          header.wrap(headerWrapper.height(header.outerHeight()));
          header.addClass('header-fixed');
        } else {
          let helper = '';

          if (header.hasClass('large')) {
            helper = 'large';
          } else if (header.hasClass('small')) {
            helper = 'small';
          }

          updateHeader(helper);

          $(window).scroll(function () {
            updateHeader(helper);
          });
        }

      };

      if (pub.isPresent()) {
        init();
      }

      return pub;

    })();
  }

  render() {
    return (
      <Fragment>
        <div className="header-back header-back-bg-app header-back-full-page js-full-page">
          <div className="header-back-container">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <Title />
                </div>
              </div>
            </div>
          </div>
          <span className="next-section js-scroll-to " data-target="#content">
					    <i className="fa-angle-down fa"/>
				    </span>
        </div>
      </Fragment>
    )
  }
}
