/**
 *
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2019-04-29 09:28
 */
import {Form, Input} from "shineDev";

const {Item} = Form;
const components = {Form, Item, Input};

export default {
  form: {
    components,
    jsx: `
<div className="shine-form-helper">
    <Form>
        <Form.Item label="普通文本" helper="We'll never share your text with anyone else.">
            <Input placeholder="请输入文本" />
        </Form.Item>
    </Form>
</div>
`,
  },
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
`,
  },
};

