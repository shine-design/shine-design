/**
 * @Component 开关 - _Switch
 * @Type 表单
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2018/11/14 11:22
 */

// 核心依赖
import React, {Component, Fragment} from 'react';
import * as PropTypes from 'prop-types';

// 第三方依赖库
import classNames from 'classnames'
import _ from 'lodash';

// 组件依赖

// 样式

export default class extends Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {};

    static defaultProps = {};

    render() {
        const {
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
        } = this.props;

        const _className = classNames(
            'sh-switch',
            {
                'sh-switch--icon': isShowIcon,
                [`sh-switch--${bgColor}`]: !_.isUndefined(bgColor) && !_.isEqual(bgColor, 'default'),
                'sh-switch--outline': isOutline,
                [`sh-switch--${size}`]: !_.isUndefined(size) && !_.isEqual(size, 'md')
            }
        );

        return (
            <Fragment>
                <div>
                     <span className={_className}>
                        <label>
                            <input
                                id={id}
                                type="checkbox"
                                name={name}
                                defaultChecked={isChecked}
                                disabled={isDisabled}
                                readOnly={isReadOnly}
                                defaultValue={defaultValue}
                                {...attributes}
                                {...callbacks}
                            />
                            <span/>
                        </label>
                    </span>
                </div>
            </Fragment>
        );
    }
}