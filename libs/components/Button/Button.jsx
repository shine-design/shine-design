/**
 * @Component 按钮 - Button
 * @Type Base
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2018/9/5 下午1:48
 */

// 核心依赖
import React, {Component, Fragment} from 'react';
import * as PropTypes from 'prop-types';

// 第三方依赖库
import classNames from 'classnames'
import _ from 'lodash';

// 组件依赖

// 样式
import './style';

export default class extends Component {
    constructor(props) {
        super([props]);
    }

    static propTypes = {
        type: PropTypes.oneOf(['submit', 'button', 'reset']),
        size: PropTypes.oneOf(['lg', 'sm'])
    };

    static defaultProps = {
        type: 'button'
    };

    render() {
        const {type, value, color, gradient: {from, to}, isWide, isBlock, size, active, disabled, className} = this.props;
        return (
            <Fragment>
                <button type={type} className={classNames(
                    'btn', 'sh-btn',
                    {
                        [`btn-${color}`]: _.isString(color),
                        [`sh-btn--gradient-from-${from}`]: _.isString(from) && _.isString(to),
                        [`sh-btn--gradient-to-${to}`]: _.isString(from) && _.isString(to),
                        [`btn-${size}`]: _.isString(size),
                        'sh-btn--wide': isWide,
                        'btn-block': isBlock,
                        active, disabled
                    },
                    ...(
                        _.isArray(className) ? className : [className]
                    )
                )}>{value}</button>
            </Fragment>
        );
    }
}