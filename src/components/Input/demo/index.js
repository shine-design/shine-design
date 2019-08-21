/**
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2019-04-29 09:28
 */
import {Input} from "shineDev";

const components = {Input};

export default {
  basic: {
    components,
    jsx: `
<div className="shine-input-helper">
    <Input placeholder="请输入文本" />
    <Input type="password" placeholder="请输入密码" />
    <Input type="number" placeholder="请输入数字" />
</div>
`,
  },
  size: {
    components,
    jsx: `
<div className="shine-input-helper">
    <Input size="small" placeholder="请输入文本" />
    <Input size="default" placeholder="请输入文本" />
    <Input size="large" placeholder="请输入文本" />
</div>
`,
  },
  state: {
    components,
    jsx: `
<div className="shine-input-helper">
    <Input isDisabled={true} value="禁用文本框" placeholder="请输入文本" />
    <Input isReadOnly={true}  value="只读文本框" placeholder="请输入文本" />
</div>
`,
  },
  formStyle: {
    components,
    jsx: `
<div className="shine-input-helper">
    <Input formStyle="default" placeholder="圆角矩形文本框" />
    <Input formStyle="square" placeholder="直角矩形文本框" />
    <Input formStyle="pill" placeholder="椭圆矩形文本框" />
</div>
`,
  },
  event: {
    components,
    jsx: `
<div className="shine-input-helper">
    <Input
      placeholder="打开控制台查看效果"
      onChange={e=>{console.log('onChange',e.target.value)}}
      onBlur={e=>{console.log('onBlur',e.target.value)}}
      onClick={e=>{console.log('onClick',e.target.value)}}
    />
</div>
`,
  },
};

