/**
 * @Component 模态框 - Modal
 * @Type 其他
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2018/10/2 上午9:54
 */

// 核心依赖
import React, {Component, Fragment} from 'react';
import * as PropTypes from 'prop-types';
import {
    COMMON_PROPS_TYPE,
    COMMON_PROPS_DEFAULT
} from '../../config/commonProps';

// 第三方依赖库
import classNames from 'classnames'
import _ from 'lodash';
import jQuery from 'jquery';
import 'bootstrap/js/src/modal';

// 组件依赖
import Button from '../Button/Button';

// 样式
import './style';

export default class extends Component {
    constructor(props) {
        super(props);
        this.modal = React.createRef();
        this.triggerModal = this.triggerModal.bind(this);
    }

    static propTypes = {
        ...COMMON_PROPS_TYPE,
        size: PropTypes.oneOf(['sm', 'md', 'lg']),
        title: PropTypes.node,
        actions: PropTypes.array,
        isOpen: PropTypes.bool,
        isCloseable: PropTypes.bool,
        isCentered: PropTypes.bool,
        onBeforeOpen: PropTypes.func,
        onOpened: PropTypes.func,
        onBeforeClose: PropTypes.func,
        onClosed: PropTypes.func
    };

    static defaultProps = {
        ...COMMON_PROPS_DEFAULT,
        size: 'md',
        title: 'Modal Title',
        actions: [
            <Button {...{
                color: 'secondary',
                attributes: {
                    'data-dismiss': 'modal'
                },
                value: '关闭'
            }} />
        ],
        isOpen: true,
        isCloseable: true,
        isCentered: false
    };

    componentDidMount() {
        const {isOpen, onBeforeOpen, onOpened, onBeforeClose, onClosed} = this.props;
        const _modal = this.modal.current;
        jQuery(_modal).on('show.bs.modal', (e) => {
            _.isFunction(onBeforeOpen) && onBeforeOpen(e, _modal);
        });
        jQuery(_modal).on('shown.bs.modal', (e) => {
            _.isFunction(onOpened) && onOpened(e, _modal);
        });
        jQuery(_modal).on('hide.bs.modal', (e) => {
            _.isFunction(onBeforeClose) && onBeforeClose(e, _modal);
        });
        jQuery(_modal).on('hidden.bs.modal', (e) => {
            _.isFunction(onClosed) && onClosed(e);
        });
        this.triggerModal(isOpen);
    }

    componentWillReceiveProps(nextProps) {
        const {isOpen} = nextProps;
        this.triggerModal(isOpen);
    }

    triggerModal(isOpen) {
        const _modal = this.modal.current;
        if (isOpen) {
            jQuery(_modal).modal('show');
        } else {
            jQuery(_modal).modal('hide');
        }
    }

    render() {
        const {
            size,
            title,
            isCloseable,
            isCentered,
            actions,
            className,
            attributes,
            children
        } = this.props;
        const _className = classNames(
            'modal', 'fade',
            ...(
                _.isArray(className) ? className : [className]
            )
        );

        const _dialogClassName = classNames(
            'modal-dialog',
            {
                [`modal-${size}`]: _.isString(size) && !_.isEqual(size, 'md'),
                'modal-dialog-centered': isCentered
            }
        );
        return (
            <Fragment>
                <div
                    ref={this.modal}
                    className={_className}
                    tabIndex="-1"
                    role="dialog"
                    aria-hidden="true"
                    {...attributes}
                >
                    <div className={_dialogClassName} role="document">
                        <div className="modal-content">
                            {
                                (!_.isUndefined(title) || isCloseable) && (
                                    <div className="modal-header">
                                        {
                                            !_.isUndefined(title) && <h5 className="modal-title">{title}</h5>
                                        }
                                        {
                                            isCloseable && (
                                                <button type="button" className="close" data-dismiss="modal"
                                                        aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            )
                                        }
                                    </div>
                                )
                            }
                            <div className="modal-body">
                                {children}
                            </div>
                            {
                                _.isArray(actions) && actions.length !== 0 && (
                                    <div className="modal-footer">
                                        {
                                            actions.map((action, index) => <Fragment key={index}>{action}</Fragment>)
                                        }
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}