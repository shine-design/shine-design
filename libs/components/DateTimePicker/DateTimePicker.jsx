/**
 * @Component 日期时间选择器 - DateTimePicker
 * @Type 表单
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2018/11/17 20:43
 */

// 核心依赖
import React, {Component, Fragment} from 'react';
import ReactDom from "react-dom";

import * as PropTypes from 'prop-types';

// 第三方依赖库
import classNames from 'classnames'
import _ from 'lodash';
import jQuery from 'jquery';
import '../../plugins/datetimepicker/js/bootstrap-datetimepicker';

// 组件依赖
import Input from '../Input/Input';

// 样式
import './style';

jQuery.fn.datetimepicker.dates['zh-CN'] = {
    days: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六", "星期日"],
    daysShort: ["周日", "周一", "周二", "周三", "周四", "周五", "周六", "周日"],
    daysMin:  ["日", "一", "二", "三", "四", "五", "六", "日"],
    months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
    monthsShort: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
    today: "今天",
    suffix: [],
    meridiem: ["上午", "下午"]
};

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
                todayHighlight: true,
                orientation: "bottom left",
                autoclose: true,
                format: 'yyyy-mm-dd hh:ii',
                language:'zh-CN',
                templates: {
                    leftArrow: '<i class="sh-icon-angle-left"/>',
                    rightArrow: '<i class="sh-icon-angle-right"/>'
                }
            };

            input.datetimepicker(_.extend({}, _defaultConfig, _.omit(_.cloneDeep(this.props), 'children')));
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
            console.error('DateTimePicker 组件仅支持嵌套 type 类型为 \'text\' 的基础输入组件。');
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