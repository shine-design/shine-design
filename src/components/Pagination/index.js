/**
 * Pagination
 * 分页
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2020-03-31 11:48
 */
import _ from 'lodash';
import React, {Component} from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';
import {classPrefix} from 'variables';
import Icon from '../Icon';

class Pagination extends Component {

  state = {
    currentPage: 1,
    currentLineCount: 10
  };

  componentDidMount() {
    const {currentPage, currentLineCount, isControlled} = this.props;
    if (!isControlled) {
      this.setState({
        ...currentPage ? {currentPage} : {},
        ...currentLineCount ? {currentLineCount} : {}
      });
    }
  }

  countDisplayPages = () => {
    const {displayCount, currentPage, isControlled, totalPageCount} = this.props;
    const current = isControlled ? currentPage : this.state.currentPage;
    let prevCount = parseInt(displayCount / 2, 10);
    let nextCount = displayCount - prevCount - 1;
    let prevFlag = false;
    let nextFlag = false;
    if (current - prevCount < 1) {
      prevCount = current - 1;
      prevFlag = true;
    }
    if (current + nextCount > totalPageCount) {
      nextCount = totalPageCount - current;
      nextFlag = true;
    }
    if (prevFlag && !nextFlag) {
      nextCount = displayCount - prevCount - 1;
    }

    if (!prevFlag && nextFlag) {
      prevCount = displayCount - nextCount - 1;
    }

    const result = [];
    _.times(prevCount, item => result.unshift(current - item - 1));
    result.push(current);
    _.times(nextCount, item => result.push(current + item + 1));
    return result;
  };

  renderSpecialPage = (isRender, iconProps, onClick) => {

    return isRender ? (
      <li className={classNames(`${classPrefix}-pagination__link--common`)}>
        <a onClick={onClick}>
          <Icon {...iconProps} />
        </a>
      </li>
    ) : null;
  };

  onClickStep = currentPage => {
    const {onChange, isControlled} = this.props;

    if (isControlled) {
      _.isFunction(onChange) && onChange(currentPage);
    } else {
      this.setState({currentPage});
    }
  };

  onClickLine = currentLineCount => {
    const {onChangeLine, isControlled} = this.props;

    if (isControlled) {
      _.isFunction(onChangeLine) && onChangeLine(currentLineCount);
    } else {
      this.setState({currentLineCount});
    }
  };

  render() {
    const {firstPage, prevPage, nextPage, lastPage, firstIconProps, prevIconProps, nextIconProps, lastIconProps} = this.props;
    const {size, bgColor, circleStyle, lineCount, lineCountList, totalPageCount, isControlled, showInfo, infoRenderer, currentPage, currentLineCount, className, attributes} = this.props;

    /** 计算样式 */
    const classes = classNames(
      `${classPrefix}-pagination`,
      {
        [`${classPrefix}-pagination--${bgColor}`]: bgColor,
        [`${classPrefix}-pagination--${size}`]: _.isString(size) && _.includes(['sm', 'lg'], size),
        [`${classPrefix}-pagination--circle`]: circleStyle
      },
      className,
    );
    // 获取展示页码
    const displayArray = this.countDisplayPages();
    // 计算当前页码
    const current = isControlled ? currentPage : this.state.currentPage;
    const currentLine = isControlled ? currentLineCount : this.state.currentLineCount;

    return (
      <div className={classes} {...attributes} style={{height: '30px'}}>
        <ul className="shine-pagination__links">
          {this.renderSpecialPage(firstPage, firstIconProps, () => this.onClickStep(1))}
          {this.renderSpecialPage(prevPage && current > 1, prevIconProps, () => this.onClickStep(current - 1))}
          {
            _.isArray(displayArray) && _.map(displayArray, (item, index) => (
              <li
                className={
                  classNames({
                    [`${classPrefix}-pagination__link--active`]: _.isEqual(current, item)
                  })
                }
                key={index}
              >
                <a onClick={() => this.onClickStep(item)}>{item}</a>
              </li>
            ))
          }
          {this.renderSpecialPage(nextPage && current < totalPageCount, nextIconProps, () => this.onClickStep(current + 1))}
          {this.renderSpecialPage(lastPage, lastIconProps, () => this.onClickStep(totalPageCount))}
        </ul>
        <div className="shine-pagination__toolbar">
          {
            lineCount && (
              <select
                className="form-control shine-font-brand"
                style={{width: '60px'}}
                value={currentLine}
                onChange={e => this.onClickLine(e.target.value)}
              >
                {_.map(lineCountList, item => (<option value={item}>{item}</option>))}
              </select>
            )
          }
          {
            showInfo && (
              _.isFunction(infoRenderer)
                ? infoRenderer(current, totalPageCount)
                : (<span className="pagination__desc">第 {current}/{totalPageCount} 页</span>)
            )
          }
        </div>
      </div>
    );
  }
}


Pagination.propTypes = {
  /** 总页数 */
  totalPageCount: PropTypes.number,
  /** 当前页码 */
  currentPage: PropTypes.number,
  /** 当前行数 */
  currentLineCount: PropTypes.number,
  /** 单独展示的页码数量 */
  displayCount: PropTypes.number,
  /** 指定页码的大小， sm - 小尺寸 / lg - 大尺寸 */
  size: PropTypes.oneOf(['sm', 'lg']),
  /** 是否显示数量选择 */
  lineCount: PropTypes.bool,
  /** 数量选择选项 */
  lineCountList: PropTypes.array,
  /** 是否显示上一页 */
  prevPage: PropTypes.bool,
  /** 是否显示下一页 */
  nextPage: PropTypes.bool,
  /** 是否显示前往首页 */
  firstPage: PropTypes.bool,
  /** 是否显示前往尾页 */
  lastPage: PropTypes.bool,
  /** 上一页图标配置，参考 Icon 相关配置 */
  prevIconProps: PropTypes.object,
  /** 下一页图标配置，参考 Icon 相关配置 */
  nextIconProps: PropTypes.object,
  /** 回首页图标配置，参考 Icon 相关配置 */
  firstIconProps: PropTypes.object,
  /** 前往尾页页图标配置，参考 Icon 相关配置 */
  lastIconProps: PropTypes.object,
  /** 页码背景色 */
  bgColor: PropTypes.string,
  /** 是否显示圆形页码样式 */
  circleStyle: PropTypes.bool,
  /** 是否受控 */
  isControlled: PropTypes.bool,
  /** 是否展示页码文案 */
  showInfo: PropTypes.bool,
  /** 指定页码文案渲染方式 */
  infoRenderer: PropTypes.func,
  /** 页码发生改变时回调 */
  onChange: PropTypes.func,
  /** 行数发生改变时回调 */
  onChangeLine: PropTypes.func,
  /** 用户自定义修饰符 */
  className: PropTypes.string,
  /** 用户自定义属性 */
  attributes: PropTypes.object,
};

Pagination.defaultProps = {
  totalPageCount: undefined,
  currentPage: undefined,
  currentLineCount: undefined,
  displayCount: 5,
  size: undefined,
  lineCount: true,
  lineCountList: [10, 20, 30, 50, 100],
  prevPage: true,
  nextPage: true,
  firstPage: true,
  lastPage: true,
  prevIconProps: {iconName: 'angle-left'},
  nextIconProps: {iconName: 'angle-right'},
  firstIconProps: {iconName: 'angle-double-left'},
  lastIconProps: {iconName: 'angle-double-right'},
  isControlled: false,
  circleStyle: false,
  showInfo: true,
  infoRenderer: undefined,
  onChange: undefined,
  onChangeLine: undefined,
  bgColor: 'brand',
  className: '',
  attributes: {},
};

export default Pagination
