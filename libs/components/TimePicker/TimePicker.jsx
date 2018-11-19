/**
 * @Component 时间选择器 - TimePicker
 * @Type 表单
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2018/11/17 21:54
 */

// 核心依赖
import React, {Component, Fragment} from 'react';
import ReactDom from "react-dom";

import * as PropTypes from 'prop-types';

// 第三方依赖库
import classNames from 'classnames'
import _ from 'lodash';
import jQuery from 'jquery';
import '../../plugins/timepicker/js/bootstrap-timepicker';

// 组件依赖
import Input from '../Input/Input';

// 样式
import './style';

export default class extends Component {
    constructor(props) {
        super(props);

        this.child = React.createRef();

        this.findChildDom = this.findChildDom.bind(this);

    }

    componentDidMount() {
        const childDom = this.findChildDom();

        if (!_.isNull(childDom)) {
            const input = jQuery(childDom).find('input');

            // 默认配置项
            const _defaultConfig = {
                defaultTime: '',
                format: 'HH:mm:ss',
                icons: {
                    up: 'sh-icon-angle-up',
                    down: 'sh-icon-angle-down'
                },
            };

            input.timepicker(_.extend({}, _defaultConfig, _.omit(_.cloneDeep(this.props), 'children')));
        }
    }

    static propTypes = {};

    static defaultProps = {};

    findChildDom() {
        const {children} = this.props;

        if (!_.isUndefined(children) && _.isEqual(children.type, Input) && (_.isEqual(children.props.type, 'text') || _.isUndefined(children.props.type))) {
            const child = this.child.current;
            if (child) {
                return ReactDom.findDOMNode(child);
            }
        }
        return null;
    }

    render() {
        const {children} = this.props;

        if (_.isUndefined(children) || !_.isEqual(children.type, Input) || (!_.isUndefined(children.props.type) && !_.isEqual(children.props.type, 'text'))) {
            console.error('TimePicker 组件仅支持嵌套 type 类型为 \'text\' 的基础输入组件。');
        }
        return (
            <Fragment>
                {
                    !_.isUndefined(children)
                    && React.cloneElement(children, {ref: this.child})}
            </Fragment>
        );
    }
}