/**
 * @Component 选框 - _Checks
 * @Type 内部组件
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2018/9/27 下午2:59
 */

// 核心依赖
import React, {Component, Fragment} from 'react';
import * as PropTypes from 'prop-types';

// 第三方依赖库
import classNames from 'classnames'
import _ from 'lodash';
import uuidv4 from "uuid/v4";

// 组件依赖

// 样式


export default class extends Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        type: PropTypes.oneOf(['radio', 'checkbox']),
        id: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ]),
        name: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ]),
        text: PropTypes.node,
        isDisabled: PropTypes.bool,
        isDefaultChecked: PropTypes.bool,
        defaultValue: PropTypes.oneOfType([
            PropTypes.number,
            PropTypes.string
        ]),
        color: PropTypes.oneOf(_.concat(require('../../../config/color').default, 'default')),
        checkedColor: PropTypes.oneOf(_.concat(require('../../../config/color').default, 'default')),
        isSolid: PropTypes.bool,
        isBold: PropTypes.bool,
        isCheckedBold: PropTypes.bool,
        _isSingle: PropTypes.bool
    };

    static defaultProps = {
        type: 'radio',
        id: 'sh-' + uuidv4(),
        color: 'default',
        checkedColor: 'default',
        isDisabled: false,
        isDefaultChecked: false,
        isSolid: false,
        isBold: false,
        isCheckedBold: false,
        _isSingle: false
    };

    render() {
        const {
            type,
            id = 'sh-' + uuidv4(),
            name,
            text,
            defaultValue,
            isDisabled,
            isDefaultChecked,
            color,
            checkedColor,
            isSolid,
            isBold,
            isCheckedBold,
            attributes,
            callbacks,
            className,
            _isSingle
        } = this.props;

        return (
            <Fragment>
                <label className={
                    classNames(
                        `sh-${type}`,
                        {
                            [`sh-${type}--disabled`]: isDisabled,
                            [`sh-${type}--${checkedColor}`]: _.isString(checkedColor) && !_.isEqual(checkedColor, 'default'),
                            [`sh-${type}--state-${color}`]: _.isString(color) && !_.isEqual(color, 'default'),
                            [`sh-${type}--solid`]: isSolid,
                            [`sh-${type}--bold`]: isBold,
                            [`sh-${type}--check-bold`]: isCheckedBold
                        },
                        ...(
                            _.isArray(className) ? className : [className]
                        ),
                        {
                            [`sh-${type}--single`]: _isSingle
                        }
                    )
                }>
                    <input
                        id={id}
                        type={type}
                        name={name}
                        defaultValue={defaultValue}
                        disabled={isDisabled}
                        defaultChecked={isDefaultChecked}
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