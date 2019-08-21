import React, {Component, Fragment} from 'react';
import jQuery from 'jquery';
import Title from './components/Title';
import './style.less';

export default class Language extends Component {

  componentDidMount() {
    this._initFullPage();
    this.scrollTo();
  }

  _initFullPage() {
    const elements = jQuery('.js-full-page');
    let height = jQuery(window).height();
    let doit;

    elements.outerHeight(height);

    function resize() {
      height = jQuery(window).height();
      elements.outerHeight(height);
    }

    window.onresize = () => {
      clearTimeout(doit);
      doit = setTimeout(resize, 100);
    };
  }

  scrollTo() {
    const button = jQuery('.js-scroll-to');
    const target = button.data('target');
    const speed = button.data('speed') ? button.data('speed') : 1000;

    // HeaderFixed Object
    const HeaderFixed = (() => {
      const header = jQuery('.js-header-fixed');
      const headerWrapper = jQuery('<div class="header-fixed-wrapper">');
      const pub = {};

      // Public functions
      pub.isPresent = () => header.length;
      pub.isOver = () => header.hasClass('header-over');
      pub.getHeight = () => header.outerHeight();
      pub.getOffset = () => pub.isPresent() ? pub.getHeight() : 0;

      // Private functions
      const updateHeader = helper => {
        if (jQuery(window).scrollTop() === 0) {
          header.removeClass('header-fixed').addClass(helper);
        } else {
          header.addClass('header-fixed').removeClass(helper);
        }
      };

      const init = () => {
        if (!pub.isOver()) {
          header.wrap(headerWrapper.height(header.outerHeight()));
          header.addClass('header-fixed');
        } else {
          let helper = '';

          if (header.hasClass('large')) {
            helper = 'large';
          }
          else if (header.hasClass('small')) {
            helper = 'small';
          }
          updateHeader(helper);
          jQuery(window).scroll(() => {
            updateHeader(helper);
          });
        }
      };

      if (pub.isPresent()) {
        init();
      }

      return pub;
    })();

    if (typeof target !== 'undefined' && jQuery(target).length) {
      button.click(event => {
        event.preventDefault();
        jQuery('html, body').animate({
          scrollTop: jQuery(target).first().offset().top - HeaderFixed.getOffset(),
        }, speed);
      });
    }
  }

  render() {
    return (
      <Fragment>
        <div className="header-back header-back-bg-app header-back-full-page js-full-page">
          <div className="header-back-container">
            <div className="container">
              <div className="row">
                <div className="col-md-12"><Title/></div>
              </div>
            </div>
          </div>
          <span className="next-section js-scroll-to " data-target="#content"><i className="fa-angle-down fa"/></span>
        </div>
      </Fragment>
    )
  }
}
