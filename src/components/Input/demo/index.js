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
</div>
`,
  },
  size: {
    components,
    jsx: `
<div className="shine-input-helper">
    <Input size="sm" placeholder="请输入文本" />
    <Input placeholder="请输入文本" />
    <Input size="lg" placeholder="请输入文本" />
</div>
`,
  },
  state: {
    components,
    jsx: `
<div className="shine-input-helper">
    <Input isDisabled value="禁用文本框" placeholder="请输入文本" />
    <Input isReadOnly  value="只读文本框" placeholder="请输入文本" />
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

