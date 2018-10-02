/**
 * @Component 数据 - Table
 * @Type 表格
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2018/10/1 下午6:05
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
        super(props);
    }

    static propTypes = {};

    static defaultProps = {};

    render() {
        const {columns, dataSource} = this.props;
        return (
            <Fragment>

            </Fragment>
        );
    }
}