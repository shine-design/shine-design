/**
 * @Component 警告组件 - Alert
 * @Type 提醒
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
import {COMMON_PROPS_TYPE, COMMON_PROPS_DEFAULT} from '../../config/commonProps';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';
import 'bootstrap/js/src/alert';
// 样式
import './style';
import colorType from "../../config/color";

export default class extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    static propTypes = {
        ...COMMON_PROPS_TYPE,
        isOpen: PropTypes.bool,
        color: PropTypes.oneOf(_.concat(colorType, 'default', colorType.map(color => `outline-${color}`))),
        title: PropTypes.node,
        message: PropTypes.node,
        iconName: PropTypes.string,
        actions: PropTypes.array,
        alertStyle: PropTypes.oneOf(['square', 'pill']),
        isAir: PropTypes.bool,
        isCloseable: PropTypes.bool
    };

    static defaultProps = {
        ...COMMON_PROPS_DEFAULT,
        isOpen: true,
        color: 'default',
        isCloseable: false,
        isAir: false
    };

    render() {
        const {
            title,
            message,
            color,
            iconName,
            actions,
            alertStyle,
            isCloseable,
            isAir,
            attributes,
            className,
        } = this.props;

        const _noteRender = (<Fragment>
            {!_.isUndefined(title) && <strong> {title} </strong>}
            {message}
        </Fragment>);

        const _closeBtnRender = (<Fragment>
            {isCloseable && <Button className='close' attributes={
                {
                    'data-dismiss': 'alert',
                    'aria-label': 'Close'
                }
            } _isNoClass={true}/>}
        </Fragment>);
        return (
            <Fragment>
                <div
                    ref='alert'
                    className={
                        classNames(
                            'alert',
                            'sh-alert',
                            {
                                [`alert-${color.replace('outline-', '')}`]: _.isString(color) && !_.isEqual(color, 'default'),
                                'sh-alert--outline': _.isString(color) && color.indexOf('outline-') !== -1,
                                'sh-alert--default': !_.isString(color) || _.isEqual(color, 'default'),
                                'sh-alert--icon': _.isString(iconName),
                                'alert-dismissible': isCloseable,
                                [`sh-alert--${alertStyle}`]: _.isString(alertStyle),
                                'sh-alert--air': isAir,
                                'fade': isCloseable,
                                'show': isCloseable
                            },
                            ...(
                                _.isArray(className) ? className : [className]
                            )
                        )}
                    {...attributes}
                >
                    {_.isString(iconName) && <div className='sh-alert__icon'><Icon className={iconName}/></div>}
                    {!_.isString(iconName) && _closeBtnRender}
                    {_.isString(iconName)
                        ? <Fragment>
                            <div className="sh-alert__text">{_noteRender}</div>
                        </Fragment>
                        : <Fragment>
                            {_noteRender}
                        </Fragment>
                    }
                    {_.isString(iconName) && (
                        <Fragment>
                            <div className='sh-alert__close'>{_closeBtnRender}</div>
                        </Fragment>
                    )
                    }
                    {_.isArray(actions) && actions.length !== 0 && <Fragment>
                        <div className="sh-alert__actions">
                            {actions.map((item, index) => <Fragment key={index}>{item}</Fragment>)}
                        </div>
                    </Fragment>
                    }
                </div>
            </Fragment>
        );
    }
}