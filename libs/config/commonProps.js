import * as PropTypes from 'prop-types';

/**
 *  通用Props校验规则
 */
export const COMMON_PROPS_TYPE = {
    attributes: PropTypes.object,
    callbacks: PropTypes.object,
    className: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array
    ])
};

/**
 *  通用Props默认值
 */
export const COMMON_PROPS_DEFAULT = {
    attributes: {},
    callbacks: {},
    className: []
};