/**
 * @Component 日期选择器 - DatePicker
 * @Type 表单
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2018/11/15 10:44
 */

// 核心依赖
import React, {Component, Fragment} from 'react';
import ReactDom from "react-dom";

import * as PropTypes from 'prop-types';

// 第三方依赖库
import classNames from 'classnames'
import _ from 'lodash';
import jQuery from 'jquery';
import 'bootstrap-datepicker';

// 组件依赖
import Input from '../Input/Input';

jQuery.fn.datepicker.dates['zh-CN'] = {
    days: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
    daysShort: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
    daysMin: ["日", "一", "二", "三", "四", "五", "六"],
    months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
    monthsShort: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
    today: "今日",
    clear: "清除",
    format: "yyyy年mm月dd日",
    titleFormat: "yyyy年mm月",
    weekStart: 1
};

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
        console.log(childDom);
        if (!_.isNull(childDom)) {
            const input = jQuery(childDom).find('input');

            // 默认配置项
            const _defaultConfig = {
                todayHighlight: true,
                orientation: "bottom left",
                autoclose: true,
                format: 'yyyy-mm-dd',
                language: 'zh-CN',
                templates: {
                    leftArrow: '<i class="sh-icon-angle-left"/>',
                    rightArrow: '<i class="sh-icon-angle-right"/>'
                }
            };

            input.datepicker(_.extend({}, _defaultConfig, _.omit(_.cloneDeep(this.props), 'children')));
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
            console.error('DatePicker 组件仅支持嵌套 type 类型为 \'text\' 的基础输入组件。');
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