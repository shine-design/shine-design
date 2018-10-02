/**
 * @Component 表单容器 - Form
 * @Type 表单
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2018/9/17 下午5:16
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
        const {className, attributes, children} = this.props;
        return (
            <Fragment>
                <form className={
                    classNames(
                        'sh-form',
                        ...(
                            _.isArray(className) ? className : [className]
                        )
                    )}
                      {...attributes}
                >
                    {children}
                </form>
            </Fragment>
        );
    }
}