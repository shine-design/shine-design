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
// 样式
import './style';

export default class extends Component {
    constructor(props) {
        super(props);
        this.formRef = React.createRef();
        this.alertRef = React.createRef();
    }

    componentDidMount() {
        const {validate, onSubmit, children} = this.props;
        const {
            isDebug = false,
            rules = {},
            messages = {},
            ignore = '',
            onErrorPlacement,
            onSuccess,
            onErrors, // 需要手动渲染错误提示，验证不通过时使用
            onInvalidHandler // 无需手动渲染错误提示，验证不通过时使用
        } = validate;
        const formRef = this.formRef.current;

        if (formRef) {
            const _dom = ReactDom.findDOMNode(formRef);
            const _alert = ReactDom.findDOMNode(this.alertRef.current);
            const _rules = [];
            const _messages = [];

            _.forEach(_.isArray(children) ? children : [children], _child => {
                const {name, validate} = _child.props;
                if ((!_.isUndefined(name) && !_.isUndefined(validate))) {
                    const _rule = [];
                    const _message = [];
                    _.forOwn(validate, function (result, key) {
                        if (_.isObject(result)) {
                            !_.isUndefined(result.value) && _rule.push({[key]: result.value});
                            !_.isUndefined(result.message) && _message.push({[key]: result.message});
                        } else {
                            _rule.push({[key]: result});
                        }
                    });
                    _rule.length !== 0 && _rules.push({[name]: _.assignIn({}, ..._rule)});
                    _message.length !== 0 && _messages.push({[name]: _.assignIn({}, ..._message)});
                }
            });

            const _ruleConfig = _.assignIn({}, ..._rules);
            const _messageConfig = _.assignIn({}, ..._messages);

            jQuery(_dom).validate({
                rules: _.assignIn({}, _ruleConfig, rules),
                messages: _.assignIn({}, _messageConfig, messages),
                errorPlacement: onErrorPlacement,
                success: onSuccess,
                showErrors: onErrors,
                debug: isDebug,
                submitHandler: onSubmit,
                invalidHandler: _.isFunction(onInvalidHandler) ? onInvalidHandler : (() => {
                    jQuery(_alert).removeClass('sh--hide').show();
                })
            });

            console.log(jQuery(_dom).valid());
        }
    }

    static propTypes = {
        ...COMMON_PROPS_TYPE,
        validate: PropTypes.object
    };

    static defaultProps = {
        ...COMMON_PROPS_DEFAULT,
        validate: {}
    };

    render() {
        const {className, attributes, children} = this.props;
        return (
            <Fragment>
                <form ref={this.formRef} className={
                    classNames(
                        'sh-form',
                        'sh-form--state',
                        'sh-form--fit',
                        ...(
                            _.isArray(className) ? className : [className]
                        )
                    )}
                      {...attributes}
                >
                    <div ref={this.alertRef} className={
                        classNames('sh-form__content', 'sh--hide')
                    }>
                        <Alert {...{
                            color: 'danger',
                            title: 'Oh snap! ',
                            isAir: true,
                            message: 'Change a few things up and try submitting again.',
                            iconName: 'sh-icon-warning'
                        }}/>
                    </div>
                    {children}
                </form>
            </Fragment>
        );
    }
}