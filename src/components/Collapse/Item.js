/**
 * @Component Panel
 * @Type 面板容器
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2020-04-05 17:18
 */
import _ from 'lodash';
import React, {PureComponent} from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from '../Icon';

class Panel extends PureComponent {

  render() {
    const {title, active, iconName, iconProps, onClick, className, attributes, children} = this.props;

    /** 计算样式 */
    const classes = classNames(
      'card',
      className,
    );

    return (
      <div className={classes} {...attributes}>
        <div className="card-header" onClick={onClick}>
          <div className={classNames('card-title', {collapsed: !active})}>
            {(_.isString(iconName) || !_.isEmpty(iconProps)) && <Icon iconName={iconName} {...iconProps} />}
            {title}
          </div>
          <div className={classNames('collapse', 'animated', 'fadeIn', {show: active})}>
            <div className="card-body">
              {children}
            </div>
          </div>
        </div>
      </div>
    );
  }
}


Panel.propTypes = {
  /** 用于标识当前是否需要被渲染 */
  isPanel: PropTypes.bool,
  /** 面板标题展示图标的名称 */
  iconName: PropTypes.string,
  /** 面板标题展示图标的其他属性 */
  iconProps: PropTypes.object,
  /** 用户自定义修饰符 */
  className: PropTypes.string,
  /** 用户自定义属性 */
  attributes: PropTypes.object,
};

Panel.defaultProps = {
  className: '',
  iconName: undefined,
  iconProps: {},
  attributes: {},
  isPanel: true
};

export default Panel;
