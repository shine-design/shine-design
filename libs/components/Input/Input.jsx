/**
 * @Component 输入组件 - Input
 * @Type 表单
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2018/9/17 下午6:45
 */

// 核心依赖
import React, {Component, Fragment} from 'react';
import * as PropTypes from 'prop-types';

// 第三方依赖库
import classNames from 'classnames'
import _ from 'lodash';
import uuidv4 from 'uuid/v4';
// 组件依赖
import _Checks from '../_Internal/_Checks/_Checks';
import Group from '../Group/Group';
// 样式
import './style';

export default class extends Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
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
            attributes: PropTypes.object
        })),
        attributes: PropTypes.object,
        inputStyle: PropTypes.oneOf(['pill', 'square', 'normal']),
        isAir: PropTypes.bool,
        isSolid: PropTypes.bool,
        size: PropTypes.oneOf(['sm', 'md', 'lg']),
        paddingSize: PropTypes.oneOf(['lg', 'md', 'sm']),
        display: PropTypes.oneOf(['block', 'inline']),
        itemDisplay: PropTypes.oneOf(['block', 'inline']),
        labelCount: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
        isFirst: PropTypes.bool,
        isLast: PropTypes.bool,
        isDisabled: PropTypes.bool,
        isReadOnly: PropTypes.bool,
        callbacks: PropTypes.object
    };

    static defaultProps = {
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
        attributes: {},
        isFirst: false,
        isLast: false,
        isDisabled: false,
        isReadOnly: false
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
            className
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

        let _inputType = null;

        switch (type) {
            case 'select':
                _inputType = 'selectType';
                break;
            case 'textarea':
                _inputType = 'textareaType';
                break;
            case 'static':
                _inputType = 'staticType';
                break;
            case 'radio':
                _inputType = 'radioType';
                break;
            case 'checkbox':
                _inputType = 'checkboxType';
                break;
            default:
                _inputType = 'inputType'
        }

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
                [`col-${12 - labelCount}`]: _.isEqual(display, 'inline') && _.isNumber(labelCount)
            }
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
                                {
                                    'col-form-label': _.isEqual(display, 'inline'),
                                    [`col-${labelCount}`]: _.isEqual(display, 'inline') && _.isNumber(labelCount)
                                }
                            )
                        }>{label}</label>)
                    }
                    {_.isEqual(_inputType, 'selectType') && (
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
                                    _.isArray(options) && options.map((item) => <option value={item.value}
                                                                                        defaultChecked={item.isChecked}
                                                                                        {...item.callbacks}
                                                                                        className={classNames(
                                                                                            ...(
                                                                                                _.isArray(item.className) ? item.className : [item.className]
                                                                                            )
                                                                                        )}>{item.label}</option>)
                                }
                            </select>
                        </Fragment>
                    )}
                    {
                        _.isEqual(_inputType, 'textareaType') && (
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
                        )
                    }
                    {
                        _.isEqual(_inputType, 'staticType') && (
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
                        )
                    }
                    {
                        _.isEqual(_inputType, 'radioType') && (
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
                        )
                    }
                    {
                        _.isEqual(_inputType, 'checkboxType') && (
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
                        )
                    }
                    {
                        _.isEqual(_inputType, 'inputType') && (
                            <input
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
                        )
                    }
                    {
                        _.isString(helper) && (<span className="sh-form__help">{helper}</span>)
                    }
                </div>
            </Fragment>
        );
    }
}