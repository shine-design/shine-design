/**
 * 示例文档 - 表单校验
 *
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2020-03-21 22:21
 */
import {CheckboxGroup, Form, Input, Select} from 'shineDev';

const components = {Form, Input, CheckboxGroup, Select};

export default {
  custom: {
    components,
    jsx: `
  <Form>
    <Form.Verifier isHighlight >
      <Form.Item label="普通文本">
        <Input
          name="text"
          placeholder="必填项"
          rules={{
            customA: value => {
              console.log(value);
              return false;
            }
          }}
          errorMsg={{
            customA: '自定义报错提示',
          }}
        />
      </Form.Item>
    </Form.Verifier>
  </Form>
`,
  },
  verifier: {
    components,
    jsx: `<div className="shine-form-helper">
  <Form>
    <Form.Verifier isHighlight >
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
      <Form.Item label="复选组件" helper="目前复选组件仅支持非空校验和自定义方法校验" >
          <CheckboxGroup 
            isInline
            isControlled={false}
            options={[
              {label:'选项一',value:1},
              {label:'选项二',value:2},
              {label:'选项三',value:3}
            ]}
            rules={{required: true}}
            onChange={e=>console.log(e)}
           />
      </Form.Item>
      <Form.Item label="普通选择框">
          <Select 
              options={[
                {label: '请选择选项',value: ''},
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
    </Form.Verifier>
  </Form>
</div>
`,
  },
};
