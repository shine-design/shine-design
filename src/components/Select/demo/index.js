/**
 *
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2019-03-24 12:28
 */
import {Select} from 'shineDev';

const components = {Select};

const basicOptions = [
  {label: '选项一', value: 1},
  {label: '选项二', value: 2},
  {label: '选项三', value: 3},
  {label: '选项四', value: 4},
];

export default {
  basic: {
    components,
    jsx:
`<div className="shine-select-helper">
   <Select options={[
    {label: '选项一', value: 1},
    {label: '选项二', value: 2},
    {label: '选项三', value: 3},
    {label: '选项四', value: 4},
]} />
</div>`,
  },
};
