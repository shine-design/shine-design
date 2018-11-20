/**
 * @Component 表单容器 - Form
 * @Type 表单
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2018/9/17 下午5:16
 */

// 核心依赖
import React, {Component, Fragment} from 'react';
import ReactDom from "react-dom";
import * as PropTypes from 'prop-types';
import {
    COMMON_PROPS_TYPE,
    COMMON_PROPS_DEFAULT
} from '../../config/commonProps';

// 第三方依赖库
import classNames from 'classnames'
import _ from 'lodash';
import jQuery from 'jquery';
import 'jquery-validation';
import 'jquery-validation/dist/localization/messages_zh';
import 'jquery-validation/dist/additional-methods';
import '../../plugins/validate_init';

// 组件依赖
import Alert from '../Alert/Alert';
import SymbolInput from '../SymbolInput/SymbolInput';
import Input from '../Input/Input';
import DatePicker from '../DatePicker/DatePicker';
import DateTimePicker from '../DateTimePicker/DateTimePicker';
import TimePicker from '../TimePicker/TimePicker';
import DateRangePicker from '../DateRangePicker/DateRangePicker';

// 样式
import './style';

export default class extends Component {
    constructor(props) {
        super(props);

        this.formRef = React.createRef();
        this.alertRef = React.createRef();

        this.onFetchProps = this.onFetchProps.bind(this);
        this.onValidate = this.onValidate.bind(this);
    }

    componentDidMount() {
        this.onValidate(); // 表单校验
    }

    static propTypes = {
        ...COMMON_PROPS_TYPE,
        validate: PropTypes.object
    };

    static defaultProps = {
        ...COMMON_PROPS_DEFAULT,
        validate: {}
    };

    onValidate() {
        const {validate, children} = this.props;
        const formRef = this.formRef.current;
        const {
            isValidate = true, // 是否开启表单校验
            isDebug = false, // 是否进入debug模式
            rules = {}, // 自定义表单校验规则
            messages = {}, // 自定义表单校验失败信息
            ignore = '', // 忽略校验项
            onError, // 设置错误渲染函数
            onSuccess, // 表单校验通过函数（单个字段）
            onShowErrors, // 需要手动渲染错误提示。
            onInvalidHandler, // 表单校验不通过函数，无需手动渲染错误提示
            onSubmit, // 表单校验通过后提交函数
            attributes // 其他自定义属性
        } = validate;

        if (isValidate && formRef) {
            const _dom = ReactDom.findDOMNode(formRef);
            const _alert = ReactDom.findDOMNode(this.alertRef.current);
            const _rules = [];
            const _messages = [];

            _.forEach(_.isArray(children) ? children : [children], _child => {
                const {name, validate} = this.onFetchProps(_child);

                if ((!_.isUndefined(name) && !_.isUndefined(validate))) {
                    const _rule = [];
                    const _message = [];
                    _.forOwn(validate, function (result, key) {
                        if (_.isObject(result) && !_.isFunction(result)) {
                            if (_.isFunction(result.value)) {
                                jQuery.validator.addMethod(key, result.value, result.message);
                                _rule.push({[key]: result.params || true});
                            } else {
                                !_.isUndefined(result.value) && _rule.push({[key]: result.value});
                                !_.isUndefined(result.message) && _message.push({[key]: result.message});
                            }
                        } else {
                            if (_.isFunction(result)) {
                                jQuery.validator.addMethod(key, result, '当前字段不符合校验规则');
                                _rule.push({[key]: true});
                            } else {
                                _rule.push({[key]: result});
                            }
                        }
                    });
                    _rule.length !== 0 && _rules.push({[name]: _.assignIn({}, ..._rule)});
                    _message.length !== 0 && _messages.push({[name]: _.assignIn({}, ..._message)});
                }
            });

            jQuery(_dom).validate({
                rules: _.assignIn({}, _.assignIn({}, ..._rules), rules),
                messages: _.assignIn({}, _.assignIn({}, ..._messages), messages),
                errorPlacement: onError,
                success: onSuccess,
                showErrors: onShowErrors,
                debug: isDebug,
                submitHandler: form => {
                    jQuery(_alert).addClass('sh--hide').hide();
                    _.isFunction(onSubmit) && onSubmit(form);
                },
                invalidHandler: onInvalidHandler || (() => {
                    jQuery(_alert).removeClass('sh--hide').show();
                }),
                ...attributes
            });
        }
    }

    onFetchProps(child) {
        switch (child.type) {
            case DatePicker:
            case DateTimePicker:
            case TimePicker:
            case DateRangePicker:
                if (child.props.children.type === Input) {
                    return child.props.children.props;
                }
                return {};
            case SymbolInput:
                return child.props.input;
            default:
                return child.props;
        }
    }

    render() {
        const {validate, className, attributes, children} = this.props;
        const {isValidate} = validate;
        return (
            <Fragment>
                <form ref={this.formRef} className={
                    classNames(
                        'sh-form',
                        'sh-form--fit',
                        'sh-form--state',
                        ...(
                            _.isArray(className) ? className : [className]
                        )
                    )}
                      {...attributes}
                >
                    {
                        isValidate && (
                            <div ref={this.alertRef} className={
                                classNames('sh-form__content', 'sh--hide')
                            }>
                                <Alert {...{
                                    color: 'danger',
                                    title: '校验失败!  ',
                                    isAir: true,
                                    message: '当前表单部分字段不符合校验规则，请完善后重新提交！',
                                    iconName: 'sh-icon-warning'
                                }}/>
                            </div>
                        )
                    }
                    {children}
                </form>
            </Fragment>
        );
    }
}