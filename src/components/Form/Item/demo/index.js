/**
 * 示例文档 - 表单项
 *
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2020-03-21 22:21
 */
import {Form, Input} from "shineDev";

const components = {Form, Input};

export default {
  label: {
    components,
    jsx: `
  <div className="shine-form-helper">
     <Form>
        <Form.Item label="普通文本">
            <Input placeholder="请输入文本" />
        </Form.Item>
        <Form.Item label="普通文本" helper="We'll never share your text with anyone else.">
          <Input placeholder="请输入文本" />
        </Form.Item>
    </Form>
  </div>
`
  }
};

