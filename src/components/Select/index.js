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
import './style/index.scss';

class Select extends PureComponent {
  constructor(props) {
    super(props);

    this.select = React.createRef();
  }

  componentDidMount() {
    const _select = this.select.current;
    jQuery(_select).selectpicker();
  }

  render() {
    const {size, formStyle, options, className, attributes} = this.props;

    /** 计算样式 */
    const classes = classNames(
      `${classPrefix}-form-control`,
      {
        [`${classPrefix}-form-control-${size}`]: _.includes(['small', 'large'], size),
        [`${classPrefix}-form-control--${formStyle}`]: _.includes(['pill', 'square'], formStyle),
      },
      className,
    );

    const _optSources = _.isArray(options) && _.map(options, (option, index) => {
      return <option key={index} value={option.value}>{option.label}</option>
    });

    return (
      <select
        ref={this.select}
        className={classes}
        {...attributes}
      >
        {_optSources}
      </select>
    );
  }
}

Select.propTypes = {
  /** 设置输入框尺寸，支持 default：默认 / small：小尺寸 / large：大尺寸 */
  size: PropTypes.oneOf(['default', 'small', 'large']),
  /** 输入框样式，支持 default：圆角矩形 / pill：椭圆形矩形 / square：直角矩形 */
  formStyle: PropTypes.oneOf(['default', 'pill', 'square']),
  /** 用户自定义修饰符 */
  className: PropTypes.string,
  /** 用户自定义属性 */
  attributes: PropTypes.object,
};

Select.defaultProps = {
  size: 'default',
  formStyle: 'default',
  className: '',
  attributes: {},
};

export default Select;
