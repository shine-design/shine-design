/**
 * @Component 栅格系统 - Col
 * @Type Basic
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2018/8/31 下午9:31
 */

// 核心依赖
import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';

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
        mode: PropTypes.oneOf(
            ['general', 'desktop', 'desktop-and-tablet', 'tablet', 'tablet-and-mobile', 'mobile']
        ),
        order: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
        part: PropTypes.oneOfType([ //TODO 校验 md-offset 1~12
            PropTypes.array,
            PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
            PropTypes.string
        ]),
        offset: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]),
        align: PropTypes.oneOf(
            ['stretch', 'baseline', 'center', 'flex-end', 'flex-start']
        )
    };

    static defaultProps = {};

    render() {
        const me = this;
        const {mode, order, align, part, offset, className, children} = me.props;
        return (
            <Fragment>
                <div className={classNames('m-grid__item', {
                        [`m-grid__item--order${_.isString(mode) ? '-' + mode : ''}-${order}`]: _.isNumber(order),
                        [`m-grid__item--${align}`]: _.isString(align),
                        [`col-${part}`]: _.isString(part) || _.isNumber(part),
                        [`offset-${offset}`]: _.isNumber(offset)
                    }, ...(
                        _.isArray(part) && part.map((item) => {
                            return `col-${item}`;
                        }) || []
                    ),
                    ...(
                        _.isArray(className) ? className : [className]
                    ))}>
                    {children}
                </div>
            </Fragment>
        );
    }
}