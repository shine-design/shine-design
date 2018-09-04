/**
 * @Component 警告组件 - Alert
 * @Type Notice
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2018/9/4 下午1:34
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

export default class extends Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        color: _.concat(require('../../config/color').default, 'default')
    };

    static defaultProps = {
        color: 'default'
    };

    render() {
        const {title, message, color} = this.props;
        return (
            <Fragment>
                <div className={classNames('alert', {
                    [`alert-${color}`]: _.isString(color) && color !== 'default',
                    'sh-alert--default': !(_.isString(color)) || (_.isString(color) && color === 'default')
                })}>
                    {
                        _.isString(title) && (
                            <Fragment>
                                <strong>{title}</strong>
                            </Fragment>
                        )
                    }
                    {message}
                </div>
            </Fragment>
        );
    }
}