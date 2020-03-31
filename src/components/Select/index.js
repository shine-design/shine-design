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
import {buildDefaultRules, runRegExp, VALIDATION_RULES} from 'validations';
import Option from './Option';

const DEFAULT_RULE = _.keys(VALIDATION_RULES);

class Select extends PureComponent {
  constructor(props) {
    super(props);

    this.select = React.createRef();
  }

  componentDidMount() {
    const {size, actionsBox, selectAllText, deselectAllText, liveSearch, maxOptions, maxOptionsText, width, isValidate, rules, onChange} = this.props;
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
      const data = jQuery(_select).selectpicker('val');
      const event = {event: e, clickedIndex, isSelected};
      (isValidate && !_.isUndefined(rules))
        ? this._onChange(data, event)
        : (_.isFunction(onChange) && onChange(data, event));
    });

  }

  onValidate = isFullResult => {
    const _select = this.select.current;
    const value = jQuery(_select).selectpicker('val');
    const {rules} = this.props;
    const resultList = [];
    // 移除 rules 中为false 的规则
    _.omitBy(rules, item => _.isBoolean(item) && !item);
    // 依次校验家表单规则
    _.mapValues(rules, (rule, key) => {
      let _result = true;
      // 预设校验规则
      if (_.includes(DEFAULT_RULE, key)) {
        if (_.isEqual(key, 'required')) {
          _result = _.isEmpty(value);
        } else {
          const buildRules = buildDefaultRules(key, rule);

          if (_.isRegExp(buildRules)) {
            _result = runRegExp(buildRules, value);
          }

          if (_.isFunction(buildRules)) {
            _result = buildRules(value, rule);
          }
        }
      }

      // Function：自定义校验规则,返回值不为 true 则校验不通过。
      if (_.isFunction(rule)) {
        _result = rule(value);
      }

      // RegExp：自定义校验规则，使用正则进行匹配，不符合则校验不通过
      if (_.isRegExp(rule)) {
        _result = runRegExp(rule, value);
      }

      if (!_result) resultList.push(key);
    });

    return _.isEmpty(resultList) || (isFullResult ? resultList : resultList[0]);
  };

  _onChange = (data, event) => {
    const {_onValidateResult, onChange} = this.props;
    if (_.isFunction(_onValidateResult)) _onValidateResult(this.onValidate());
    _.isFunction(onChange) && onChange(data, event);
  };

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
  /** 当选中项改时触发，第一个参数为当前选中项 value 值，第二个参数为 event 事件 */
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
  onChange: undefined,
  className: '',
  attributes: {},
  isFormElement: true,
};

export default Select;
