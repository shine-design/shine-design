/**
 * @Component 按钮 - Button
 * @Type 按钮组件
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2018/9/5 下午1:48
 */

// 核心依赖
import React, {Component, Fragment} from 'react';
import * as PropTypes from 'prop-types';
import {
    COMMON_PROPS_TYPE,
    COMMON_PROPS_DEFAULT
} from '../../config/commonProps';
import colorType from '../../config/color';

// 第三方依赖库
import classNames from 'classnames'
import _ from 'lodash';

// 组件依赖
import Icon from '../Icon/Icon';

// 样式
import './style';

export default class extends Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        ...COMMON_PROPS_TYPE,
        type: PropTypes.oneOf(['submit', 'button', 'reset']),
        btnStyle: PropTypes.oneOf(['square', 'pill', 'normal']),
        color: PropTypes.oneOf(_.concat(colorType, 'default', colorType.map(color => `outline-${color}`))),
        gradient: PropTypes.shape({
            from: PropTypes.oneOf(colorType),
            to: PropTypes.oneOf(colorType)
        }),
        size: PropTypes.oneOf(['lg', 'sm', 'md']),
        iconName: PropTypes.string,
        isWide: PropTypes.bool,
        isBlock: PropTypes.bool,
        isActive: PropTypes.bool,
        isDisabled: PropTypes.bool,
        isAir: PropTypes.bool,
        isRetina: PropTypes.bool,
        _isNoClass: PropTypes.bool
    };

    static defaultProps = {
        ...COMMON_PROPS_DEFAULT,
        type: 'button',
        color: 'default',
        btnStyle: 'normal',
        size: 'md',
        isWide: false,
        isBlock: false,
        isActive: false,
        isDisabled: false,
        isAir: false,
        isRetina: false,
        _isNoClass: false
    };

    render() {
        const {type, value, btnStyle, color, gradient, size, isWide, isBlock, isActive, isDisabled, isAir, isRetina, iconName, callbacks, className, attributes, _isNoClass} = this.props;
        const {from, to} = gradient || {};

        const _className = _isNoClass ? classNames(
            ...(
                _.isArray(className) ? className : [className]
            )
        ) : classNames(
            'btn', 'sh-btn',
            {
                [`btn-${color}`]: _.isString(color),
                [`sh-btn--gradient-from-${from || ''}`]: _.isString(from) && _.isString(to),
                [`sh-btn--gradient-to-${to || ''}`]: _.isString(from) && _.isString(to),
                [`sh-btn--${btnStyle}`]: _.isString(btnStyle) && !_.isEqual(btnStyle, 'normal'),
                [`btn-${size}`]: _.isString(size) && !_.isEqual(size, 'md'),
                'sh-btn--icon': _.isString(iconName),
                'sh-btn--wide': isWide,
                'sh-btn--air': isAir,
                'sh-btn--outline-2x': isRetina,
                'btn-block': isBlock,
                'active': isActive,
                'disabled': isDisabled
            },
            ...(
                _.isArray(className) ? className : [className]
            )
        );

        if (isDisabled) _.merge(attributes, {disabled: true});

        return (
            <Fragment>
                <button
                    type={type}
                    {...callbacks}
                    {...attributes}
                    className={_className}>
                    {_.isString(iconName) ? (
                        <Fragment>
                            {
                                _.isUndefined(value) ? (
                                    <Icon className={iconName}/>
                                ) : (
                                    <span>
                                        <Icon className={iconName}/>
                                        <span>{value}</span>
                                    </span>
                                )
                            }
                        </Fragment>
                    ) : value}
                </button>
            </Fragment>
        );
    }
}