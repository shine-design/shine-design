import _ from 'lodash';
import React, {Component} from 'react';
import {ThemeConfig} from "docz";

export default class Filter extends Component {
  componentDidMount() {
    // this._initChangelog();
    this._initScroll();
  }

  _initChangelog() {
    let changelogs = $('.js-changelog');
    changelogs.each(function () {
      let changelog = $(this);
      let changelogItems = changelog.find('.js-changelog-item');

      let changelogFilter = changelog.find('.js-changelog-input').instaFilta({
        scope: '.js-changelog',
        targets: '.js-changelog-update-description',
      });

      let changelogCheckBox = changelog.find('.js-changelog-checkbox');

      changelogItems.each(function () {
        let changelogItem = $(this);
        let switchBtn = changelogItem.find('.js-changelog-switch');
        let fileFilters = changelogItem.find('.js-changelog-file-filter');
        let filesScope = changelogItem.find('.js-changelog-files-scope').instaFilta({
          targets: '.js-changelog-file',
          scope: '.js-changelog-files-scope',
        });

        fileFilters.click(function () {
          let filters = [];
          $(this).toggleClass('inactive');

          fileFilters.each(function () {
            if (!$(this).hasClass('inactive')) {
              filters.push($(this).data('type'));
            }
          });

          filesScope.filterCategory(filters);
        });

        switchBtn.click(function (e) {
          e.preventDefault();
          changelogItem.toggleClass('changelog-view-files');
        });
      });

      changelogCheckBox.on('change', function () {
        let checkedCategories = [];

        changelogCheckBox.each(function () {
          if ($(this).prop('checked')) {
            checkedCategories.push($(this).val());
          }
        });

        changelogFilter.filterCategory(checkedCategories);
      });


    });

  }

  _initScroll() {
    let buttons = $('.js-scroll-to');
    buttons.each(function () {
      let button = $(this);
      let target = button.data('target');
      let speed = button.data('speed') ? button.data('speed') : 1000;
      if (typeof target !== 'undefined' && $(target).length) {
        button.click(function (event) {
          event.preventDefault();
          $('html, body').animate({
            scrollTop: $(target).first().offset().top - HeaderFixed.getOffset(),
          }, speed);
        });
      }
    });
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
          }
          else if (header.hasClass('small')) {
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
      <ThemeConfig>
        {
          ({themeConfig: {version}}) => (
            <div className="changelog-filters">
              <input type="text" className="changelog-input js-changelog-input"/>
              <input id="changelog-filter-feature" className="js-changelog-checkbox changelog-checkbox"
                     type="checkbox" value="feature"/>
              <label className="changelog-checkbox-label"
                     htmlFor="changelog-filter-feature">新特性</label>
              <input id="changelog-filter-improvement"
                     className="js-changelog-checkbox changelog-checkbox" type="checkbox"
                     value="improvement"/>
              <label className="changelog-checkbox-label"
                     htmlFor="changelog-filter-improvement">修复更新</label>
              <input id="changelog-filter-bug-fix"
                     className="js-changelog-checkbox changelog-checkbox" type="checkbox"
                     value="bug-fix"/>
              <label className="changelog-checkbox-label"
                     htmlFor="changelog-filter-bug-fix">移除</label>
              <div className="changelog-scroll-to"> 查看版本
                <i className="pe-7s-angle-down"/>
                <ul className="changelog-scroll-to-list">
                  {
                    _.map(version, (item, index) => (
                      <li className="changelog-scroll-to-list-item" key={index}>
                        <a className="js-scroll-to"
                           data-target={'#' + item.id}>{item.header.version}</a>
                      </li>
                    ))
                  }
                </ul>
              </div>
            </div>
          )
        }
      </ThemeConfig>
    )
  }
}
