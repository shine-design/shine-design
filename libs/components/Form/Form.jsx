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

// 样式
import './style';

export default class extends Component {
    constructor(props) {
        super([props]);
    }

    static propTypes = {};

    static defaultProps = {};

    render() {
        const {children} = this.props;
        return (
            <Fragment>
                <form className={
                    classNames('sh-form')
                }>
                    {children}
                </form>
            </Fragment>
        );
    }
}