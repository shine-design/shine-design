/**
 * @Component 图标组件 - Icon
 * @Type 基础组件
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

// 样式
import './style';

export default class extends Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        className: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.array
        ])
    };

    static defaultProps = {};

    render() {
        const {className, children} = this.props;
        return (
            <Fragment>
                <i className={classNames(...(_.isArray(className) ? className : [className]))}>{children}</i>
            </Fragment>
        );
    }
}