/**
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2019-04-29 09:28
 */
import {Radio, Divider, RadioGroup} from "shineDev";

const components = {Radio, Divider, RadioGroup};

export default {
  basic: {
    components,
    jsx: `
<div className="shine-checkbox-helper">
  <Radio label="默认状态" />
  <Radio label="禁用状态" disabled />
  <Radio label="选中状态" defaultChecked />
</div>
`,
  },
  state: {
    components,
    jsx: `<Divider message="带状态的单选框" />
<div className="shine-checkbox-helper">
  <Radio label="Success" bgColor="success" defaultChecked/>
  <Radio label="Brand" bgColor="brand" />
  <Radio label="Warning" bgColor="warning" defaultChecked/>
  <Radio label="Danger" bgColor="danger" />
</div> 
<Divider message="加粗的单选框" />
<div className="shine-checkbox-helper">
  <Radio label="Success" bgColor="success" isBold defaultChecked/>
  <Radio label="Brand" bgColor="brand" isBold/>
  <Radio label="Warning" bgColor="warning" isBold defaultChecked/>
  <Radio label="Danger" bgColor="danger" isBold/>
</div> 
<Divider message="实心的单选框" />
<div className="shine-checkbox-helper">
  <Radio label="Success" bgColor="success" isSolid defaultChecked/>
  <Radio label="Brand" bgColor="brand" isSolid/>
  <Radio label="Warning" bgColor="warning" isSolid defaultChecked/>
  <Radio label="Danger" bgColor="danger" isSolid/>
</div> 
`,
  },
  group: {
    components,
    jsx: `
<Divider message="竖向排列" />
  <RadioGroup 
    isControlled={false}
    value={[2]}
    options={[
      {label: '选项一', value: 1},
      {label: '选项二', value: 2},
      {label: '选项三', value: 3}
    ]}
  />
<Divider message="横向排列" />
  <RadioGroup 
    isInline
    isControlled={false}
    value={[2]}
    options={[
      {label: '选项一', value: 1},
      {label: '选项二', value: 2,defaultChecked:true},
      {label: '选项三', value: 3}
    ]}
  />
`,
  },
};

