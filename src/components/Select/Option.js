/**
 * Select.Options
 * 选择框选项
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2020-03-30 22:53
 */
import React, {PureComponent} from 'react';
import _ from 'lodash';
import * as PropTypes from 'prop-types';


class Option extends PureComponent {

  render() {
    const {keywords, title, value, label, content, subtext, type, disabled, selected, maxOptions, children} = this.props;

    let renderer = null;
    switch (type) {
      case 'group':
        renderer = <optgroup label="Picnic" data-max-options={maxOptions}>{children}</optgroup>;
        break;
      case 'divider':
        renderer = <option data-divider="true" />;
        break;
      default:
        renderer = (
          <option
            data-tokens={_.isArray(keywords) ? keywords.join(' ') : keywords}
            data-content={content}
            title={title}
            value={value}
            selected={selected}
            data-subtext={subtext}
            disabled={disabled}
          >
            {label}
          </option>
        );
    }
    return renderer;
  }
}


Option.propTypes = {
  /** 指定当前选项类型，支持 item - 选择项 / divider - 分隔符 / group - 选项组（需嵌套选择项） */
  type: PropTypes.oneOf(['item', 'divider', 'group']),
  /** 选项在选择框被选中时的展示文案 */
  title: PropTypes.string,
  /** 选项值 */
  value: PropTypes.any,
  /** 选项展示文案 */
  label: PropTypes.string,
  /** 当开启搜索时，用于提高搜索准确性 */
  keywords: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  /** 使用指定 DOM 字符串渲染选项 */
  content: PropTypes.string,
  /** 副文案 */
  subtext: PropTypes.string,
  /** 是否禁用当前选项 */
  disabled: PropTypes.bool,
};

Option.defaultProps = {
  type: 'item',
  title: undefined,
  value: undefined,
  label: undefined,
  keywords: undefined,
  content: undefined,
  subtext: undefined,
  disabled: false,
};

export default Option;
