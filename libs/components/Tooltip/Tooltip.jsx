/**
 * @Component 提示工具 - Tooltip
 * @Type 提醒
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2018/10/5 下午3:49
 */

// 核心依赖
import React, {Component, Fragment} from 'react';
import {findDomNode} from 'react-dom'
import * as PropTypes from 'prop-types';

// 第三方依赖库
import classNames from 'classnames'
import _ from 'lodash';

// 组件依赖
import 'bootstrap/js/src/tooltip';
import Button from '../Button/Button';

// 样式
import './style';

export default class extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // const {children} = this.props;
        console.log(this.props.children);
        console.log(findDomNode);
    }

    static propTypes = {
        isShow: PropTypes.bool,
        isHtml: PropTypes.bool,
        isAutoWidth: PropTypes.bool,
        skin: PropTypes.oneOf(['light', 'dark']),
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
        trigger: 'hover',
        skin: 'dark',
        isShow: false,
        isHtml: false,
        isAutoWidth: true
    };

    initTooltip(el) {
        const {trigger, isAutoWidth} = this.props;

        const _className = classNames(
            'sh-tooltip',
            'tooltip',
            {
                [`sh-tooltip--skin-${skin}`]: _.isString(skin),
                'sh-tooltop--auto-width': isAutoWidth
            }
        );

        el.tooltip({
            trigger,
            template: `<div class="${_className}" role="tooltip">\
                <div class="arrow"></div>\
                <div class="tooltip-inner"></div>\
            </div>`
        });
    }

    render() {
        const {trigger, skin, offset, content, isHtml, children} = this.props;

        const {attributes} = children.props;

        _.merge(attributes, {
            "data-toggle": "m-tooltip",
            "data-trigger": trigger,
            "data-skin": skin,
            "data-offset": offset,
            "data-original-title": content,
            "data-html": isHtml
        });

        return (
            <Fragment>
                {!_.isUndefined(children) && children.type === Button && children}
            </Fragment>
        );
    }
}