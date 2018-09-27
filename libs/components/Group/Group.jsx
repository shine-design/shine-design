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
// import './style'

export default class extends Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        type: PropTypes.oneOf(['button', 'radio', 'checkbox']),
        size: PropTypes.oneOf(['lg', 'sm', 'normal']),
        direction: PropTypes.oneOf(['ver', 'hor']),
        radioDisplay: PropTypes.oneOf(['block', 'inline']),
        isPill: PropTypes.bool,
        isAir: PropTypes.bool
    };

    static defaultProps = {
        type: 'button',
        size: 'normal',
        direction: 'hor',
        radioDisplay: 'block',
        isAir: false,
        isPill: false
    };

    render() {
        const {type} = this.props;
        const {size, direction, isPill, isAir, children} = this.props;
        const {itemDisplay} = this.props;
        return (
            <Fragment>
                {
                    _.isString(type) && _.isEqual(type, 'button') && (
                        <div className={classNames({
                            [`btn-group${direction === 'ver' ? '-vertical' : ''}`]: true,
                            [`btn-group-${size}`]: _.isString(size) && !_.isEqual(size, 'normal'),
                            ['sh-btn-group--pill']: isPill,
                            ['sh-btn-group--air']: isAir,
                        })}>
                            {children}
                        </div>
                    )
                }
                {
                    _.isString(type) && (_.isEqual(type, 'radio') || _.isEqual(type, 'checkbox')) && (
                        <div className={classNames({
                            [`sh-${type}-${itemDisplay === 'block' ? 'list' : 'inline'}`]: _.isString(itemDisplay),
                        })}>
                            {children}
                        </div>
                    )
                }
            </Fragment>
        );
    }
}