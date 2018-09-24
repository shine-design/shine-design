/**
 * @Component 单选组件 - Radio
 * @Type 表单
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2018/9/20 下午7:34
 */

// 核心依赖
import React, {Component, Fragment} from 'react';
import * as PropTypes from 'prop-types';

// 第三方依赖库
import classNames from 'classnames'
import _ from 'lodash';

// 组件依赖

// 样式
import uuidv4 from "uuid/v4";

export default class extends Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        id: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ]),
        name: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ]),
        text: PropTypes.node,
        disabled: PropTypes.bool,
        checked: PropTypes.bool,
        defaultValue: PropTypes.oneOfType([
            PropTypes.number,
            PropTypes.string
        ]),
        color: PropTypes.oneOf(_.concat(require('../../config/color').default, 'default')),
        checkedColor: PropTypes.oneOf(_.concat(require('../../config/color').default, 'default')),
        isSolid: PropTypes.bool,
        isBold: PropTypes.bool,
        isCheckedBold: PropTypes.isCheckedBold
    };

    static defaultProps = {
        id: 'sh-' + uuidv4(),
        disabled: false,
        checked: false,
        isSolid: false,
        isBold: false,
        isCheckedBold: false
    };

    render() {
        const {
            id = 'sh-' + uuidv4(),
            name,
            text,
            defaultValue,
            disabled,
            checked,
            color,
            checkedColor,
            isSolid,
            isBold,
            isCheckedBold,
            attributes,
            callbacks,
            className
        } = this.props;

        return (
            <Fragment>
                <label className={
                    classNames(
                        'sh-radio',
                        {
                            'sh-checkbox--disabled': disabled,
                            [`sh-radio--${checkedColor}`]: _.isString(checkedColor),
                            [`'sh-radio--state-${color}`]: _.isString(color),
                            'sh-radio--solid': isSolid,
                            'sh-radio--bold': isBold,
                            'sh-radio--check-bold': isCheckedBold
                        },
                        ...(
                            _.isArray(className) ? className : [className]
                        )
                    )
                }>
                    <input
                        id={id}
                        type='radio'
                        name={name}
                        defaultValue={defaultValue}
                        disabled={disabled}
                        checked={checked}
                        {...attributes}
                        {...callbacks}
                    />
                    {text}
                    <span/>
                </label>
            </Fragment>
        );
    }
}