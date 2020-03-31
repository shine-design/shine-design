/**
 * @Component Select
 * @Type 下拉选择组件
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2019-06-05 18:45
 */
import React, {PureComponent} from 'react';
import _ from 'lodash';
import classNames from 'classnames';
import jQuery from 'jquery';
import 'bootstrap-select';
import * as PropTypes from 'prop-types';
import {classPrefix} from 'variables';
import Option from './Option';

class Select extends PureComponent {
  constructor(props) {
    super(props);

    this.select = React.createRef();
  }

  componentDidMount() {
    const {size, actionsBox, selectAllText, deselectAllText, liveSearch, maxOptions, maxOptionsText, width, onChange} = this.props;
    const _select = this.select.current;
    jQuery(_select).selectpicker({
      size,
      width,
      actionsBox,
      selectAllText,
      deselectAllText,
      liveSearch,
      maxOptions,
      maxOptionsText,
    });
    jQuery(_select).on('changed.bs.select', (e, clickedIndex, isSelected) => {
      _.isFunction(onChange) && onChange(jQuery(_select).selectpicker('val'), {event: e, clickedIndex, isSelected});
    });

  }

  render() {
    const {title, options, multiple, disabled, bgColor, value, className, attributes} = this.props;

    /** 计算样式 */
    const classes = classNames(
      'form-control',
      `${classPrefix}-form-control`,
      className,
    );

    const newValue = value ? (_.isArray(value) ? value : [value]) : [];

    const _optSources = _.isArray(options) && _.map(options, (option, index) => (
      <Option
        key={index}
        selected={_.includes(newValue, option.value)}
        {...option}
      />
    ));

    return (
      <select
        title={title}
        ref={this.select}
        disabled={disabled}
        className={classes}
        multiple={multiple}
        data-style={bgColor && ('btn-' + bgColor)}
        {...attributes}
      >
        {_optSources}
      </select>
    );
  }
}

Select.propTypes = {
  /** 设置当前选择器选中值，若为多选，则设置数组 */
  value: PropTypes.any,
  /** 选择框默认标题 */
  title: PropTypes.string,
  /** 支持设置每页仅显示数条记录 */
  size: PropTypes.number,
  /** 是否开启多选功能 */
  multiple: PropTypes.bool,
  /** 在选择框顶部添加两个按钮：全选和取消全选，仅 multiple 为 true 时生效 */
  actionsBox: PropTypes.bool,
  /** 全选文本 */
  selectAllText: PropTypes.string,
  /** 取消全选文本 */
  deselectAllText: PropTypes.string,
  /** 是否开启搜索 */
  liveSearch: PropTypes.bool,
  /** 所选选项的数量不能超过给定值，仅 multiple 为 true 时生效 */
  maxOptions: PropTypes.number,
  /** 显示的文本以及已选择给定方案的最大选项数，仅 maxOptions 为 true 时生效 */
  maxOptionsText: PropTypes.string,
  /** 设置选择框宽度 */
  width: PropTypes.any,
  /** 背景状态颜色 */
  bgColor: PropTypes.string,
  /** 是否禁用选择器 */
  disabled: PropTypes.bool,
  /** 当选中项改时触发 */
  onChange: PropTypes.bool,
  /** 用户自定义修饰符 */
  className: PropTypes.string,
  /** 用户自定义属性 */
  attributes: PropTypes.object,
  /** 定位表单元素 */
  isFormElement: PropTypes.bool,
};

Select.defaultProps = {
  value: undefined,
  title: undefined,
  size: undefined,
  multiple: false,
  actionsBox: false,
  selectAllText: undefined,
  deselectAllText: undefined,
  liveSearch: false,
  maxOptions: undefined,
  maxOptionsText: undefined,
  width: undefined,
  disabled: false,
  bgColor: undefined,
  onChange: (val, data) => {
    console.log(val, data)
  },
  className: '',
  attributes: {},
  isFormElement: true,
};

export default Select;
