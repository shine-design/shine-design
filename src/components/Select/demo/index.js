/**
 *
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2019-03-24 12:28
 */
import {Select, Form} from 'shineDev';

const components = {Select, Form};

export default {
  basic: {
    components,
    jsx:
      `<div className="shine-select-helper">
  <Form>
    <Form.Item label="基础选择框" isInline>
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
    <Form.Item label="限定选项数量" isInline helper="支持设置每页仅显示4条记录，更多记录滚动展示">
      <Select 
          size={4}
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
    <Form.Item label="支持多选" isInline >
      <Select 
          multiple
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
    <Form.Item label="开启搜索" isInline helper="选择框支持实时搜索，也可以通过定制选项 tokens 关键词属性，提升搜索准确性，试着搜索 张三 。">
      <Select 
          liveSearch
          options={[
            {label: '选项一', value: 1, keywords: ['这是第一个搜索']},
            {label: '选项二', value: 2, keywords: ['张三','李四']},
            {label: '选项三', value: 3},
            {label: '选项四', value: 4},
            {label: '选项四', value: 5},
            {label: '选项四', value: 6},
            {label: '选项四', value: 7},
          ]
        } 
      />
    </Form.Item> 
    <Form.Item label="最大选择数量" isInline helper="设置当前多选最大选择数量，支持定制错误提示文案。">
      <Select 
          multiple
          maxOptions={2}
          maxOptionsText="当前已经超过最大选择数量"
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
    <Form.Item label="标题" isInline helper="当用户没有选择选项时，默认展示在组件上。">
      <Select 
          title="这是选择框标题"
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
    <Form.Item label="选项标题" isInline helper="在选项中设置 title 属性，可以指定选中时选择框内展示的文案内容。">
      <Select 
          title="这是选择框标题"
          options={[
            {label: '选项一', value: 1, title: '这是第一个选项'},
            {label: '选项二', value: 2, title: '这是第二个选项'},
            {label: '选项三', value: 3, title: '这是第三个选项'},
            {label: '选项四', value: 4, title: '这是第四个选项'},
            {label: '选项四', value: 5, title: '这是第五个选项'},
            {label: '选项四', value: 6, title: '这是第六个选项'},
            {label: '选项四', value: 7, title: '这是第七个选项'},
          ]
        } 
      />
    </Form.Item> 
    <Form.Item label="宽度 200px" isInline helper="支持固定宽度，百分比，自适应（auto）。">
      <Select 
          width="200px"
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
    <Form.Item label="宽度 80%" isInline helper="支持固定宽度，百分比，自适应（auto）。">
      <Select 
          width="80%"
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
    <Form.Item label="宽度自适应" isInline helper="支持固定宽度，百分比，自适应（auto）。">
      <Select 
          width="auto"
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
    <Form.Item label="快捷选项" isInline helper="针对多选我们提供全部选中、全部取消按钮，还可以指定相关文案。" >
      <Select 
          multiple
          actionsBox
          selectAllText="全部选中"
          deselectAllText="取消选中"
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
    <Form.Item label="副标题" isInline >
      <Select 
          options={[
            {label: '选项一', value: 1, subtext: '副标题一'},
            {label: '选项二', value: 2, subtext: '副标题二'},
            {label: '选项三', value: 3, subtext: '副标题三'},
            {label: '选项四', value: 4, subtext: '副标题四'},
            {label: '选项四', value: 5, subtext: '副标题五'},
            {label: '选项四', value: 6, subtext: '副标题六'},
            {label: '选项四', value: 7, subtext: '副标题七'},
          ]
        } 
      />
    </Form.Item> 
    <Form.Item label="禁用选择器" isInline >
      <Select 
          disabled
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
    <Form.Item label="禁用选项" isInline >
      <Select 
          options={[
            {label: '选项一', value: 1},
            {label: '选项二', value: 2, disabled: true},
            {label: '选项三', value: 3},
            {label: '选项四', value: 4, disabled: true},
            {label: '选项四', value: 5},
            {label: '选项四', value: 6},
            {label: '选项四', value: 7},
          ]
        } 
      />
    </Form.Item> 
    <Form.Item label="分隔线" isInline >
      <Select 
          options={[
            {label: '选项一', value: 1},
            {label: '选项二', value: 2},
            {type: 'divider'},
            {label: '选项四', value: 4},
            {label: '选项四', value: 5},
            {type: 'divider'},
            {label: '选项四', value: 6},
            {label: '选项四', value: 7},
          ]
        } 
      />
    </Form.Item>     <Form.Item label="选择器状态" isInline >
      <Select 
          bgColor="success"
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
      <Select 
          bgColor="danger"
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
</div>`,
  },
};
