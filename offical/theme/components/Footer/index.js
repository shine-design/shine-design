/**
 * @Component 页面底部组件
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2019-03-18 17:12
 */
import _ from 'lodash';
import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import jQuery from 'jquery';
import {ThemeConfig} from "docz";
import './style.less';

export default class Footer extends Component {
  componentDidMount() {
    const footerFixed = jQuery('.js-footer-is-fixed'); // 选择 Footer
    const scope = jQuery('.js-docs-version');
    const scrollButton = jQuery('.js-scroll-top');
    const currentBtn = scope.find('.js-docs-current-version');
    const versionList = scope.find('.js-docs-version-list');
    let resizeTimer; // 定时器

    // 计算 Footer Padding
    const updateHeight = () => jQuery('.js-page').css('padding-bottom', footerFixed.outerHeight() + 'px');

    // Footer fixed or disabled
    if (footerFixed.length) {
      footerFixed.addClass('footer-is-fixed');
      updateHeight();

      // 当 windows 调整尺寸时触发
      jQuery(window).on('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(updateHeight, 250);
      });
    }

    if (scope.length) {
      currentBtn.on('click', e => {
        e.preventDefault();
        e.stopPropagation();
        versionList[versionList.is(':visible') ? 'fadeOut' : 'fadeIn']('fast');
      });

      jQuery('body').on('click', () => {
        if (versionList.is(':visible')) {
          versionList.fadeOut('fast');
        }
      });
    }

    scrollButton.on('click', e => {
      e.preventDefault();
      jQuery('html, body').animate({scrollTop: '0px'});
    });

    function isScroll() {
      scrollButton[jQuery(window).scrollTop() === 0 ? 'fadeOut' : 'fadeIn']();
    }

    isScroll();
    jQuery(window).on('scroll', isScroll);
  }

  render() {
    return (
      <ThemeConfig>
        {
          ({themeConfig: {footerBar}}) => (
            <footer className="js-footer-is-fixed">
              <div className="footer-extended">
                <div className="container">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="footer-extended-container">
                        <div className="row justify-content-center">
                          {
                            _.map(footerBar, (bar, index) => (
                              <div className="col-md-2 col-sm-2 col-xs-4" key={index}>
                                <div className="footer-extended-menu">
                                  <h5 className="footer-extended-menu-title">{bar.title}</h5>
                                  <ul className="footer-extended-menu-list">
                                    {
                                      _.map(bar.children, (child, childIndex) => (
                                        <li key={childIndex}>
                                          <NavLink to={child.link}>{child.label}</NavLink>
                                        </li>
                                      ))
                                    }
                                  </ul>
                                </div>
                              </div>),
                            )
                          }
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="footer">
                <div className="container">
                  <div className="row">
                    <div className="col-md-12 col-sm-12 col-xs-12">
                      <div className="footer-wrapper">
                        <span className="scroll-top js-scroll-top hidden"><i className="fa fa-angle-up"/></span>
                        <p className="copyright helper center">Copyright &copy; 2018 · Shine Design · All Rights
                          Reserved
                          <br/><a href="http://www.miitbeian.gov.cn/"> 苏ICP备16022318号 </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </footer>
          )
        }
      </ThemeConfig>
    )
  }
}
