/**
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2019-04-29 09:28
 */
import {Checkbox, Divider, CheckboxGroup} from "shineDev";

const components = {Checkbox, Divider, CheckboxGroup};

const options = [{label: '选项一', value: 1}];

export default {
  basic: {
    components,
    jsx: `
<div className="shine-checkbox-helper">
  <Checkbox label="默认状态" />
  <Checkbox label="禁用状态" disabled />
  <Checkbox label="选中状态" defaultChecked />
</div>
`,
  },
  state: {
    components,
    jsx: `<Divider message="带状态的复选框" />
<div className="shine-checkbox-helper">
  <Checkbox label="Success" bgColor="success" defaultChecked/>
  <Checkbox label="Brand" bgColor="brand" />
  <Checkbox label="Warning" bgColor="warning" defaultChecked/>
  <Checkbox label="Danger" bgColor="danger" />
</div> 
<Divider message="加粗的复选框" />
<div className="shine-checkbox-helper">
  <Checkbox label="Success" bgColor="success" isBold defaultChecked/>
  <Checkbox label="Brand" bgColor="brand" isBold/>
  <Checkbox label="Warning" bgColor="warning" isBold defaultChecked/>
  <Checkbox label="Danger" bgColor="danger" isBold/>
</div> 
<Divider message="实心的复选框" />
<div className="shine-checkbox-helper">
  <Checkbox label="Success" bgColor="success" isSolid defaultChecked/>
  <Checkbox label="Brand" bgColor="brand" isSolid/>
  <Checkbox label="Warning" bgColor="warning" isSolid defaultChecked/>
  <Checkbox label="Danger" bgColor="danger" isSolid/>
</div> 
`,
  },
  group: {
    components,
    jsx: `
<Divider message="竖向排列" />
  <CheckboxGroup 
    isControlled={false}
    value={[2]}
    options={[
      {label: '选项一', value: 1},
      {label: '选项二', value: 2},
      {label: '选项三', value: 3}
    ]}
  />
<Divider message="横向排列" />
  <CheckboxGroup 
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

