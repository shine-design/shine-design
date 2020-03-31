/**
 * 示例文档 - 表单项
 *
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2020-03-21 22:21
 */
import {Form, Input, CheckboxGroup, Select} from "shineDev";

const components = {Form, Input, CheckboxGroup, Select};

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
        <Form.Item label="复选组件" helper="We'll never share your text with anyone else.">
          <CheckboxGroup 
            isInline
            isControlled={false}
            options={[
              {label:'选项一',value:1},
              {label:'选项二',value:2},
              {label:'选项三',value:3}
            ]}
            onChange={e=>console.log(e)}
           />
        </Form.Item>
        <Form.Item label="复选组件" helper="We'll never share your text with anyone else.">
          <CheckboxGroup 
            isControlled={false}
            options={[
              {label:'选项一',value:1},
              {label:'选项二',value:2},
              {label:'选项三',value:3}
            ]}
            onChange={e=>console.log(e)}
           />
        </Form.Item>
        <Form.Item label="选择组件">
          <Select 
              options={[
                {label: '选项一', value: 1},
                {label: '选项二', value: 2},
                {label: '选项三', value: 3},
                {label: '选项四', value: 4},
                {label: '选项四', value: 5},
                {label: '选项四', value: 6},
                {label: '选项四', value: 7},
              ]
            } 
          />
        </Form.Item>   
    </Form>
  </div>
`,
  },
};

