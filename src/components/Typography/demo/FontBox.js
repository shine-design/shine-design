/**
 * 字体展示框组件
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2019-05-13 15:24
 */
import classNames from 'classnames';
import React, {PureComponent} from 'react';
import './index.scss';
import * as PropTypes from "prop-types";

class FontBox extends PureComponent {

  render() {
    const {fontName, displayName, className} = this.props;
    const classes = classNames('demo-fontFamily-box', className);

    return (
      <div className={classes}>
        {displayName}
        <div className="name">
          {fontName}
        </div>
      </div>
    );
  }
}

FontBox.propTypes = {
  /** 字体展示名称 */
  fontName: PropTypes.string,
  /** 文本展示名称 */
  displayName: PropTypes.string,
  /** 用户自定义修饰符 */
  className: PropTypes.string,
};

FontBox.defaultProps = {
  fontName: undefined,
  displayName: '杨柳依依',
  className: '',
};

export default FontBox;
