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
import jQuery from "jquery";
import 'bootstrap/js/src/alert';
import {
    COMMON_PROPS_TYPE,
    COMMON_PROPS_DEFAULT
} from '../../config/commonProps';
import colorType from "../../config/color";

// 组件依赖
import Button from '../Button/Button';
import Icon from '../Icon/Icon';

// 样式
import './style';

export default class extends Component {
    constructor(props) {
        super(props);
        this.alert = React.createRef();
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
        isDoubleOutline: PropTypes.bool,
        isCloseable: PropTypes.bool
    };

    static defaultProps = {
        ...COMMON_PROPS_DEFAULT,
        isOpen: true,
        color: 'default',
        isCloseable: false,
        isDoubleOutline: false,
        isAir: false
    };

    componentDidMount() {
        const {isOpen, onBeforeClose, onClosed} = this.props;
        const _alert = this.alert.current;

        jQuery(_alert).on('close.bs.alert', (e) => {
            _.isFunction(onBeforeClose) && onBeforeClose(e, _alert);
        });

        jQuery(_alert).on('closed.bs.alert', (e) => {
            _.isFunction(onClosed) && onClosed(e);
        });

        this.triggerAlert(isOpen);
    }

    componentWillReceiveProps(nextProps) {
        this.triggerAlert(nextProps.isOpen);
    }

    triggerAlert(isOpen) {
        const _alert = this.alert.current;
        jQuery(_alert).alert(isOpen ? 'show' : 'hide');
    }

    render() {
        const {
            title,
            message,
            color,
            iconName,
            actions,
            alertStyle,
            isCloseable,
            isOpen,
            isDoubleOutline,
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
                    ref={this.alert}
                    className={
                        classNames(
                            'alert',
                            'sh-alert',
                            'fade',
                            {
                                [`alert-${color.replace('outline-', '')}`]: _.isString(color) && !_.isEqual(color, 'default'),
                                'sh-alert--outline': _.isString(color) && color.indexOf('outline-') !== -1,
                                'sh-alert--default': !_.isString(color) || _.isEqual(color, 'default'),
                                'sh-alert--icon': _.isString(iconName) || (_.isArray(actions) && actions.length !== 0),
                                'alert-dismissible': isCloseable,
                                [`sh-alert--${alertStyle}`]: _.isString(alertStyle),
                                'sh-alert--air': isAir,
                                'sh-alert--outline-2x': isDoubleOutline,
                                'show': isOpen,
                                'hide': !isOpen
                            },
                            ...(
                                _.isArray(className) ? className : [className]
                            )
                        )}
                    {...attributes}
                >
                    {_.isString(iconName) && <div className='sh-alert__icon'><Icon className={iconName}/></div>}
                    {!_.isString(iconName) && _closeBtnRender}
                    {_.isString(iconName) || (_.isArray(actions) && actions.length !== 0)
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