/**
 * @Component 下拉按钮组 - Dropdown
 * @Type 按钮
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2018/10/3 下午12:13
 */

// 核心依赖
import React, {Component, Fragment} from 'react';
import * as PropTypes from 'prop-types';

// 第三方依赖库
import classNames from 'classnames'
import _ from 'lodash';

// 组件依赖
import {COMMON_PROPS_TYPE, COMMON_PROPS_DEFAULT} from '../../config/commonProps';
import Group from '../Group/Group';
import Button from '../Button/Button';
import _Toggle from '../_Internal/_Toggle/_Toggle';
import 'bootstrap/js/src/dropdown';

// 样式
import './style';

export default class extends Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        ...COMMON_PROPS_TYPE,
        button: PropTypes.object,
        direction: PropTypes.oneOf(['up', 'down', 'left', 'right']),
        align: PropTypes.oneOf(['left', 'right']),
        isSplit: PropTypes.bool,
        items: PropTypes.array
    };

    static defaultProps = {
        ...COMMON_PROPS_DEFAULT,
        button: {
            value: 'Dropdown'
        },
        align: 'left',
        direction: 'down',
        items: [],
        isSplit: false
    };

    render() {
        const {
            button,
            isSplit,
            items,
            direction,
            align,
            className,
            attributes
        } = this.props;

        const {color} = button;

        return (
            <Fragment>
                <Group
                    type="dropDown"
                    dropDirection={direction}
                    attributes={attributes}
                    className={className}
                >
                    {
                        isSplit
                            ? (<Fragment>
                                <Button {...button}/>
                                <_Toggle {...{
                                    color,
                                    isSplit
                                }} />
                            </Fragment>)
                            : (<Fragment>
                                <_Toggle {...{...button, isSplit}} />
                            </Fragment>)
                    }
                    {
                        _.isArray(items) && items.length !== 0 && (
                            <div className={
                                classNames(
                                    "dropdown-menu",
                                    {
                                        [`dropdown-menu-${align}`]: _.isString(align)
                                    }
                                )
                            }>
                                {
                                    items.map((item, index) => {
                                        const {
                                            type = 'button',
                                            value,
                                            isDisabled = false,
                                            isActive = false,
                                            className = [],
                                            callbacks = {},
                                            attributes = {}
                                        } = item;
                                        return (
                                            <Fragment key={index}>
                                                {
                                                    _.isEqual(type, 'button') && (<Button {...{
                                                        className: classNames(
                                                            'dropdown-item',
                                                            {
                                                                'disabled': isDisabled,
                                                                'active': isActive
                                                            },
                                                            ...(
                                                                _.isArray(className) ? className : [className]
                                                            )
                                                        ),
                                                        _isNoClass: true,
                                                        value,
                                                        isDisabled,
                                                        isActive,
                                                        attributes,
                                                        callbacks
                                                    }}/>)
                                                }
                                                {_.isEqual(type, 'header') && (
                                                    <h6 className={classNames(
                                                        'dropdown-header',
                                                        ...(
                                                            _.isArray(className) ? className : [className]
                                                        ))}>{value}</h6>)}
                                                {_.isEqual(type, 'divider') && (<div className={classNames(
                                                    'dropdown-divider',
                                                    ...(
                                                        _.isArray(className) ? className : [className]
                                                    )
                                                )}/>)}
                                            </Fragment>
                                        )
                                    })
                                }
                            </div>
                        )
                    }
                </Group>
            </Fragment>
        );
    }
}