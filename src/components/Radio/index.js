/**
 * @Component Radio
 * @Type 单选框组件
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2020-03-22 11:47
 */
import React, {PureComponent} from 'react';
import Options from "../Option/Options";

class Radio extends PureComponent {

  render() {
    return <Options {...this.props} type="radio" />
  }
}

export default Radio;

