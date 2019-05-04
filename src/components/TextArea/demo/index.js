/**
 *
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2019-05-02 22:08
 */
import {TextArea} from "shineDev";

const components = {TextArea};

export default {
  basic: {
    components,
    jsx: `
<div class="shine-input-helper">
    <TextArea placeholder="请输入多行文本" />
</div>
`,
  },
  size: {
    components,
    jsx: `
<div class="shine-input-helper">
    <TextArea size="small" placeholder="请输入文本" />
    <TextArea size="default" placeholder="请输入文本" />
    <TextArea size="large" placeholder="请输入文本" />
</div>
`,
  },
  state: {
    components,
    jsx: `
<div class="shine-input-helper">
    <TextArea isDisabled={true} value="禁用文本域" placeholder="请输入文本" />
    <TextArea isReadOnly={true}  value="只读文本域" placeholder="请输入文本" />
</div>
`,
  },
  textAreaStyle: {
    components,
    jsx: `
<div class="shine-input-helper">
    <TextArea textAreaStyle="default" placeholder="圆角矩形文本域" />
    <TextArea textAreaStyle="square" placeholder="直角矩形文本域" />
    <TextArea textAreaStyle="pill" placeholder="椭圆矩形文本域" />
</div>
`,
  },
  event: {
    components,
    jsx: `
<div class="shine-input-helper">
    <TextArea
      placeholder="打开控制台查看效果"
      onChange={e=>{console.log('onChange',e.target.value)}}
      onBlur={e=>{console.log('onBlur',e.target.value)}}
      onClick={e=>{console.log('onClick',e.target.value)}}
    />
</div>
`,
  },
};

