/*! ReSmenu v0.1.1 by Alessandro Benoit */
(function ($, window, i) {

    'use strict';

    $.fn.ReSmenu = function (options) {

        // Settings
        var s = $.extend({
            menuClass: 'responsive_menu', // Responsive menu class
            selectId: 'resmenu',
            textBefore: false, // Text to add before the mobile menu
            selectOption: false, // First select option
            activeClass: 'current-menu-item', // Active menu li class
            maxWidth: 480, // Size to which the menu is responsive
            prependTo: 'body'
        }, options);

        // Convert the menu to select
        function build_menu(element, select, add) {

            add = add || '';

            $(element).children('li').each(function () {

                var url = $(this).children('a').attr('href');

                if (url === undefined || url === false || url === '#' || url.length === 0) {
                    url = '';
                }

                $('<option/>', {
                    value: url,
                    html: add + $(this).children('a').text(),
                    disabled: (!url) ? true : false,
                    selected: ($(this).hasClass(s.activeClass) && !s.selectOption) ? true : false
                }).appendTo(select);

                // Submenu
                if ($(this).children('ul').length > 0) {
                    build_menu($(this).children('ul'), select, add + "&nbsp;&nbsp;");
                }

            });

        }

        // Build the responsive menu container and fill it with build_menu()
        function create_responsive_menus(element, i) {

            var responsive_menu = $('<div/>', {
                class: s.menuClass
            }).prependTo(s.prependTo),
                select = $('<select/>', {
                    id: s.selectId + i
                }).appendTo(responsive_menu);

            // Bind change to select
            $(select).bind('change', function () {
                if ($(this).val().length > 0) {
                    window.location.href = $(this).val();
                }
            });

            // Label
            if (s.textBefore) {
                $('<label/>', {
                    html: s.textBefore,
                    for: s.selectId + i
                }).prependTo(responsive_menu);
            }

            // First option
            if (s.selectOption) {
                $('<option/>', {
                    text: s.selectOption,
                    value: ''
                }).appendTo(select);
            }

            // Build select the menu
            build_menu($(element), select);

            return responsive_menu;

        }

        // Let's do it
        this.each(function () {

            var element = $(this),
                responsive_menu;

            i += 1;

            // The responsive menu is built if the page size is or goes under maxWidth
            function handle_menu() {

                if ($(window).width() > parseInt(s.maxWidth, 10)) {

                    $(element).show();

                    if (responsive_menu) {
                        $(responsive_menu).hide();
                    }

                } else {

                    $(element).hide();

                    if (responsive_menu) {
                        $(responsive_menu).show();
                    } else {
                        responsive_menu = create_responsive_menus(element, i);
                    }

                }

            }

            // At first
            handle_menu();

            // Then at the resizing of the page
            $(window).resize(function () {
                handle_menu();
            });

        });

    };
})(jQuery, this, 0);