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

// 样式
import './style';

export default class extends Component {
    constructor(props) {
        super([props]);
    }

    static propTypes = {};

    static defaultProps = {};

    render() {
        const {
            label,
            id = 'sh-' + uuidv4(),
            type,
            placeholder,
            helper
        } = this.props;
        return (
            <Fragment>
                <div className={
                    classNames('form-group', 'sh-form__group')
                }>
                    {
                        _.isString(label) && (<label htmlFor={id}>{label}</label>)
                    }
                    <input type={type} placeholder={placeholder} id={id} className={
                        classNames('form-control', 'sh-input')
                    }/>
                    {
                        _.isString(helper) && (<span className="sh-form__help">{helper}</span>)
                    }
                </div>
            </Fragment>
        );
    }
}