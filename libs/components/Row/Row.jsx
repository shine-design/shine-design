/**
 * @Component 栅格系统 - Row
 * @Type Basic
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2018/8/31 下午1:58
 */

// 核心依赖
import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';

// 第三方依赖库
import classNames from 'classnames'
import _ from 'lodash';

// 组件依赖

// 样式
import './style';

export default class extends Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        mode: PropTypes.oneOf(
            ['general', 'desktop', 'desktop-and-tablet', 'tablet', 'tablet-and-mobile', 'mobile']
        ).isRequired,
        direction: PropTypes.oneOf(
            ['ver', 'hor']
        ).isRequired,
        justify: PropTypes.oneOf(
            ['flex-start', 'flex-end', 'center', 'space-between', 'space-around']
        ),
        align: PropTypes.oneOf(
            ['flex-start', 'flex-end', 'center', 'baseline', 'stretch']
        ),
        alignContent: PropTypes.oneOf(
            ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'stretch']
        ),
        wrap: PropTypes.oneOf(
            ['nowrap', 'wrap-reverse', 'wrap']
        )
    };

    static defaultProps = {
        mode: 'general',
        direction: 'hor'
    };

    render() {
        const me = this;
        const {mode, direction, justify, wrap, align, alignContent, className, children} = me.props;

        return (
            <Fragment>
                <div className={
                    classNames('m-grid', 'row', {
                            [`m-grid--${mode}`]: mode !== 'general',
                            [`m-grid--${direction}${mode !== 'general' ? '-' + mode : ''}`]: true,
                            [`m-grid--${justify}`]: _.isString(justify),
                            [`m-grid--${wrap}`]: _.isString(wrap),
                            [`m-grid--align-item-${align}`]: _.isString(align),
                            [`m-grid--align-content-${alignContent}`]: _.isString(alignContent)
                        },
                        ...(
                            _.isArray(className) ? className : [className]
                        )
                    )
                }>{children}</div>
            </Fragment>
        );
    }
}
