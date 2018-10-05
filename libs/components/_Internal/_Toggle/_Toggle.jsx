/**
 * @Component 下拉组件 - _Toggle
 * @Type 内部组件
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2018/10/3 下午6:41
 */

// 核心依赖
import React, {Component, Fragment} from 'react';
import * as PropTypes from 'prop-types';

// 第三方依赖库
import classNames from 'classnames'
import _ from 'lodash';

// 组件依赖
import {COMMON_PROPS_TYPE, COMMON_PROPS_DEFAULT} from '../../../config/commonProps';
import Button from "../../Button/Button";

// 样式

export default class extends Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        ...COMMON_PROPS_TYPE
    };

    static defaultProps = {
        ...COMMON_PROPS_DEFAULT
    };

    render() {
        const {isSplit, className, attributes} = this.props;
        _.isArray(className) && className.push(isSplit ? ['dropdown-toggle', 'dropdown-toggle-split'] : 'dropdown-toggle');
        _.isObject(attributes) && _.assignIn(attributes, {
            'data-toggle': 'dropdown',
            'aria-haspopup': 'true',
            'aria-expanded': 'false'
        });
        return (
            <Fragment>
                <Button {...{
                    ...this.props,
                    className,
                }}/>
            </Fragment>
        );
    }
}