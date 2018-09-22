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
import './style';
import uuidv4 from "uuid/v4";

export default class extends Component {
    constructor(props) {
        super([props]);
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
        disabled: PropTypes.bool,
        checked: PropTypes.bool
    };

    static defaultProps = {};

    render() {
        const {
            id = 'sh-' + uuidv4(),
            name,
            text,
            defaultValue,
            disabled,
            checked,
            stateColor,
            radioColor,
            inputStyle,
            isSolid
        } = this.props;

        return (
            <Fragment>
                <label className={
                    classNames(
                        'sh-radio',
                        {
                            'sh-checkbox--disabled': disabled
                        }
                    )
                }>
                    <input
                        id={id}
                        type='radio'
                        name={name}
                        defaultValue={defaultValue}
                        disabled={disabled}
                        checked={checked}
                    />
                    {text}
                    <span/>
                </label>
            </Fragment>
        );
    }
}