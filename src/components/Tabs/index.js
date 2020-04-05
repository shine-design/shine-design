/**
 * @Component Tabs
 * @Type 标签页
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2020-04-03 22:34
 */
import _ from 'lodash';
import React, {PureComponent} from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';
import Item from './Item';

class Tabs extends PureComponent {

  state = {
    activeTab: undefined
  };

  componentDidMount() {
    const {isControlled, activeTab, tabConfig} = this.props;
    if (!isControlled) {
      this.setState({activeTab: activeTab || (_.isArray(tabConfig) && tabConfig[0] && tabConfig[0].value)});
    }
  }

  onTabsChange = ({value}, e) => {
    const {onChange, isControlled} = this.props;
    if (isControlled) {
      _.isFunction(onChange) && onChange(value, e);
    } else {
      this.setState({activeTab: value});
    }
  };

  render() {
    const {isAdjusted, tabConfig, isControlled, isPill, className, attributes} = this.props;
    const activeTab = isControlled ? this.props.activeTab : this.state.activeTab;

    /** 计算样式 */
    const classes = classNames(
      'nav',
      'nav-tabs',
      {
        'nav-fill': isAdjusted,
        'nav-pills': isPill
      },
      className,
    );

    return (
      <div className={classes} {...attributes}>
        {_.isArray(tabConfig) && _.map(tabConfig, (item, index) => (
          <Item
            {...item}
            active={activeTab === item.value}
            key={index}
            onClick={e => this.onTabsChange(item, e)}
          />
        ))}
      </div>
    );
  }
}


Tabs.propTypes = {
  /** 是否受控 */
  isControlled: PropTypes.bool,
  /** 选项配置，参考 Item 配置 */
  tabConfig: PropTypes.array,
  /** 当前激活的选项卡 */
  activeTab: PropTypes.any,
  /** 是否自适应调整宽度 */
  isAdjusted: PropTypes.bool,
  /** 是否以 Pill 样式显示标签 */
  isPill: PropTypes.bool,
  /** 切换选项卡时触发 */
  onChange: PropTypes.func,
  /** 用户自定义修饰符 */
  className: PropTypes.string,
  /** 用户自定义属性 */
  attributes: PropTypes.object,
};

Tabs.defaultProps = {
  isControlled: false,
  tabConfig: [],
  isAdjusted: false,
  activeTab: undefined,
  isPill: false,
  onChange: undefined,
  className: '',
  attributes: {},
};

Tabs.Item = Item;

export default Tabs
