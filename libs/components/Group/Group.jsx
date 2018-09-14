/**
 * @Component 按钮组 - Group
 * @Type 基础组件
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2018/9/14 上午11:08
 */

// 核心依赖
import React, {Component, Fragment} from 'react';
import * as PropTypes from 'prop-types';

// 第三方依赖库
import classNames from 'classnames'
import _ from 'lodash';

// 组件依赖

// 样式
import './style'

export default class extends Component {
    constructor(props) {
        super([props]);
    }

    static propTypes = {
        size: PropTypes.oneOf(['lg', 'sm', 'normal']),
        direction: PropTypes.oneOf(['ver', 'hor']),
        isPill: PropTypes.bool,
        isAir: PropTypes.bool
    };

    static defaultProps = {
        size: 'normal',
        direction: 'hor',
        isAir: false
    };

    render() {
        const {size, direction, isPill, isAir, children} = this.props;
        return (
            <Fragment>
                <div className={classNames({
                    [`btn-group${direction === 'ver' ? '-vertical' : ''}`]: true,
                    [`btn-group-${size}`]: _.isString(size) && !_.isEqual(size, 'normal'),
                    ['sh-btn-group--pill']: isPill,
                    ['sh-btn-group--air']: isAir,
                })}>
                    {children}
                </div>
            </Fragment>
        );
    }
}