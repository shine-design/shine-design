/**
 * @Component 符号输入 - SymbolInput
 * @Type 表单
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2018/9/27 下午8:56
 */

// 核心依赖
import React, {Component, Fragment} from 'react';
import * as PropTypes from 'prop-types';

// 第三方依赖库
import classNames from 'classnames'
import _ from 'lodash';

// 组件依赖
import {COMMON_PROPS_TYPE, COMMON_PROPS_DEFAULT} from '../../config/commonProps';
import Input from '../Input/Input';
import _Checks from '../_Internal/_Checks/_Checks';
// 样式
import './style';


export default class extends Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        ...COMMON_PROPS_TYPE,
        input: PropTypes.object,
        prepend: PropTypes.oneOfType([
            PropTypes.node,
            PropTypes.arrayOf(PropTypes.node)
        ]),
        append: PropTypes.oneOfType([
            PropTypes.node,
            PropTypes.arrayOf(PropTypes.node)
        ])
    };

    static defaultProps = {
        ...COMMON_PROPS_DEFAULT,
        prepend: [],
        append: []
    };

    render() {
        const {input, className, attributes, callbacks} = this.props;
        let {prepend, append} = this.props;
        if (_.isArray(prepend)) {
            prepend.forEach((item, index) => {
                if (!_.isUndefined(item) && item.type === Input) {
                    prepend.splice(index, 1, (<_Checks {...{
                        ...item.props.itemList[0],
                        name: item.props.name,
                        type: item.props.type,
                        _isSingle: true
                    }}/>))
                }
            })
        } else {
            if (!_.isUndefined(prepend) && prepend.type === Input) {
                prepend = (<_Checks {...{
                    ...prepend.props.itemList[0],
                    name: prepend.props.name,
                    type: prepend.props.type,
                    _isSingle: true
                }}/>)
            }
        }
        if (_.isArray(append)) {
            append.forEach((item, index) => {
                if (!_.isUndefined(item) && item.type === Input) {
                    append.splice(index, 1, (<_Checks {...{
                        ...item.props.itemList[0],
                        name: item.props.name,
                        type: item.props.type,
                        _isSingle: true
                    }}/>))
                }
            })
        } else {
            if (!_.isUndefined(append) && append.type === Input) {
                append = (<_Checks {...{
                    ...append.props.itemList[0],
                    name: append.props.name,
                    type: append.props.type,
                    _isSingle: true
                }}/>)
            }
        }
        return (
            <Fragment>
                <Input {...{
                    ...input,
                    _isGroup: true,
                    _prepend: _.isArray(prepend) ? prepend : [prepend],
                    _append: _.isArray(append) ? append : [append],
                    className,
                    attributes,
                    callbacks
                }}/>
            </Fragment>
        );
    }
}