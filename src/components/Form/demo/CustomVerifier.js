/**
 *
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2019-05-09 13:28
 */
import React, {Component} from 'react';
import {Form, Input} from "shineDev";

class CustomVerifierDemo extends Component {

  render() {

    return (
      <Form>
        <Form.Verifier isHighlight={true}>
          <Form.Item label="普通文本">
            <Input
              name="text"
              placeholder="必填项"
              rules={{
                customA: value => {
                  return false;
                },
              }}
              errorMsg={{
                customA: '自定义报错提示',
              }}
            />
          </Form.Item>
        </Form.Verifier>
      </Form>
    );
  }
}

export default CustomVerifierDemo;
