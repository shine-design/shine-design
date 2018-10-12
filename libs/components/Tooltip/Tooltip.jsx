/**
 * @Component 提示工具 - Tooltip
 * @Type 提醒
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2018/10/5 下午3:49
 */

// 核心依赖
import React, {Component, Fragment} from 'react';
import ReactDom from 'react-dom';
import * as PropTypes from 'prop-types';

// 第三方依赖库
import classNames from 'classnames'
import _ from 'lodash';
import jQuery from 'jquery';
import 'bootstrap/js/src/tooltip';

// 组件依赖
import Button from '../Button/Button';

// 样式
import './style';

export default class extends Component {
    constructor(props) {
        super(props);

        this.child = React.createRef();

        this.initTooltip = this.initTooltip.bind(this);
        this.triggerTooltip = this.triggerTooltip.bind(this);
        this.findChildDom = this.findChildDom.bind(this);
    }

    componentDidMount() {
        const {isOpen, trigger, onBeforeOpen, onOpened, onBeforeClose, onClosed} = this.props;

        if (this.findChildDom()) {
            const _child = this.findChildDom();

            jQuery(_child).on('show.bs.tooltip', (e) => {
                _.isFunction(onBeforeOpen) && onBeforeOpen(e, _child);
            });
            jQuery(_child).on('shown.bs.tooltip', (e) => {
                _.isFunction(onOpened) && onOpened(e, _child);
            });
            jQuery(_child).on('hide.bs.tooltip', (e) => {
                _.isFunction(onBeforeClose) && onBeforeClose(e, _child);
            });
            jQuery(_child).on('hidden.bs.tooltip', (e) => {
                _.isFunction(onClosed) && onClosed(e);
            });

            this.initTooltip(_child);
            _.isEqual(trigger, 'manual') && this.triggerTooltip(_child, isOpen);
        }
    }

    componentWillReceiveProps(nextProps) {
        const {isOpen, trigger} = nextProps;
        _.isEqual(trigger, 'manual') && this.triggerTooltip(this.findChildDom(), isOpen);
    }

    static propTypes = {
        isOpen: PropTypes.bool,
        title: PropTypes.string,
        delay: PropTypes.oneOfType([
            PropTypes.number,
            PropTypes.shape({
                show: PropTypes.number,
                hide: PropTypes.number
            })
        ]),
        isHtml: PropTypes.bool,
        isAutoWidth: PropTypes.bool,
        isAnimate: PropTypes.bool,
        skin: PropTypes.oneOf(['light', 'dark']),
        placement: PropTypes.oneOf(['top', 'left', 'right', 'bottom', 'auto']),
        children: (props, propName, componentName) => {
            if (props[propName].type !== Button) {
                return new Error(
                    'Invalid prop `' + propName + '` supplied to' +
                    ' Button. Validation failed.'
                );
            }
        }
    };

    static defaultProps = {
        isOpen: false,
        title: '',
        trigger: ['hover', 'focus'],
        placement: 'auto',
        skin: 'light',
        delay: 0,
        isHtml: false,
        isAutoWidth: true,
        isAnimate: true
    };

    findChildDom() {
        const {children} = this.props;

        if (!_.isUndefined(children) && children.type === Button) {
            const child = this.child.current;
            if (child) {
                return ReactDom.findDOMNode(child);
            }
        }
        return null;
    }

    initTooltip(el) {
        const {skin, delay, isAutoWidth} = this.props;

        const _className = classNames(
            'sh-tooltip',
            'tooltip',
            {
                [`sh-tooltip--skin-${skin}`]: _.isString(skin),
                'sh-tooltop--auto-width': isAutoWidth
            }
        );

        jQuery(el).tooltip({
            delay,
            template: `<div class="${_className}" role="tooltip">\
                <div class="arrow"></div>\
                <div class="tooltip-inner"></div>\
            </div>`
        });
    }

    triggerTooltip(el, isOpen) {
        jQuery(el).tooltip(isOpen ? 'show' : 'hide');
    }

    render() {
        const {trigger, skin, offset, title, placement, isAnimate, isHtml, children} = this.props;

        const {attributes} = children.props;

        _.merge(attributes, {
            "data-trigger": _.isArray(trigger) ? trigger.join(' ') : trigger,
            "data-skin": skin,
            "data-offset": offset,
            "data-original-title": title,
            "data-html": isHtml,
            "data-placement": placement,
            'data-animation': isAnimate
        });

        return (
            <Fragment>
                {
                    !_.isUndefined(children)
                    && children.type === Button
                    && React.cloneElement(children, {ref: this.child})}
            </Fragment>
        );
    }
}