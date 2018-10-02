/**
 * @Component 图标组件 - Icon
 * @Type Basic
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2018/9/2 下午2:05
 */

// 核心依赖
import React, {Component, Fragment} from 'react';
import * as PropTypes from 'prop-types';

// 第三方依赖库
import classNames from 'classnames'
import _ from 'lodash';

// 组件依赖
import {COMMON_PROPS_TYPE, COMMON_PROPS_DEFAULT} from '../../config/commonProps';

// 样式
import './style';

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
        const {className, callbacks, attributes, children} = this.props;
        return (
            <Fragment>
                <i className={classNames(...(_.isArray(className) ? className : [className]))} {...callbacks} {...attributes}>{children}</i>
            </Fragment>
        );
    }
}