/**
 * @Component Collapse
 * @Type 折叠面板
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2020-04-05 17:18
 */
import _ from 'lodash';
import React, {PureComponent} from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';
import Panel from './Item';

class Collapse extends PureComponent {

  state = {
    active: []
  };

  componentDidMount() {
    const {isControlled, active} = this.props;
    const renderer = this.getValidRenderer();
    // 非受控模式，初始化内容
    if (!isControlled && _.isArray(renderer) && renderer[0]) {
      const defaultActive = _.isArray(active) ? active : [active];
      this.setState({active: active ? defaultActive : [0]});
    }
  }

  getValidRenderer = () => {
    const {children} = this.props;

    const renderer = [];

    _.forEach(children, item => {
      if (item.props.isPanel) {
        renderer.push(item);
      }
    });

    return renderer;
  };

  onCountActive = (currentActive, index) => {
    const {maxCount} = this.props;
    let newArray = _.cloneDeep(currentActive);
    if (_.indexOf(newArray, index) === -1) {
      if (!maxCount || (maxCount && newArray.length < maxCount)) {
        newArray.push(index);
      }
    } else {
      newArray = _.filter(newArray, item => item !== index);
    }

    return newArray;
  };

  onChangePanel = index => {
    const {isControlled, onChange} = this.props;

    if (isControlled) {
      _.isFunction(onChange) && onChange(this.onCountActive(this.props.active, index));
    } else {
      this.setState(({active}) => ({active: this.onCountActive(active, index)}));
    }
  };

  render() {
    const {isControlled, isLight, isSolid, isToggle, toggleType, className, attributes} = this.props;
    const active = isControlled ? this.props.active : this.state.active;

    /** 计算样式 */
    const classes = classNames(
      'accordion',
      {
        'accordion-light': isLight,
        'accordion-solid': isSolid,
        [`accordion-toggle-${toggleType}`]: isToggle && toggleType
      },
      className,
    );


    return (
      <div className={classes} {...attributes}>
        {
          _.map(
            this.getValidRenderer(),
            (item, index) => React.createElement(Panel, {
              ...item.props,
              key: index,
              active: _.includes(active, index),
              onClick: () => this.onChangePanel(index)
            })
          )
        }
      </div>
    );
  }
}


Collapse.propTypes = {
  /** 是否受控 */
  isControlled: PropTypes.bool,
  /** 当前激活的索引 */
  active: PropTypes.array,
  /** 允许同时处于打开状态的面板的最大数量 */
  maxCount: PropTypes.number,
  /** 是否以亮色显示 */
  isLight: PropTypes.bool,
  /** 是否以暗色显示 */
  isSolid: PropTypes.bool,
  /** 是否显示弹出提示 */
  isToggle: PropTypes.bool,
  /** 弹出提示类型，arrow - 箭头，plus - 加减 */
  toggleType: PropTypes.oneOf(['arrow', 'plus']),
  /** 受控模式下，切换面板触发 */
  onChange: PropTypes.func,
  /** 用户自定义修饰符 */
  className: PropTypes.string,
  /** 用户自定义属性 */
  attributes: PropTypes.object,
};

Collapse.defaultProps = {
  isControlled: false,
  active: undefined,
  maxCount: undefined,
  isLight: false,
  isSolid: false,
  isToggle: true,
  toggleType: 'arrow',
  onChange: undefined,
  className: '',
  attributes: {},
};

Collapse.Panel = Panel;

export default Collapse;
