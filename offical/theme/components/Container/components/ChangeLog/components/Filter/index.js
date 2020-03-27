import _ from 'lodash';
import React, {Component} from 'react';
import {ThemeConfig} from "docz";
import jQuery from "jquery";

export default class Filter extends Component {
  componentDidMount() {
    this._initChangelog();
    this._initScroll();
  }

  _initChangelog() {
    const changelogs = $('.js-changelog');
    changelogs.each(function () {
      const changelog = $(this);
      const changelogItems = changelog.find('.js-changelog-item');

      const changelogFilter = changelog.find('.js-changelog-input').instaFilta({
        scope: '.js-changelog',
        targets: '.js-changelog-update-description',
      });

      const changelogCheckBox = changelog.find('.js-changelog-checkbox');

      changelogItems.each(function () {
        const changelogItem = $(this);
        const switchBtn = changelogItem.find('.js-changelog-switch');
        const fileFilters = changelogItem.find('.js-changelog-file-filter');
        const filesScope = changelogItem.find('.js-changelog-files-scope').instaFilta({
          targets: '.js-changelog-file',
          scope: '.js-changelog-files-scope',
        });

        fileFilters.click(function () {
          const filters = [];
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
        const checkedCategories = [];

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
    const buttons = $('.js-scroll-to');
    buttons.each(function () {
      const button = $(this);
      const target = button.data('target');
      const speed = button.data('speed') ? button.data('speed') : 1000;
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
      const header = $('.js-header-fixed');
      const headerWrapper = $('<div class="header-fixed-wrapper">');
      const pub = {};

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
      const updateHeader = function (helper) {
        if ($(window).scrollTop() === 0) {
          header.removeClass('header-fixed').addClass(helper);
        } else {
          header.addClass('header-fixed').removeClass(helper);
        }
      };

      const init = function () {
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
              <input type="text" className="changelog-input js-changelog-input" />
              <input
                id="changelog-filter-feature"
                className="js-changelog-checkbox changelog-checkbox"
                type="checkbox"
                value="feature"
              />
              <label
                className="changelog-checkbox-label"
                htmlFor="changelog-filter-feature"
              >新特性
              </label>
              <input
                id="changelog-filter-improvement"
                className="js-changelog-checkbox changelog-checkbox"
                type="checkbox"
                value="improvement"
              />
              <label
                className="changelog-checkbox-label"
                htmlFor="changelog-filter-improvement"
              >修复更新
              </label>
              <input
                id="changelog-filter-bug-fix"
                className="js-changelog-checkbox changelog-checkbox"
                type="checkbox"
                value="bug-fix"
              />
              <label
                className="changelog-checkbox-label"
                htmlFor="changelog-filter-bug-fix"
              >移除
              </label>
              <div className="changelog-scroll-to"> 查看版本
                <i className="pe-7s-angle-down" />
                <ul className="changelog-scroll-to-list">
                  {
                    _.map(version, (item, index) => (
                      <li className="changelog-scroll-to-list-item" key={index}>
                        <a
                          className="js-scroll-to"
                          data-target={'#' + item.id}
                        >{item.header.version}
                        </a>
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
