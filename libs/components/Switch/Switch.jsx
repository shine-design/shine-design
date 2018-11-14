/**
 * @Component 开关 - Switch
 * @Type 表单
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2018/11/14 16:20
 */

// 核心依赖
import React, {Component, Fragment} from 'react';
import * as PropTypes from 'prop-types';
import {
    COMMON_PROPS_DEFAULT,
    COMMON_PROPS_TYPE
} from "../../config/commonProps";

// 第三方依赖库
import classNames from 'classnames'
import _ from 'lodash';

// 组件依赖
import Input from '../Input/Input';
// 样式
import './style';

export default class extends Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        ...COMMON_PROPS_TYPE,
        name: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ]),
        size: PropTypes.oneOf(['sm', 'md', 'lg']),
        bgColor: PropTypes.oneOf(_.concat(require('../../config/color').default, 'default')),
        isReadOnly: PropTypes.bool,
        isShowIcon: PropTypes.bool,
        isChecked: PropTypes.bool,
        isOutline: PropTypes.bool,
        isDisabled: PropTypes.bool,
    };

    static defaultProps = {
        ...COMMON_PROPS_DEFAULT,
        size: 'md',
        bgColor: 'default',
        isReadOnly: false,
        isShowIcon: false,
        isChecked: false,
        isOutline: false,
        isDisabled: false
    };

    render() {

        return (
            <Fragment>
                <Input type="switch" {...this.props}/>
            </Fragment>
        );
    }
}