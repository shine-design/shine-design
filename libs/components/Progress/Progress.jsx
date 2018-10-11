/**
 * @Component 进度条 - Progress
 * @Type 数据
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2018/9/28 下午2:59
 */

// 核心依赖
import React, {Component, Fragment} from 'react';
import * as PropTypes from 'prop-types';
import {
    COMMON_PROPS_TYPE,
    COMMON_PROPS_DEFAULT
} from '../../config/commonProps';

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
        ...COMMON_PROPS_TYPE,
        size: PropTypes.oneOf(['md', 'sm', 'lg']),
        itemList: PropTypes.arrayOf(PropTypes.shape({
            value: PropTypes.number,
            isStriped: PropTypes.bool,
            isAnimated: PropTypes.bool,
            ...COMMON_PROPS_TYPE
        }))
    };

    static defaultProps = {
        ...COMMON_PROPS_DEFAULT,
        size: 'md',
        itemList: []
    };

    render() {
        const {size, itemList, className, attributes} = this.props;
        const _progressClass = classNames(
            'progress',
            {
                [`sh-progress--${size}`]: _.isString(size) && !_.isEqual(size, 'md')
            },
            ...(
                _.isArray(className) ? className : [className]
            )
        );
        return (
            <Fragment>
                <div className={_progressClass} {...attributes}>
                    {
                        _.isArray(itemList) && itemList.map(item => {
                            const {value, isStriped, isAnimated, className} = item;
                            const _itemClass = classNames(
                                'progress-bar',
                                {
                                    'progress-bar-striped': isStriped,
                                    'progress-bar-animated': isAnimated
                                },
                                ...(
                                    _.isArray(className) ? className : [className]
                                )
                            );

                            return (
                                <div
                                    className={_itemClass}
                                    role="progressbar"
                                    style={{width: `${value}%`}}
                                    aria-valuenow={value}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                />
                            )
                        })
                    }
                </div>
            </Fragment>
        );
    }
}