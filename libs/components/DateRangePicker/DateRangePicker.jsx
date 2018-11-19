/**
 * @Component 日期范围选择器 - DateRangePicker
 * @Type 表单
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2018/11/17 23:17
 */

// 核心依赖
import React, {Component, Fragment} from 'react';
import ReactDom from 'react-dom';

import * as PropTypes from 'prop-types';

// 第三方依赖库
import classNames from 'classnames'
import _ from 'lodash';
import jQuery from 'jquery';
import 'bootstrap-daterangepicker';
import moment from 'moment';

// 组件依赖
import Input from '../Input/Input';

// 样式
import './style';

const locale = {
    format: 'YYYY-MM-DD HH:mm:ss A',
    separator: ' -222 ',
    applyLabel: '确定',
    cancelLabel: '取消',
    fromLabel: '起始时间',
    toLabel: '结束时间',
    customRangeLabel: '自定义',
    weekLabel: 'W',
    daysOfWeek: ['日', '一', '二', '三', '四', '五', '六'],
    monthNames: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
    firstDay: 1
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
                timePicker: true,
                locale,
                ranges: {
                    '今日': [moment(), moment()],
                    '昨日': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
                    '最近7日': [moment().subtract(6, 'days'), moment()],
                    '最近30日': [moment().subtract(29, 'days'), moment()],
                    '本月': [moment().startOf('month'), moment().endOf('month')],
                    '上月': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
                }
            };

            input.daterangepicker(_.extend({}, _defaultConfig, _.omit(_.cloneDeep(this.props), 'children')));
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