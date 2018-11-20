/**
 * @Component 输入组件 - Input
 * @Type 表单
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2018/9/17 下午6:45
 */

// 核心依赖
import React, {Component, Fragment} from 'react';
import * as PropTypes from 'prop-types';
import {
    COMMON_PROPS_TYPE,
    COMMON_PROPS_DEFAULT
} from '../../config/commonProps';

// 第三方依赖库
import classNames from 'classnames'
import _ from 'lodash';
import uuidv4 from 'uuid/v4';

// 组件依赖
import _Checks from '../_Internal/_Checks/_Checks';
import _Switch from '../_Internal/_Switch/_Switch';
import Group from '../Group/Group';
import Button from '../Button/Button';

// 样式
import './style';

export default class extends Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        ...COMMON_PROPS_TYPE,
        label: PropTypes.node,
        id: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ]),
        type: PropTypes.string,
        placeholder: PropTypes.node,
        helper: PropTypes.node,
        name: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ]),
        multiple: PropTypes.bool,
        options: PropTypes.arrayOf(PropTypes.shape({
            value: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.number
            ]),
            label: PropTypes.node,
            isChecked: PropTypes.bool,
            ...COMMON_PROPS_TYPE,
        })),
        inputStyle: PropTypes.oneOf(['pill', 'square', 'normal']),
        bgColor: PropTypes.oneOf(_.concat(require('../../config/color').default, 'default')),
        isAir: PropTypes.bool,
        isSolid: PropTypes.bool,
        size: PropTypes.oneOf(['sm', 'md', 'lg']),
        paddingSize: PropTypes.oneOf(['lg', 'md', 'sm']),
        display: PropTypes.oneOf(['block', 'inline']),
        itemDisplay: PropTypes.oneOf(['block', 'inline']),
        labelCount: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
        itemList: PropTypes.array,
        isFirst: PropTypes.bool,
        isLast: PropTypes.bool,
        isDisabled: PropTypes.bool,
        isReadOnly: PropTypes.bool,
        isShowIcon: PropTypes.bool,
        isChecked: PropTypes.bool,
        isOutline: PropTypes.bool,
        _isGroup: PropTypes.bool
    };

    static defaultProps = {
        ...COMMON_PROPS_DEFAULT,
        multiple: false,
        options: [],
        inputStyle: 'normal',
        isAir: false,
        isSolid: false,
        size: 'md',
        paddingSize: 'lg',
        display: 'block',
        itemDisplay: 'block',
        labelCount: 3,
        itemList: [],
        bgColor: 'default',
        isFirst: false,
        isLast: false,
        isDisabled: false,
        isReadOnly: false,
        isShowIcon: true,
        isChecked: false,
        isOutline: false,
        _isGroup: false
    };

    render() {

        // 基础输入 & 通用
        const {
            label,
            id = 'sh-' + uuidv4(), // Radio 与 Checkbox无效
            type,
            placeholder,
            helper,
            name,
            defaultValue,
            isReadOnly,
            attributes,
            inputStyle,
            isDisabled,
            isAir,
            isSolid,
            size,
            paddingSize,
            isFirst,
            isLast,
            display,
            labelCount,
            callbacks,
            className,
            validate
        } = this.props;

        // 基础选择
        const {
            options,
            multiple,
        } = this.props;

        // 单复选框
        const {
            itemList,
            itemDisplay
        } = this.props;

        const {
            _isGroup,
            _prepend,
            _append
        } = this.props;

        // 开关
        const {
            bgColor,
            isShowIcon,
            isChecked,
            isOutline
        } = this.props;

        const _switchProps = {
            id,
            name,
            isReadOnly,
            defaultValue,
            size,
            bgColor,
            isShowIcon,
            isChecked,
            isDisabled,
            isOutline,
            attributes,
            callbacks,
        };

        // Fix Password Input notification
        _.isEqual(type, 'password') && _.isUndefined(attributes['autoComplete']) && (attributes['autoComplete'] = 'current-password');

        const _className = classNames(
            'form-control',
            'sh-input',
            {
                [`sh-input--${inputStyle}`]: !_.isEqual(inputStyle, 'normal'),
                'sh-input--air': isAir,
                'sh-input--solid': isSolid,
                [`form-control-${size}`]: !_.isEqual(size, 'md'),
            }
        );

        const _groupClass = classNames(
            'input-group', 'sh-input-group', {
                'sh-input-group--solid': isSolid,
                [`sh-input-group--${inputStyle}`]: !_.isEqual(inputStyle, 'normal'),
                'sh-input-group--air': isAir,
                [`input-group-${size}`]: !_.isEqual(size, 'md'),
            }
        );


        let _inputRender = null;

        switch (type) {
            case 'select':
                _inputRender = (
                    <Fragment>
                        <select
                            id={id}
                            className={_className}
                            name={name}
                            disabled={isDisabled}
                            readOnly={isReadOnly}
                            multiple={multiple}
                            {...attributes}
                            {...callbacks}
                        >
                            {
                                _.isArray(options) && options.map((item, index) =>
                                    <option key={index}
                                            value={item.value}
                                            defaultChecked={item.isChecked}
                                            {...item.callbacks}
                                            className={classNames(
                                                ...(
                                                    _.isArray(item.className) ? item.className : [item.className]
                                                )
                                            )}>{item.label}
                                    </option>)
                            }
                        </select>
                    </Fragment>
                );
                break;
            case 'textarea':
                _inputRender = (
                    <Fragment>
                                <textarea
                                    id={id}
                                    className={_className}
                                    name={name}
                                    disabled={isDisabled}
                                    readOnly={isReadOnly}
                                    placeholder={placeholder}
                                    defaultValue={defaultValue}
                                    {...attributes}
                                    {...callbacks}
                                />
                    </Fragment>
                );
                break;
            case 'static':
                _inputRender = (
                    <Fragment>
                        <p className={
                            classNames(
                                'form-control-static',
                                ...(
                                    _.isArray(className) ? className : [className]
                                ),
                                {
                                    [`col-${12 - labelCount}`]: _.isEqual(display, 'inline') && _.isNumber(labelCount)
                                }
                            )
                        }>{defaultValue}</p>
                    </Fragment>
                );
                break;
            case 'radio':
                _inputRender = (
                    <Fragment>
                        <Group
                            type={type}
                            itemDisplay={itemDisplay}
                        >
                            {
                                _.isArray(itemList) && itemList.map((item, index) =>
                                    <_Checks
                                        key={index}
                                        {...item}
                                        name={name}
                                        type={type}
                                    />
                                )
                            }
                        </Group>
                    </Fragment>
                );
                break;
            case 'checkbox':
                _inputRender = (
                    <Fragment>
                        <Group
                            type={type}
                            itemDisplay={itemDisplay}
                        >
                            {
                                _.isArray(itemList) && itemList.map((item, index) =>
                                    <_Checks
                                        key={index}
                                        {...item}
                                        name={name}
                                        type={type}
                                    />
                                )
                            }
                        </Group>
                    </Fragment>
                );
                break;
            case 'switch':
                _inputRender = (
                    <Fragment>
                        <_Switch {..._switchProps} />
                    </Fragment>
                );
                break;
            default:
                _inputRender = <input
                    id={id}
                    type={type}
                    className={_className}
                    name={name}
                    disabled={isDisabled}
                    readOnly={isReadOnly}
                    placeholder={placeholder}
                    defaultValue={defaultValue}
                    {...attributes}
                    {...callbacks}
                />
        }


        const inputContent = (
            <Fragment>
                {
                    _isGroup
                        ? (
                            <Fragment>
                                <div className={_groupClass}>
                                    {
                                        _.isArray(_prepend) && !_.isEmpty(_prepend) && (
                                            <Fragment>
                                                <div className="input-group-prepend">
                                                    {
                                                        _prepend.map((pre, index) => {
                                                            if (pre.type === Button) {
                                                                return (
                                                                    <Fragment key={index}>{pre}</Fragment>);
                                                            } else {
                                                                return (<span key={index}
                                                                              className="input-group-text">{pre}</span>)
                                                            }
                                                        })
                                                    }
                                                </div>
                                            </Fragment>
                                        )
                                    }
                                    {_inputRender}
                                    {
                                        _.isArray(_append) && !_.isEmpty(_append) && (
                                            <Fragment>
                                                <div className="input-group-append">
                                                    {
                                                        _append.map((app, index) => {
                                                            if (app.type === Button) {
                                                                return (
                                                                    <Fragment key={index}>{app}</Fragment>);
                                                            } else {
                                                                return (<span key={index}
                                                                              className="input-group-text">{app}</span>)
                                                            }
                                                        })
                                                    }
                                                </div>
                                            </Fragment>
                                        )
                                    }
                                </div>
                            </Fragment>
                        )
                        : (<Fragment>
                            {
                                _inputRender
                            }
                        </Fragment>)
                }
                {
                    _.isString(helper) && (<span className={
                        classNames(
                            "sh-form__help",
                            {
                                'col-form-label': _.isEqual(display, 'inline')
                            }
                        )
                    }>{helper}</span>)
                }
            </Fragment>
        );


        return (
            <Fragment>
                <div className={
                    classNames(
                        'form-group',
                        {
                            [`sh-form__group${_.isEqual(paddingSize, 'lg') ? `` : `--${paddingSize}`}`]: _.isString(paddingSize),
                            'sh-form__group--first': isFirst,
                            'sh-form__group--last': isLast,
                            'row': _.isEqual(display, 'inline')
                        },
                        ...(
                            _.isArray(className) ? className : [className]
                        )
                    )
                }>
                    {
                        _.isString(label) && (<label htmlFor={id} className={
                            classNames(
                                'form-control-label',
                                {
                                    'col-form-label': _.isEqual(display, 'inline'),
                                    [`col-${labelCount}`]: _.isEqual(display, 'inline') && _.isNumber(labelCount)
                                }
                            )
                        }>{label + (!_.isUndefined(name) && !_.isUndefined(validate) && !_.isEmpty(validate) ? ' *' : '')}</label>)
                    }
                    {
                        _.isEqual(display, 'inline') && _.isNumber(labelCount) ? (
                            <Fragment>
                                <div className={
                                    classNames(
                                        {[`col-${12 - labelCount}`]: _.isEqual(display, 'inline') && _.isNumber(labelCount)}
                                    )
                                }>
                                    {inputContent}
                                </div>
                            </Fragment>
                        ) : inputContent
                    }
                </div>
            </Fragment>
        );
    }
}