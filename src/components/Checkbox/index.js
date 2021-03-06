/**
 * @Component Checkbox
 * @Type 复选框组件
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2020-03-22 11:47
 */
import React, {PureComponent} from 'react';
import Options from "../Option/Options";

class Checkbox extends PureComponent {

  render() {
    return <Options {...this.props} type="checkbox" />
  }
}

export default Checkbox;

