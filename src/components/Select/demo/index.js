/**
 *
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2019-03-24 12:28
 */
import {Select} from 'shineDev';

const components = {Select};

export default {
  basic: {
    components,
    jsx:
`<div className="shine-select-helper">
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
  } />
</div>`,
  },
};
