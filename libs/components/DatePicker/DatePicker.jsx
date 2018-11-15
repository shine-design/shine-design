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
// import 'bootstrap-datepicker/js/locales/bootstrap-datepicker.zh-CN'

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
        console.log(childDom);
        if (!_.isNull(childDom)) {
            const input = jQuery(childDom).find('input');

            // 默认配置项
            const _defaultConfig = {
                todayHighlight: true,
                orientation: "bottom left",
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