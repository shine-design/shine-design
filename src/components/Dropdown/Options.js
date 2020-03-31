/**
 * Dropdown.Options
 * 下拉菜单 - 选项
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2020-03-30 16:59
 */
import React, {PureComponent} from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from '../Icon';

class Options extends PureComponent {

  render() {
    const {label, iconName, iconProps, type, active, disabled, customRender} = this.props;

    let renderer = null;
    switch (type) {
      case 'label':
        renderer = <div className="dropdown-header">{label}</div>;
        break;
      case 'divider':
        renderer = <div className="dropdown-divider" />;
        break;
      case 'custom':
        renderer = customRender;
        break;
      default:
        renderer = (
          <button type="button" {...this.props} className={classNames('dropdown-item', {active, disabled},this.props.className)}>
            <Icon iconName={iconName} {...iconProps} />
            {label}
          </button>
        );
    }
    return renderer;
  }
}

Options.propTypes = {
  /** 选项类型，action - 按钮 / label - 标题 / divider - 分割线 / custom - 自定义 */
  type: PropTypes.oneOf(['action', 'label', 'divider', 'custom']),
  /** 选项描述 */
  label: PropTypes.string,
  /** 图标名称 */
  iconName: PropTypes.string,
  /** 图标配置项，参考 Icon 组件相关配置 */
  iconProps: PropTypes.object,
  /** 是否激活当前选项 */
  active: PropTypes.bool,
  /** 是否禁用当前选项 */
  disabled: PropTypes.bool,
  /** 自定义渲染方式，仅 type 为 custom 时生效 */
  customRender: PropTypes.any
};

Options.defaultProps = {
  label: '',
  iconName: undefined,
  iconProps: undefined,
  type: 'action',
  active: false,
  disabled: false,
  customRender: undefined
};


export default Options;
