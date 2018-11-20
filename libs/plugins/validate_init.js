/**
 * 表单验证默认值
 */

import jQuery from "jquery";

jQuery.validator.setDefaults({
    errorElement: 'div',
    errorClass: 'form-control-feedback',
    focusInvalid: false,
    ignore: "",

    errorPlacement: function (error, element) {
        const group = jQuery(element).closest('.sh-form__group-sub').length > 0 ? jQuery(element).closest('.sh-form__group-sub') : jQuery(element).closest('.sh-form__group');
        const help = group.find('.sh-form__help');

        if (group.find('.form-control-feedback').length !== 0) {
            return;
        }

        if (help.length > 0) {
            help.before(error);
        } else {
            if (jQuery(element).closest('.input-group').length > 0) {
                jQuery(element).closest('.input-group').after(error);
            } else {
                if (jQuery(element).is(':checkbox')) {
                    jQuery(element).closest('.m-checkbox').find('>span').after(error);
                } else {
                    jQuery(element).after(error);
                }
            }
        }
    },
    highlight: function (element) {
        const group = jQuery(element).closest('.sh-form__group-sub').length > 0 ? jQuery(element).closest('.sh-form__group-sub') : jQuery(element).closest('.sh-form__group');
        group.addClass('has-danger');
    },
    unhighlight: function (element) {
        const group = jQuery(element).closest('.sh-form__group-sub').length > 0 ? jQuery(element).closest('.sh-form__group-sub') : jQuery(element).closest('.sh-form__group');

        group.removeClass('has-danger');
    },
    success: function (label, element) {
        const group = jQuery(label).closest('.sh-form__group-sub').length > 0 ? jQuery(label).closest('.sh-form__group-sub') : jQuery(label).closest('.sh-form__group');

        // group.addClass('has-success').removeClass('has-danger');
        group.removeClass('has-danger');
        group.find('.form-control-feedback').remove();
    }
});