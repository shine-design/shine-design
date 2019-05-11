/**
 *
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2019-05-09 13:28
 */
import React, {Component} from 'react';
import {Form, Input} from "shineDev";

class VerifierDemo extends Component {

  render() {

    return (
      <Form>
        <Form.Verifier isHighlight={true} >
          <Form.Item label="普通文本">
            <Input name="text" placeholder="必填项" rules={{required: true}}/>
          </Form.Item>
          <Form.Item label="普通文本">
            <Input name="minLenText" placeholder="不得少于5个字符" rules={{minLen: 5}}/>
          </Form.Item>
          <Form.Item label="普通文本">
            <Input name="maxLenText" placeholder="不得超过5个字符" rules={{maxLen: 5}}/>
          </Form.Item>
          <Form.Item label="普通文本">
            <Input name="emailText" placeholder="请输入电子邮箱" rules={{email: true}}/>
          </Form.Item>
          <Form.Item label="普通文本">
            <Input name="rulText" placeholder="请输入网址" rules={{url: true}}/>
          </Form.Item>
          <Form.Item label="普通文本">
            <Input name="numberText" placeholder="请输入数字" rules={{number: true}}/>
          </Form.Item>
          <Form.Item label="普通文本">
            <Input name="minText" placeholder="请输入小于5的数" rules={{max: 5}}/>
          </Form.Item>
          <Form.Item label="普通文本">
            <Input name="maxLenText" placeholder="请输入大于5的数" rules={{min: 5}}/>
          </Form.Item>
          <Form.Item label="普通文本">
            <Input name="equalToText" placeholder="请输入预设值（love）" rules={{equalTo: 'love'}}/>
          </Form.Item>
        </Form.Verifier>
      </Form>
    );
  }
}

export default VerifierDemo;
